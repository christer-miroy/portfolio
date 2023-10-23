import {getImageUrl} from "../../utils"
import styles from "./Hero.module.css"

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h2 className={styles.title}>I am Christer.</h2>
        <p className={styles.description}>Your full stack web developer.</p>
        <a href="mailto:email@email.com" className={styles.contactBtn}>Contact</a>
    </div>
    <img
        src={getImageUrl(`hero/webdevhero.png`)}
        alt="Hero image of me"
        className={styles.heroImg}
    />
  </section>;
}