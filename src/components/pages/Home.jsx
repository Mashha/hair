import { Link } from "react-router-dom";
import Button from "../Button";
import Services from "../Services";
import WhyUs from "../WhyUs";
import Testimonials from "../Testimonials";
import "../../styles/home.css";
import About from "../About";
import Footer from "../Footer";
import { NavHashLink } from "react-router-hash-link";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-bg">
          <div className="center">
            <div>
              <h1>Frizerstvo</h1>
              <h1>Brivstvo</h1>
              <h1>Fotografija</h1>
            </div>
            <div className="buttons">
              <NavHashLink to="#serviceSection" smooth>
                Storitve
              </NavHashLink>
              <Link to="/contact">Kontakt</Link>
            </div>
          </div>
        </div>
      </div>

      <main>
        <Services />
        <WhyUs />
        <Testimonials />
        <About />
        <Footer />
      </main>
    </>
  );
}
