import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils"
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return <nav className={styles.navbar}>
    <Link to="/portfolio" className={styles.link}>
        <h1 className={styles.title}>cPort</h1>
    </Link>
    
    <div className={styles.menu}>
        {/* responsive menu button */}
        <img
            className={styles.menuBtn}
            src={ menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
        />
        {/* responsive menu */}
        <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
        >
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/skills">Skills</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  </nav>;
}