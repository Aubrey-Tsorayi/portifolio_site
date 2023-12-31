import Contact from "./contact.component";
import Experience from "./experience.componet";
import Hero from "./hero.component";
import Portifolio from "./portifolio.componet";
import TechStack from "./tech.componet";

const Home = () => {
    return ( 
        <div class="max-w-5xl w-11/12 mx-auto">
            <Hero/>
            <TechStack/>
            <Experience/>
            <Portifolio/>
            <Contact/>
        </div>
     );
}
 
export default Home;
