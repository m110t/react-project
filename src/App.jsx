
import './App.css'
import { Home } from './components/Home/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Portifolio } from './components/portofolio/portofolio';
import { About } from './components/about/About';
import { Call } from './components/call/Call';
// import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

 


function App() {

  return (
    <>
    <Home/>
    <Portifolio/>
    <About/>
    <Call/>
    </>
  )
}

export default App
