import React from 'react'
import styles from "@/styles/footer.module.css"
import { SiGmail } from "react-icons/si";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>©2024. Desarrollado con ❤️ por George Contreras</p>
      <a target='_blank'  href="https://mail.google.com/mail/u/1/?pli=1">
        <SiGmail className={styles.fotter__email} />
      </a>
    </footer>
  )
}
