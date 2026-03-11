import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Academic from './components/Academic'
import Experience from './components/Experience'
import Skills from './components/Skills'
import PortfolioProjects from './components/PortfolioProjects'
import Contact from './components/Contact'
import MatrixRain from './components/MatrixRain'

function App() {
  return (
    <main className="w-full bg-bg-primary text-gray-200 overflow-x-hidden">
      <Navbar />

      <Hero />
      <Academic />
      
      {/* Unified Background Section for Skills & Experience */}
      <section className="relative w-full bg-bg-secondary">
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <MatrixRain />
          </div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
               style={{ backgroundImage: 'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          
          <Skills />
          <Experience />
      </section>

      <PortfolioProjects />
      
      <section className="relative w-full bg-bg-secondary flex flex-col justify-end">
            <Contact />
            <footer className="border-t border-neon-magenta/20 bg-bg-secondary py-8 text-center text-neon-magenta/50 font-mono text-sm w-full relative z-10">
                <p>&copy; {new Date().getFullYear()} STAR_ SYSTEM.</p>
            </footer>
      </section>
      
    </main>
  )
}

export default App
