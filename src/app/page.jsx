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
            <Fade duration="500" direction="down">
              <h1>Software engineer, technical writer & open-source maintainer</h1>
            </Fade>

            <p>Im Victor Eke, an experienced frontend developer passionate about learning
              and building open-source software that is beneficial to developers and
              the world at large.</p>
          </div>
          <div className={home.container__links}>
            <a href="#"><FaGithub className={home.home__icons} />GitHub</a>
            <a href="#"><FaTwitter className={home.home__icons} />X</a>
            <a href="#"><FaLinkedin className={home.home__icons} />LinKedin</a>
            <a href="#"><SiGmail className={home.home__icons} />Codepen</a>
            <a href="#"><FaFacebook className={home.home__icons} />vercel</a>
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
