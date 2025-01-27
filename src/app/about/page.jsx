"use client"
import { Fade, Rotate } from "react-awesome-reveal";
import styles from "@/styles/about.module.css"
import { Orbitron } from 'next/font/google';
import { FaHtml5, FaNode, FaCss3Alt, FaJs,FaReact  } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { Cv } from "@/components/Cv";
import { Studies } from "@/components/ui/Studies";


const orbitron = Orbitron({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

export default function About() {
    const url = "https://smartcms-media.s3.ap-south-1.amazonaws.com/e6b05202-c737-4ce8-95a1-6132364f716e/conversions/why-coding-essential-future-webp.webp"
    return (
        <>
            <main className={styles.container}>
                <div className={styles.presentation}>
                    <Fade direction="left" duration="500" triggerOnce="true">
                        <div className={styles.presentation__text}>
                            <h2 className={orbitron.className}>¡Bienvenido!</h2>
                            <p>Soy George Contreras, Desarrollador Frontend Junior especializado 
                                en React y Next js.</p>
                            <Cv></Cv>
                        </div>
                    </Fade>
                    <Fade direction="right" duration="500" triggerOnce="true">
                        <div className={styles.presentation__img}>
                            <img src={url} width={"300px"} className={styles.img} alt="yuta" />
                        </div>
                    </Fade>
                </div>
                <article className={styles.desp}>
                    <p>Soy George Contreras, me considero apasionado por el desarrollo web y las tecnologías modernas como React y Nextjs. Me encanta transformar
                        ideas en interfaces claras y funcionales, cuidando cada detalle para ofrecer una buena experiencia a usuario final. Como desarrollador
                        junior, estoy en constante aprendizaje y buscando nuevos retos que me permitan crecer y mejorar en cada proyecto.</p>
                </article>
                <section className={styles.about}>
                    <h3>Tecnologias que me desempeño</h3>
                    <div className={styles.tech}>
                        <Rotate cascade="true" duration="400" direction="right" triggerOnce="true">
                            <span><FaHtml5 className={styles.icons} style={{ color: "orange" }} />Html</span>
                            <span><FaCss3Alt className={styles.icons} style={{ color: "blue" }} />Css</span>
                            <span><FaJs className={styles.icons} style={{ color: "yellow" }} />JavaScript</span>
                            <span><RiNextjsFill className={styles.icons} style={{ color: "black" }} />Next js</span>
                            <span><FaNode className={styles.icons} style={{ color: "green" }} />Node</span>
                            <span><FaReact className={styles.icons} style={{ color: "#58C4DC" }}/>React</span>
                        </Rotate>
                    </div>
                </section>
                <div className={styles.studies}>
                    <h4>Mis Estudios</h4>
                    <div className={styles.studies__con}>
                        <Studies img="https://www.ucundinamarca.edu.co/images/ucundinamarca/escudo-color.png"
                        title={"Universidad de Cundinamarca"}
                        desp={"Tecnologia en Desarrollo de Software"}
                        state={"Completado"}
                        a={"Visitar"} />
                        <Studies img="https://talentotech.usergioarboleda.edu.co/assets/images/og.png"
                        title={"Telento Tech"}
                        desp={"BootCamp Desarrolo Web Full Stack"}
                        state={"Completado"}
                        a={"https://certificados.talentotech.co/?cert=2387056631&fingerprint=y#pdf"} />
                    </div>
                </div>
            </main>
        </>
    )
}
