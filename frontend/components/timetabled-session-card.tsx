import { TimetabledSession } from "@/types";
import styles from "@/styles/timetabled-session.module.css";
import attendanceStyles from "@/styles/attendance.module.css"
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function TimetabledSessionCard({ session, position }: { session: TimetabledSession, position: number }) {
    async function submitAttendanceAction(formData: FormData) {
        "use server";
        console.log(formData.get("reg-code"))
        const response = await axios.put(`http://localhost:5066/timetable/1/register?sessionId=${session.id}&code=${formData.get("reg-code")}`).
            catch((err) => { console.log(err); return err });

        if (response.status == 204) {
            console.log(session)
            revalidatePath("/attendance")
        }
    }

    const localeOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit"
    }

    return <div className={styles.session}>
        <h2> <span className={styles.session__position}> #{position} </span> {session.name} </h2>
        <p> {session.startTime.toLocaleTimeString("en-GB", localeOptions) + "-" + session.endTime.toLocaleTimeString("en-GB", localeOptions)} </p>
        <p>{session.room}</p>

        {session.didAttend && <p>Attendance Recorded</p>}

        {!session.didAttend && <form action={submitAttendanceAction}>
            <input className={attendanceStyles["attendance__input"]} type="text" name="reg-code" id="reg-code" placeholder="Registration Code" />
            <input className={attendanceStyles["attendance__button"]} type="submit" value="Submit" />
        </form>}
    </div>
}
