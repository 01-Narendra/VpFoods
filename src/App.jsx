import Client from "./components/Client"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Home"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
      <div className="bg-[#adbbda] ">
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
