import styles from "@/styles/cv.module.css"

export const Cv = () => {
  const handleDownload = () => {
    const fileUrl = "/cv.pdf";
    window.open(fileUrl, "_blank");
  }
  return (
    <mark className={styles.cv}>
        <button onClick={handleDownload}>Descargar CV</button>
    </mark>
  )
}
