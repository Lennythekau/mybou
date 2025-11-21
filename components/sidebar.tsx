import styles from "@/styles/sidebar.module.css";
import Link from "next/link";

export default function Sidebar() {
    return <nav className={styles.sidebar}>
        <ul className={styles.sidebar__list}>
            <li><Link href="/">🏠</Link></li>
            <li><Link href="/map">🗺️</Link></li>
            <li><Link href="/attendance">📋</Link></li>
            <li><Link href="#">📅</Link></li>
            <li><Link href="#">🔎</Link></li>
        </ul>
    </nav>
}