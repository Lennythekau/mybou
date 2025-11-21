// import SignIn from "@/components/sign-in";
import styles from "@/styles/homepage.module.css";

export default function Page() {
    const name = "Ken";
    return (
        <div className="padded-container">
            <p className={`${styles.welcome}`}>Welcome, <span className={styles.name}>{name}</span>.</p>

            <section className={styles.dashboard}>
                <div className={styles.card}>
                    <p className={styles["card__title"]}>Email</p>
                    <p>5 <span className={styles.unread}>unread</span></p>
                </div>

                <div className={styles["card"]}>
                    <p className={styles["card__title"]}>Calendar</p>
                    <p>Nothing planned for today</p>
                </div>

                <div className={styles["card"]}>
                    <p className={styles["card__title"]}>Attendance</p>
                    <p>Nothing planned for today</p>
                </div>
            </section>


        </div>
    )
}