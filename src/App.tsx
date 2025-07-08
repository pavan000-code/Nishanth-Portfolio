import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ArchitecturalProcess from './components/ArchitecturalProcess'
import Services from './components/Services'
import Projects from './components/Projects'
import Approach from './components/Approach'
import About from './components/About'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Navbar />
      <main className="app">
        <section className="hero-section">
          <Hero />
        </section>
        <section className="section-spacing">
          <ArchitecturalProcess />
        </section>
        <section className="section-spacing">
          <Services />
        </section>
        <section className="section-spacing">
          <Projects />
        </section>
        <section className="section-spacing">
          <Approach />
        </section>
        <section className="section-spacing">
          <About />
        </section>
        <section className="section-spacing">
          <Strengths />
        </section>
        <section className="section-spacing">
          <Contact />
        </section>
        <Footer />
      </main>
      <ScrollToTop />
    </>
  )
}

export default App
