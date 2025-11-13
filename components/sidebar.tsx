import styles from "@/styles/sidebar.module.css";

export default function Sidebar() {
    return <nav className={styles.sidebar}>
        <ul className={styles.sidebar__list}>
            <li><a href="#">🏠</a></li>
            <li><a href="#">🗺️</a></li>
            <li><a href="#">📋</a></li>
            <li><a href="#">📅</a></li>
        </ul>
    </nav>
}