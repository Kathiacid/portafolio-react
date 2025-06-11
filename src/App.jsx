// src/App.jsx
import Header from "./layouts/Header"; // Navbar lateral (si lo usas)
import Cover from "./sections/Cover";
import Skills from "./sections/Skills";
import AboutMe from "./sections/AboutMe";

export default function App() {
    return (
        <div className="app">
        <Header />     {/* Opcional: Navbar de puntos */}
        <Cover />      {/* Sección 1 */}
        <Skills />     {/* Sección 2 */}
        <AboutMe />   {/* Sección 3 */}
        </div>
    );
}