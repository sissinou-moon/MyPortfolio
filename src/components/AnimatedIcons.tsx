"use client";

import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

interface LordIconProps {
    icon: any; // filename in /public/assets/animations/
    width?: number;
    height?: number;
}

export default function LordIcon({
                                     icon,
                                     width = 250,
                                     height = 250,
                                 }: LordIconProps) {
    const playerRef = useRef<Player>(null);

    useEffect(() => {
        const player = playerRef.current;
        if (player) {
            player.playFromBeginning();

            // Listen for animation complete and replay for manual loop
            const handleComplete = () => {
                player.playFromBeginning();
            };
        }
    }, [icon]); // Re-run if icon changes

    return (
        <Player
            ref={playerRef}
            icon={icon}
            colors="primary:#ffffff"
            size={height}
            onComplete={() => playerRef.current?.playFromBeginning()}
        />    );
}