import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Jobs from "./components/Jobs/Jobs"
import Redes from "./components/Redes/Redes"

const App = () =>{
  return(
    <div className="text-center">
        <Header/>
        <Hero/>
        <Jobs/>
        <Redes/>
        <Footer/>
    </div>
  )
}

export default App