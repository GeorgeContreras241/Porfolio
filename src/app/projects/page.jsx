"use client"
import styles from "@/styles/projects.module.css"
import { Projects } from "@/components/ui/Projects";
import { Fade } from "react-awesome-reveal";



export default function Project() {
    return (
        <>
            <section className={styles.container}>
                <h2>My projects</h2>
                <div className={styles.projects}>
                    <Fade direction="up" triggerOnce="true" cascade="true" duration={300}>
                        <Projects img="./images/project01.jpg" title="Metalicas J y N"
                            tech={['Html', 'Css', 'JavaScript', 'React', 'Next js', 'Redux']} link="https://metalicasjyn.vercel.app/" />
                        <Projects img="./images/project04.jpg" title="Consumo de Api Store Fake" description="En este proyecto se consumio la api gratuita Api Fake Store."
                            tech={['Html', 'Css', 'JavaScript', 'React', 'Next js', 'Redux']} link="https://store-api-sage.vercel.app" />
                        <Projects img="./images/project05.jpg" title="Porfolio" description="Porfolio personal hecho con Next js."
                            tech={['Html', 'Css', 'JavaScript', 'React', 'Next js']} link="https://porfolio-george-contreras.vercel.app/" />
                        <Projects img="./images/project02.jpg" title="Consuto total de la api de Rick and morty"
                            description="Consumo total de Api Rick and Morty con buscador y paginacion Personajes, Temporadas."
                            tech={['Html', 'Css', 'JavaScript', 'React', 'Next js']} link="https://rick-next-red.vercel.app/" />
                        <Projects img="./images/project03.jpg" title="Clon pagina de inicio rick y morty" description="Clon paginas de Inicio Api Rick and Morty."
                            tech={['Html', 'Css', 'JavaScript', 'React', 'Next js']} link="https://rick-and-morty-kappa-one.vercel.app/" />
                        <Projects img="./images/project06.jpg" title="Gestor de Contreseñas Local" description="Web que nos permite gestionar contraseñas atraves de un archivo encriptado con AES."
                            tech={['Html', 'Css', 'JavaScript', 'React', 'Zustand']} link="https://password-manager-three-liard.vercel.app/" />
                    </Fade>
                </div>
            </section>
        </>
    )
}
/*
 <Projects 
                            title="Metalicas J y N"
                            description="Página web del Taller de Ornamentación Metálicas J y N, diseñada para atraer clientes y mostrar los productos."
                            tech={['Html', 'Css', 'JavaScript', 'React']} link="https://metalicasjyn.vercel.app" />
                        

*/