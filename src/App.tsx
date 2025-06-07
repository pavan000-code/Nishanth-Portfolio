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
        <div>
          <Hero />
        </div>
        <div>
          <ArchitecturalProcess />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Approach />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Strengths />
        </div>
        <div>
          <Contact />
        </div>
        <Footer />
      </main>
      <ScrollToTop />
    </>
  )
}

export default App
