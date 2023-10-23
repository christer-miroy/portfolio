import { getImageUrl } from "../../utils"
import styles from "./About.module.css"

export const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img
            src={getImageUrl("about/aboutWebDevImg.png")}
            alt="about"
            className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend developer</h3>
                    <p>Building responsive and single-page applications.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server" />
                <div className={styles.aboutItemText}>
                    <h3>Backend developer</h3>
                    <p>Developing APIs, relational and non-relational databases.</p>
                </div>
            </li>
        </ul>
    </div>
  </section>;
}