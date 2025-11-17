import Sidebar from "@/components/sidebar";
import { Lexend, Merriweather, Playfair_Display } from "next/font/google";
import "./global.css";

const merriweather = Merriweather({ variable: "--font-merriweather" });
const playfairDisplay = Playfair_Display({ variable: "--font-playfair-display" });
const lexend = Lexend({ variable: "--font-lexend" });

function loadFonts(): string {
    return [
        merriweather.variable, playfairDisplay.variable, lexend.variable
    ].join(" ");
}


export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={loadFonts()}>
            <head>
                <title>MyBou</title>
            </head>
            <body>
                <header >
                    <span>MyBou</span>
                </header>
                <div className="app-container">
                    <main>
                        {children}
                    </main>
                    <Sidebar />
                </div>
            </body>
        </html >
    )
}