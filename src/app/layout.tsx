import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    variable: "--font-roboto-flex",
});

export const metadata = {
    title: "Your Portfolio",
    description: "Your name — Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${robotoFlex.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
