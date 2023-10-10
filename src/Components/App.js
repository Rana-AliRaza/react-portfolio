import About from "./About";
import Contact from "./Contact.jsx";
import Experience from "./Experience";
import Home from "./Home";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import SocialLinks from "./SocialLinks";


const App = () =>{
  return(
    <div>
      <NavBar/>
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
      
    </div>
  )
}
export default App;