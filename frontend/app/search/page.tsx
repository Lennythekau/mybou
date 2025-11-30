import styles from "@/styles/search.module.css";

export default function Page() {
    return <input className={styles["search-bar"]} type="text" placeholder="Search pages..." />
}