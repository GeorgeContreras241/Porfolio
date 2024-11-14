import React from 'react'
import styles from "@/styles/footer.module.css"
import { SiGmail } from "react-icons/si";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© Copyright 2024. Todos los derechos reservados.</p>
      <a target='_blank'  href="https://mail.google.com/mail/u/1/?pli=1">
        <SiGmail className={styles.fotter__email} />
      </a>
    </footer>
  )
}
