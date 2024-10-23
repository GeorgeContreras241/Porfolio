import styles from "@/styles/cv.module.css"

export const Cv = () => {
  const handleDownload = () => {
    alert("descargando")
  }
  return (
    <mark className={styles.cv}>
        <button onClick={handleDownload}>Descargar CV</button>
    </mark>
  )
}
