import Navbar from "./component/NavBar.jsx";
import Features from "./component/Features.jsx";
import Hero from "./component/hero_section/hero.jsx";
import './App.css'

function App() {
 

  return (
    <>
      <div>
       <Navbar/>
       <main>
         <Hero/>
         <Features />
       </main>
 

      </div>  
    </>
  )
}

export default App
