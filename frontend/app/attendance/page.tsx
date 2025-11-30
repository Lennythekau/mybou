import TimetabledSessionCard from "@/components/timetabled-session-card";
import styles from "@/styles/attendance.module.css";
import { type TimetabledSession } from "@/types";
import axios from "axios";

export default async function Page() {

    const response = await axios.get("http://localhost:5066/timetable/1");

    let sessions: TimetabledSession[] = [];

    (response.data as any[]).forEach(session => {
        session.startTime = new Date(session.startTime);
        session.endTime = new Date(session.endTime);
    })
    sessions = response.data as TimetabledSession[];


    return (
        <div className={styles["attendance-page"]}>
            <section className={styles["attendance__my-day"]}>
                <p className={styles["attendance__my-day__title"]}>My day</p>
                <div className={styles["attendance__my-day__sessions"]}>
                    {sessions.map((session, i) => <TimetabledSessionCard session={session} position={i + 1} key={i + 1} />)}
                </div>
            </section>

            <form className={styles.attendance__form}>
                <h1 >Session not listed?</h1>
                <p>You can still attempt to register your attendance:</p>
                <div>
                    <input className={styles["attendance__input"]} type="text" name="reg-code" id="reg-code" placeholder="Registration Code" />
                    <input className={styles["attendance__button"]} type="button" value="Submit" />
                </div>
            </form>
        </div>
    )
}