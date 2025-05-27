import Header from "./assets/Components/Header"
import About from "./assets/Components/About"
import Services from "./assets/Components/Services"
import Home from "./assets/Pages/Home"
import ScrollToTop from './assets/Components/ScrollToTop'
import StartProject from './assets/Components/StartProject'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from "./assets/Components/Contact"
import Projects from "./assets/Components/Projects"
function App() {

  return (
    <>
    <Router>
        <Header />
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/startproject" element={<StartProject />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/ourwork" element={<Projects />}/>
        </Routes>

      </Router>
    </>
  )
}

export default App
