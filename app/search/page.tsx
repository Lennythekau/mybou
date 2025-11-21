import styles from "@/styles/search.module.css";

export default function Page() {
    return <div className="padded-container">
        <input className={styles["search-bar"]} type="text" placeholder="Search pages..." />
    </div>
}