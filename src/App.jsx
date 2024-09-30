import Client from "./components/Client"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Home"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import FallingStars from "./components/Welcome"


function App() {

  return (
    <>
      {/* <FallingStars /> */}
      <div className="bg-[#e4a94a]">
        <Navbar />
        <Header />
        <Menu />
        <Client />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
