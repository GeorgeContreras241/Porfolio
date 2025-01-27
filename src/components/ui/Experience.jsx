import styles from "@/styles/ui/experience.module.css"
import Link from "next/link";
export const Experience = () => {
    return (
        <>
            <h2 className={styles.title}>Work Experience</h2>
            <div className={styles.container__works__dis}>
                <Link href={"/projects"}>Ir a Proyectos...</Link>
            </div>
        </>
    )
}
