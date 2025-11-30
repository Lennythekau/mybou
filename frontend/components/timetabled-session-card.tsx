import { TimetabledSession } from "@/types";
import styles from "@/styles/timetabled-session.module.css";

export default function TimetabledSessionCard({ session, position }: { session: TimetabledSession, position: number }) {
    const localeOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit"
    }

    return <div className={styles.session}>
        <h2> <span className={styles.session__position}> #{position} </span> {session.name} </h2>
        <p> {session.startTime.toLocaleTimeString("en-GB", localeOptions) + "-" + session.endTime.toLocaleTimeString("en-GB", localeOptions)} </p>
        <p>{session.room}</p>
    </div>
}
