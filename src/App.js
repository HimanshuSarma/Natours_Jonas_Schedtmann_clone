import logo from './logo.svg';
import './App.css';
import './ContentGrid/ContentGrid.css';
import './linea fonts/icon-font.css';
import './General.css';
import Header from './Header/Header';
import About from './About/About';
import Features from './Features/Features';
import Plans from './Plans/Plans';
import Testimonials from './Testimonials/Testimonials';
import Booking from './Booking/Booking';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';


function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Features />
      <Plans />
      <Testimonials />
      <Booking />
      <Footer />
      
    </>
  );
}

export default App;
