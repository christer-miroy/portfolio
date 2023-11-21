
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styles from "./App.module.css"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { Skills } from "./components/Skills/Skills"

function App() {

  return (
    <BrowserRouter>
    <div className={styles.App}>
      <Navbar />
      <Routes>
          <Route path="/portfolio" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      <Contact />
    </div>
    </BrowserRouter>
  )
}

export default App
