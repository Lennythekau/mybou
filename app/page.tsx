// import SignIn from "@/components/sign-in";
import styles from "@/styles/homepage.module.css";
import Link from "next/link";

export default function Page() {
    const name = "Ken";
    return (
        <div className="padded-container">
            <p className={`${styles.welcome}`}>Welcome, <span className={styles.name}>{name}</span>.</p>

            <section className={`${styles.dashboard} ${styles.section}`}>
                <div className={styles.card}>
                    <p className={styles["card__title"]}>Email</p>
                    <p>5 <span className={styles.unread}>unread</span></p>
                </div>

                <div className={styles.card}>
                    <p className={styles["card__title"]}>Calendar</p>
                    <p>Nothing planned for today</p>
                </div>

                <div className={styles.card}>
                    <p className={styles["card__title"]}>Attendance</p>
                    <p>Nothing planned for today</p>
                </div>
            </section>

            <h1>Quick Links</h1>
            <section className={styles.section + " " + styles["quick-links"]}>
                <div className={styles.card}>
                    <p className={styles["card__title"]}>💻 IT articles</p>
                    <ul>
                        <li><a href="https://itservicedesk.bham.ac.uk/itportal?id=uob_kb_article&sysparm_article=KB12702">🔑 Manage password</a></li>
                        <li><a href="https://itservicedesk.bham.ac.uk/itportal">🕳️ IT Portal</a></li>
                        <li><a href="https://itservicedesk.bham.ac.uk/itportal?id=services_status">❗ Status</a></li>
                        <li><a href="https://bham.sharepoint.com/sites/IT/">❓ Learn more</a></li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <p className={styles["card__title"]}>💯 Academics</p>
                    <ul>
                        <li><a href="https://learner-profile.bham.ac.uk/">🕴️ Learner profile</a> (attendance % + more!).</li>
                        <li><a href="https://intranet.birmingham.ac.uk/student/study-spaces/index.aspx">🏫 Study spaces</a></li>
                        <li><a href="https://birmingham.primo.exlibrisgroup.com/discovery/search?vid=44BIR_INST:44BIR_VU1&tab=everywhere">📖 Find @ Bham</a></li>
                        <li><a href="https://www.intranet.birmingham.ac.uk/student/careers/internships-and-work-experience/index.aspx">💼 Work experience</a></li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <p className={styles["card__title"]}>🛡️ Support</p>
                    <ul>
                        <li><a href="https://intranet.birmingham.ac.uk/student/Your-Wellbeing/Index.aspx">💖 Wellbeing</a></li>
                        <li><a href="https://intranet.birmingham.ac.uk/student/urgent-support.aspx">‼️ Urgent support</a></li>
                        <li><a href="https://intranet.birmingham.ac.uk/student/student-hub/homepage.aspx">🤝 Student Help</a></li>
                        <li><a href="https://studentspace.org.uk/">💭Student space</a></li>
                        <li><a href="https://intranet.birmingham.ac.uk/student/your-wellbeing/time-to-talk.aspx">💬Time to talk</a></li>
                        <li><a href="https://intranet.birmingham.ac.uk/student/financial-support/managing-living-costs.aspx">💷 Living costs</a></li>
                        <li><a href="https://intranet.birmingham.ac.uk/student/community-safety-and-security/index.aspx">🚔 Security/safety</a></li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <p className={styles["card__title"]}>🧮 Misc.</p>
                    <ul>
                        <li><Link href="/accessibility">👐 Accessibility</Link></li>
                        <li><Link href="/about">🤔 About</Link></li>

                    </ul>
                </div>

            </section>


        </div>
    )
}