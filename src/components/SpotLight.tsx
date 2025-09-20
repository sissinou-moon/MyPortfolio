"use client";

import { useRef, useEffect } from "react";

export default function CursorLightGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const gl = canvas.getContext("webgl");
        if (!gl) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
        };
        resize();
        window.addEventListener("resize", resize);

        const vertexSrc = `
          attribute vec2 position;
          void main() {
            gl_Position = vec4(position, 0.0, 1.0);
          }
        `;

        const fragSrc = `
          precision mediump float;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float hash(float n) {
    return fract(sin(n) * 43758.5453123);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    // Distance from cursor
    float d = distance(gl_FragCoord.xy, u_mouse);
    float light = smoothstep(1.0, 0.0, d / 150.0); // glow

    // Brick-like grid effect (wider + bigger)
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
    vec2 grid = uv * aspect * vec2(2.0, 6.0);
    grid.x += step(1.0, mod(floor(grid.y), 2.0)) * 0.5;
    vec2 cell = fract(grid) - 0.5;
    float borderX = step(0.495, abs(cell.x));
    float borderY = step(0.48, abs(cell.y));
    float border = max(borderX, borderY);

    // Base grid color (faint background)
    vec3 baseColor = vec3(0.0, 0.05, 0) * border * 0.3;

    // Glow near cursor (unchanged greenish tone)
    vec3 glowColor = vec3(0.0, 0.3, 0.04) * border * light;

    // ✨ Floating sparks
    vec3 sparkColor = vec3(0.0);
    const int NUM_SPARKS = 60;

    for (int i = 0; i < NUM_SPARKS; i++) {
        float fi = float(i);

        // Base random position
        vec2 basePos = vec2(
            hash(fi * 12.9898) * u_resolution.x,
            hash(fi * 78.233) * u_resolution.y
        );

        // Floating offset (small movement over time)
        float angle = u_time * (0.2 + 0.1 * fi);  
        vec2 offset = vec2(cos(angle + fi) * 15.0, sin(angle + fi * 1.3) * 15.0);

        // Final spark position with floating
        vec2 sparkPos = basePos + offset;

        float sd = distance(gl_FragCoord.xy, sparkPos);

        // Core + glow
        float core = smoothstep(3.0, 0.0, sd);
        float halo = smoothstep(6.0, 0.0, sd) * 0.3;

        // React to cursor proximity
        float cursorEffect = smoothstep(250.0, 0.0, distance(sparkPos, u_mouse));

        // Same green tones
        sparkColor += vec3(0.1, 0.6, 0.2) * core * cursorEffect;
        sparkColor += vec3(0.0, 0.8, 0.3) * halo * cursorEffect;
    }

    // Final color
    vec3 finalColor = baseColor + glowColor + sparkColor;
    gl_FragColor = vec4(finalColor, 1.0);
}

        `;

        const compile = (type: number, source: string) => {
            const shader = gl.createShader(type)!;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            return shader;
        };

        const program = gl.createProgram()!;
        gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSrc));
        gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragSrc));
        gl.linkProgram(program);
        gl.useProgram(program);

        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
            gl.STATIC_DRAW
        );

        const pos = gl.getAttribLocation(program, "position");
        gl.enableVertexAttribArray(pos);
        gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

        const resLoc = gl.getUniformLocation(program, "u_resolution");
        const mouseLoc = gl.getUniformLocation(program, "u_mouse");
        const timeLoc = gl.getUniformLocation(program, "u_time");

        let start = Date.now();
        const render = () => {
            let t = (Date.now() - start) * 0.001;
            gl.uniform2f(resLoc, canvas.width, canvas.height);
            gl.uniform1f(timeLoc, t);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
        };
        render();

        window.addEventListener("mousemove", (e) => {
            gl.uniform2f(mouseLoc, e.clientX, canvas.height - e.clientY);
        });

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
