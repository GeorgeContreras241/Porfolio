"use client"
import styles from "@/styles/projects.module.css"
import { Fade, Roll, Slide, Bounce } from "react-awesome-reveal";

export default function Projects() {
    return (
        <>
            <section className={styles.container}>
                <h2>My projects</h2>
                <div className={styles.projects}>
                    <Fade direction="up" triggerOnce="true" cascade="true" duration={500}>
                        <div className={styles.project__card}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLyF8mtr1xJdZmFA6Wfs90bjL5YgxCofWig&s" />
                            <div className={styles.project__info}>
                                <h4>Sukumbia</h4>
                                <p>En este projecto se trata de la cumbia que posee el poderoso sukumbia.</p>
                                <a href="">Visitar</a>
                            </div>
                        </div>


                        <div className={styles.project__card}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLyF8mtr1xJdZmFA6Wfs90bjL5YgxCofWig&s" />
                            <div className={styles.project__info}>
                                <h4>Sukumbia</h4>
                                <p>En este projecto se trata de la cumbia que posee el poderoso sukumbia.</p>
                                <a href="">Visitar</a>
                            </div>
                        </div>
                        <div className={styles.project__card}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLyF8mtr1xJdZmFA6Wfs90bjL5YgxCofWig&s" />
                            <div className={styles.project__info}>
                                <h4>Sukumbia</h4>
                                <p>En este projecto se trata de la cumbia que posee el poderoso sukumbia.</p>
                                <a href="">Visitar</a>
                            </div>
                        </div>
                        <div className={styles.project__card}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLyF8mtr1xJdZmFA6Wfs90bjL5YgxCofWig&s" />
                            <div className={styles.project__info}>
                                <h4>Sukumbia</h4>
                                <p>En este projecto se trata de la cumbia que posee el poderoso sukumbia.</p>
                                <a href="">Visitar</a>
                            </div>
                        </div><div className={styles.project__card}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLyF8mtr1xJdZmFA6Wfs90bjL5YgxCofWig&s" />
                            <div className={styles.project__info}>
                                <h4>Sukumbia</h4>
                                <p>En este projecto se trata de la cumbia que posee el poderoso sukumbia.</p>
                                <a href="">Visitar</a>
                            </div>
                        </div>
                        <div className={styles.project__card}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLyF8mtr1xJdZmFA6Wfs90bjL5YgxCofWig&s" />
                            <div className={styles.project__info}>
                                <h4>Sukumbia</h4>
                                <p>En este projecto se trata de la cumbia que posee el poderoso sukumbia.</p>
                                <a href="">Visitar</a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}