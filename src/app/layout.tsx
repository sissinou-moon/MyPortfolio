import type { Metadata } from "next";
import { Special_Gothic_Condensed_One } from "next/font/google";
import "./globals.css";

const specialGothic = Special_Gothic_Condensed_One({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-special-gothic-condensed-one",
});

export const metadata: Metadata = {
    title: "Your App Title",
    description: "Description here",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${specialGothic.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
