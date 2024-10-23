"use client"
import { Fade } from "react-awesome-reveal";
import home from "@/styles/home.module.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { TbBrandGravatar } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <main className={home.container__main}>
        <section className={home.container__home}>
          <div className={home.container__desc}>
            <Fade duration="500" direction="down" triggerOnce="true">
              <h1>Tecnólogo en Desarrollo de Software y Desarrollador Frontend especializado en Next.js y React.</h1>
            </Fade>

            <p>Soy George Contreras, un desarrollador frontend junior
               apasionado por aprender y mejorar constantemente en el campo del desarrollo web.</p>
          </div>
          <div className={home.container__links}>
            <a href="https://github.com/GeorgeContreras241" target="_blank"><FaGithub className={home.home__icons} />GitHub</a>
            <a href="https://x.com/GeorgeCont92445" target="_blank"><FaTwitter className={home.home__icons} />CodeSpace</a>
            <a href="https://www.linkedin.com/in/maicol-contreras-8b6029292/" target="_blank"><FaLinkedin className={home.home__icons} />LinKedin</a>
            <a href="https://mail.google.com/" target="_blank"><SiGmail className={home.home__icons} />Email</a>
          </div>
        </section>
        <TbBrandGravatar className={home.img} />
      </main>
      <section className={home.container__works}>
        <h3>Work Experience</h3>
        <div className={home.container__works__dis}>
          <p>nada....</p>
        </div>
      </section>
    </>
  );
}
