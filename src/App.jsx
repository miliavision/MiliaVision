import { BrowserRouter } from 'react-router-dom';
import { Pricing, About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

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
        {/* <Experience/> */}
        <Tech/>
        <Feedbacks/>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
