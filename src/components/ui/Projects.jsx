import styles from "@/styles/projects.module.css"
import { Image } from 'primereact/image';

export const Projects = ({ img, title, description, tech, link }) => {
    return (
        <div className={styles.project__card}>
            <Image
                src={img}
                alt={description}
                width="300"
                preview />  
            <div className={styles.project__info}>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className={styles.project__info__tech}>
                    <ul>
                        {tech.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <a href={link} target="_blank">Visitar</a>
                </div>

            </div>
        </div>
    )
}
