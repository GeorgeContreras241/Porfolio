"use client"
import { Fade,Rotate} from "react-awesome-reveal";
import styles from "@/styles/about.module.css"
import { Orbitron } from 'next/font/google';
import { FaHtml5, FaNode, FaCss3Alt, FaJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const orbitron = Orbitron({
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Especifica los pesos que deseas usar
});

export default function About() {
    const url = "https://i.scdn.co/image/ab67616d00001e024e0b29303f9ff57a7e6846d5"
    return (
        <>
            <main className={styles.container}>
                <div className={styles.presentation}>
                    <Fade direction="left" duration="500">
                        <div className={styles.presentation__text}>
                            <h3 className={orbitron.className}>Bienvenidos</h3>
                            <p>iam George Contreras developer Frontend React, next js</p>
                        </div>
                    </Fade>
                    <Fade direction="right" duration="500">
                        <div className={styles.presentation__img}>
                            <img src={url} width={"300px"} className={styles.img} alt="yuta"/>
                        </div>
                    </Fade>
                </div>
                <article className={styles.desp}>
                    <p>Laorem ipsum dolor sit amet consectetur adipisicing elit. Id atque consequuntur soluta fugiat
                        ad eius cumque velit quasi aliquid, facilis voluptates repellat, in, reprehenderit ratione
                        distinctio quos? Vero, fugiat itaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Expedita dignissimos nemo ea. Dolorem odit repudiandae nemo vitae sunt voluptas adipisci error
                        Rem exercitationem provident tempore eaque vitae voluptas error voluptatem.</p>
                </article>
                <section className={styles.about}>
                    <h3>Tecnologias que me desempeño</h3>
                    <div className={styles.tech}>
                        <Rotate cascade="true" duration="400" direction="right">
                            <span><FaHtml5 className={styles.icons} style={{ color: "orange" }} />html</span>
                            <span><FaCss3Alt className={styles.icons} style={{ color: "blue" }} />css</span>
                            <span><FaJs className={styles.icons} style={{ color: "yellow" }} />js</span>
                            <span><RiNextjsFill className={styles.icons} style={{ color: "black" }} />Next js</span>
                            <span><FaNode className={styles.icons} style={{ color: "green" }} />Node</span>
                        </Rotate>
                    </div>
                </section>
            </main>
        </>
    )
}