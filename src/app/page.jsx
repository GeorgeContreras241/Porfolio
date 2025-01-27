"use client"
import { Fade } from "react-awesome-reveal";
import { FaLinkedin ,FaGithub} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbBrandGravatar } from "react-icons/tb";
import { Experience } from "@/components/ui/Experience"
import { Title } from "@/components/ui/Title"
import home from "@/styles/home.module.css"

export default function Home() {
  return (
    <>
      <main className={home.container__main}>
        <section className={home.container__home}>
          <div className={home.container__desc}>
            <Fade duration="500" direction="down" triggerOnce="true">
              <Title />
            </Fade>
            <p>Soy George Contreras, un desarrollador frontend junior
               apasionado por aprender y mejorar constantemente en el campo del desarrollo web.</p>
          </div>
          <div className={home.container__links}>
            <a href="https://github.com/GeorgeContreras241" target="_blank"><FaGithub className={home.home__icons} />GitHub</a>
            <a href="https://www.linkedin.com/in/georgecontreras241/" target="_blank"><FaLinkedin className={home.home__icons} />LinKedin</a>
            <a href="https://mail.google.com/" target="_blank"><SiGmail className={home.home__icons} />Gmail</a>
          </div>
        </section>
        <TbBrandGravatar className={home.img} />
      </main>
      <section className={home.container__works}>
        <Experience />
      </section>
    </>
  );
}
