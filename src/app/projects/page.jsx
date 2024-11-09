"use client"
import styles from "@/styles/projects.module.css"
import Image from "next/image";
import { Fade, Roll, Slide, Bounce } from "react-awesome-reveal";
import project01 from "@/images/project01.PNG"
import project02 from "@/images/project02.PNG"
import project03 from "@/images/project03.PNG"
import project04 from "@/images/project04.jpg"

export default function Projects() {
    return (
        <>
            <section className={styles.container}>
                <h2>My projects</h2>
                <div className={styles.projects}>
                    <Fade direction="up" triggerOnce="true" cascade="true" duration={300}>
                        <div className={styles.project__card}>
                            <Image
                                src={project01}
                                width={300}
                                height={160}
                                alt="Project Image"
                            />
                            <div className={styles.project__info}>
                                <h4>Metalicas J y N</h4>
                                <p>Página web del Taller de Ornamentación Metálicas J y N,
                                    diseñada para atraer clientes y mostrar los productos.</p>
                                <div className={styles.project__info__tech}>
                                    <ul>
                                        <li>Html</li>
                                        <li>Css</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                    </ul>
                                    <a href="https://metalicasjyn.vercel.app" target="_blank">Visitar</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.project__card}>
                            <Image
                                src={project04}
                                width={300}
                                height={160}
                                alt="Project Image"
                            />
                            <div className={styles.project__info}>
                                <h4>Consumo de Api Store Fake</h4>
                                <p>En este projecto se consumio la api gratuita.</p>
                                <div className={styles.project__info__tech}>
                                    <ul>
                                        <li>Html</li>
                                        <li>Css</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Next js</li>
                                    </ul>
                                    <a href="https:/store-api-sage.vercel.app" target="_blank">
                                        Visitar</a>
                                </div>

                            </div>
                        </div>
                        <div className={styles.project__card}>
                            <Image
                                src={project04}
                                width={300}
                                height={160}
                                alt="Project Image"
                            />
                            <div className={styles.project__info}>
                                <h4>Porfolio</h4>
                                <p>En este projecto se consumio la api gratuita.</p>
                                <div className={styles.project__info__tech}>
                                    <ul>
                                        <li>Html</li>
                                        <li>Css</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Next js</li>
                                    </ul>
                                    <a href="https:/store-api-sage.vercel.app" target="_blank">
                                        Visitar</a>
                                </div>

                            </div>
                        </div>
                        <div className={styles.project__card}>
                            <Image
                                src={project02}
                                width={300}
                                height={160}
                                alt="Project Image"
                            />
                            <div className={styles.project__info}>
                                <h4>Consuto total de la api de Rick and morty</h4>
                                <p>Consumo total de Api Rick and Morty con buscador y paginacion
                                    Personjes , Temporadas.
                                </p>
                                <div className={styles.project__info__tech}>
                                    <ul>
                                        <li>Html</li>
                                        <li>Css</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Next js</li>
                                    </ul>
                                    <a href="https://rick-next-red.vercel.app" target="_blank">Visitar</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.project__card}>
                            <Image
                                src={project03}
                                width={300}
                                height={160}
                                alt="Project Image"
                            />
                            <div className={styles.project__info}>
                                <h4>Clon pagina de inicio rick y morty</h4>
                                <p>Clone paginas de Inicio Api Rick and Morty.</p>
                                <div className={styles.project__info__tech}>
                                    <ul>
                                        <li>Html</li>
                                        <li>Css</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Next js</li>
                                    </ul>
                                    <a href="https://rick-and-morty-kappa-one.vercel.app/" target="_blank">
                                        Visitar</a>
                                </div>

                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}