import TimetabledSessionCard from "@/components/timetabled-session-card";
import styles from "@/styles/attendance.module.css";
import { type TimetabledSession } from "@/types";

const now = new Date();

function makeTimeToday(hours: number, minutes?: number) {
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes || 0);
}

export default function Page() {


    const sessions: TimetabledSession[] = [
        {
            id: 0,
            name: "Object Oriented Programming",
            room: "Teaching Building",
            startTime: makeTimeToday(9),
            endTime: makeTimeToday(10),
        },
        {
            id: 1,
            name: "CS & PP",
            room: "Teaching and Learning Building",
            startTime: makeTimeToday(10),
            endTime: makeTimeToday(12),
        },
        {
            id: 2,
            name: "CS & PP",
            room: "Teaching and Learning Building",
            startTime: makeTimeToday(10),
            endTime: makeTimeToday(12),
        },
        {
            id: 3,
            name: "CS & PP",
            room: "Teaching and Learning Building",
            startTime: makeTimeToday(10),
            endTime: makeTimeToday(12),
        },
        {
            id: 4,
            name: "CS & PP",
            room: "Teaching and Learning Building",
            startTime: makeTimeToday(10),
            endTime: makeTimeToday(12),
        },
        {
            id: 5,
            name: "CS & PP",
            room: "Teaching and Learning Building",
            startTime: makeTimeToday(10),
            endTime: makeTimeToday(12),
        },
        {
            id: 6,
            name: "CS & PP",
            room: "Teaching and Learning Building",
            startTime: makeTimeToday(10),
            endTime: makeTimeToday(12),
        },
        {
            id: 7,
            name: "CS & PP",
            room: "Teaching and Learning Building",
            startTime: makeTimeToday(10),
            endTime: makeTimeToday(12),
        },
    ]

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