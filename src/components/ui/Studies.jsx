import styles from "@/styles/ui/studies.module.css"
import { GrLinkNext } from "react-icons/gr";

export const Studies = ({img, title, desp,state,a}) => {
    return (
        <div className={styles.studies__card}>
            <div><img src={img}
                alt="{title}" className={styles.img__info} /></div>
            <div className={styles.card__info}>
                <p>{title}</p>
                <span>{desp}</span>
                <div className={styles.card__info__desp}>
                    <span>{state}</span>
                    <a href={a} target="_blank">Visitar <GrLinkNext className={styles.card__icons} /></a>
                </div>
            </div>
        </div>
    )
}
