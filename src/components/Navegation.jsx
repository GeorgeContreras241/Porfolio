"use client"
import styles from "@/styles/navegation.module.css"
import "@/styles/global.css"
import Link from "next/link"
import { FaMoon,FaSun } from "react-icons/fa";
import { useState, useEffect } from "react"
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});


export const Navegation = () => {
    const [open, setOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode",darkMode)
        if (savedMode == "true") {
            document.body.classList.add('dark__mode');
            setDarkMode(true);
        } else {
            document.body.classList.remove('dark__mode');
            setDarkMode(false);
        }
    }, [darkMode])
    
    const toggle = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.body.classList.add('dark__mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.remove('dark__mode');
            localStorage.setItem('darkMode', 'false');
        }
    }
    const handleMenu = () => {
        if (open == true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.nav__title}>
                    <h1 className={orbitron.className}>Porfolio</h1>
                </div>
                <ul className={styles.nav__nav}>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/projects"}>Projects</Link></li>
                </ul>
                <button className={styles.nav__icon} onClick={handleMenu}>
                    <div className={`${styles.menu__toggle} ${open ? styles.open : ""}`}>
                        <i></i>
                    </div>
                </button>
                <button  onClick={toggle} className={styles.nav__menu}>
                    {darkMode ? <FaMoon  className={styles.icon}/> : <FaSun />}
                </button>
            </nav>
            <ul className={`${styles.menu__res} ${open ? styles.active : ""}`}>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/projects"}>Projects</Link></li>
            </ul>

        </>


    )
}
