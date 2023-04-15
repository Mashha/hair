import { Link } from "react-router-dom";
import Services from "../Services";
import WhyUs from "../WhyUs";
import Testimonials from "../Testimonials";
import "../../styles/home.css";
import About from "../About";
import { NavHashLink } from "react-router-hash-link";
import Section from "../Section";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-bg">
          <div className="center">
            <div className="title_one">
              <h2 className="title">Frizerstvo</h2>
              <h2 className="title">Brivstvo</h2>
              <h2 className="title">Fotografija</h2>
            </div>
            <div className="title_two">
              <h3>Vrhunske prinčeske, luksuzna nega za moške ter ujeti trenutki v objektivu</h3>
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
        <Section />
        <About />
      </main>
    </>
  );
}
