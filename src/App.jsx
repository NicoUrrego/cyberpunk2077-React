import './App.css'
import Characters from "./components/Characters";
import Header from './components/Header'
import Footer from './components/Footer'
import CyberSection from './components/CyberSection'
import CyberpunkAnniversary from './components/Juan' 
import Multimedia from './components/Multimedia'


function App() {
  return (
    <div className="app">
      <Header />
      <Characters />
      <CyberSection />
      <CyberpunkAnniversary />
      <Multimedia />
      <Footer />
    </div>
    
  )
}

export default App
