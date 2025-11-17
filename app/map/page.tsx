"use client"

import styles from "@/styles/map.module.css";
import { Suspense } from "react";

export default function Page() {
    return <section className={styles["map-container"]}>
        <iframe src="https://campusmap.bham.ac.uk/?hideappredirect=true" className={styles.map} onLoad={() => console.log("Loaded!")}></iframe>
    </section>
}