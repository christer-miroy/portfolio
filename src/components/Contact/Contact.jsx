import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2 className={styles.title}>Contact</h2>
    </div>
    <ul>
      <li className={styles.link}>
        <img src={ getImageUrl("contact/emailIcon.png") } alt="Email" />
        <a href="mailto:chrstrzm.mry@gmail.com">Send email</a>
      </li>
      <li className={styles.link}>
        <img src={ getImageUrl("contact/linkedinIcon.png") } alt="Linkedin" />
        <a href="https://www.linkedin.com/in/christer-zandrei-miroy-60b5b1238" target="_blank">Linkedin</a>
      </li>
    </ul>
  </footer>
}