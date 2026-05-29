import { ThemeProvider } from './contexts/ThemeContext'
import { useReveal } from './hooks/useReveal'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import WhyMe from './components/WhyMe'
import Commande from './components/Commande'
import Expositions from './components/Expositions'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'

function AppContent() {
  useReveal()
  return (
    <div className="bg-[var(--bg)] text-[var(--text)] min-h-screen font-body transition-colors duration-300">
      <Nav />
      <main>
        <Hero />
        <Gallery />
        <About />
        <WhyMe />
        <Commande />
        <Expositions />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
