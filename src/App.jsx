import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <div className="relative h-full w-full bg-slate-950 text-neutral-300 antialiased selection:bg-cy-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
        </div>
      </div>
      <div className='conatiner mx-auto px-8'>
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Projects/>
        <Contact/>
      </div>
    </div>
    </>
  )
}

export default App
