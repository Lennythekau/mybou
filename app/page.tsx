import SignIn from "@/components/sign-in";
import styles from "@/styles/homepage.module.css";

export default function Page() {
    const name = "Ken";
    return (
        <>
            <p className={`${styles.welcome}`}>Welcome, <span className={styles.name}>{name}</span>.</p>

            <section className={styles.dashboard}>
                <div>
                    <p className={styles["card-title"]}>Email</p>
                    <p>5 <span className={styles.unread}>unread</span></p>
                </div>

                <div>
                    <p className={styles["card-title"]}>Calendar</p>
                    <p>Nothing planned for today</p>
                </div>

                <div>
                    <p className={styles["card-title"]}>Attendance</p>
                    <p>Nothing planned for today</p>
                </div>
            </section>


        </>
    )
}