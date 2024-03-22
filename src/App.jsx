import { BrowserRouter } from 'react-router-dom';
import { Pricing, About, Contact, Hero, Navbar,  Works, StarsCanvas} from './components';
import ButtonGradient from './assets/svg/ButtonGradient copy';
import { Footer } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
       
        <div className="relative z-0">
        <About />
        <Works/>
        <Pricing/>
        <ButtonGradient/>
        {/* <Experience/> */}
        {/* <Tech/> */}
        {/* <Feedbacks/> */}
          <Contact/>
          <StarsCanvas/>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
