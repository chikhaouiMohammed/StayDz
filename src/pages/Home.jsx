import About from '../components/About/About';
import BookSteps from '../components/BookSteps/BookSteps';
import Destinations from '../components/Destinations/Destinations';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Testimonial from '../components/Testimonial/Testimonial';
import headerBg from "../images/Home/Header/Decore.png"

function Home() {
  const homeBackground = {
    background: `url(${headerBg}) top right / cover no-repeat`, 
    minHeight: '100vh', 
    backgroundPosition: '765px 0px', 
    // backgroundAttachment: 'fixed', 
    backgroundSize: '70%',
  };
  return (
    <div  style={homeBackground}>
        <Header/>
        <Hero/>
        <Services/>
        <Destinations/>
        <BookSteps/>
        <Testimonial/>
        <About/>
<<<<<<< HEAD
        <Footer/>
=======
>>>>>>> 37f59b884301822272af9ee26b6648e4465ec329
    </div>
  )
}

export default Home
