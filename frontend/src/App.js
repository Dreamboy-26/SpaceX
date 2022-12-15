import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Nasa from './svg/Nasa.jpg'
import Data from './components/Data'
function App() {
  return (
    <div className='body'>
      <Navbar />
      <Banner />
      <Data />
    </div>
  )
}

export default App
