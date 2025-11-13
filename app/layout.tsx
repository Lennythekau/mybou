import Sidebar from "@/components/sidebar";
import { Merriweather } from "next/font/google";
import "./global.css";

const merriweather = Merriweather({
    variable: "--font-merriweather"
})

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={merriweather.variable}>
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