import About from "./assets/Components/About"
import Services from "./assets/Components/Services"
import Home from "./assets/Pages/Home"
import ScrollToTop from './assets/Components/ScrollToTop'
import StartProject from "./assets/components/StartProject"
import Header from "./assets/components/Header"
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from "./assets/Components/Contact"
import Projects from "./assets/Components/Projects"
import Footer from "./assets/components/Footer"
import FAQ from "./assets/Components/FAQ"
import CursorFollower from './assets/Components/CursorComponent'
import PrivacyPolicy from "./assets/Components/Privacy"
import DonationPage from "./assets/Pages/Donate"
function App() {

  return (
    <>
    <Router>
        <Header />
        <CursorFollower />
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/startproject" element={<StartProject />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/ourwork" element={<Projects />}/>
            <Route path="/faq" element={<FAQ />}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
            <Route path="/buy-us-a-coffee" element={<DonationPage />} />
        </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
