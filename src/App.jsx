import Footer from "./compontents/Footer"
import Navbar from "./compontents/Navbar"
import NavbarBanner from "./compontents/NavbarBanner"
import NumberCount from "./compontents/NumberCount"
import HeroSection from "./pages/HeroSection"
import Schedule from "./pages/Schedule"
import Services from "./pages/Services"
import Testimonails from "./pages/Testimonails"
import Subject from "./pages/subject"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
 

  return (
   <>
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <HeroSection />
      <NumberCount />
      <Services/>
      <Schedule />
      <Subject />
      <Testimonails/>
      <Footer />
    </main>
   </>
  )
}

export default App
