import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="contact-info">
          <div className="address">
            <p>Salon povej naprej</p>
            <p>Majorja Lavriča ulica 12</p>
            <p>1000 Ljubljana</p>
          </div>
          <div className="phone">
            <Link to="tel:064-157-600">
              <i className="fa-solid fa-phone"></i> 064-157-600
            </Link>
          </div>
          <div className="email">
            <Link to="mailto:narg.cut@gmail.com">
              <i className="fa-solid fa-envelope"></i> narg.cut@gmail.com
            </Link>
          </div>
        </div>
        <div className="social-media">
          <Link to="#">
            <i className="fa-brands fa-facebook fa-2x"></i>
          </Link>
          <Link to="#">
            <i className="fa-brands fa-instagram fa-2x"></i>
          </Link>
        </div>
        <div className="working-hours">
          <p>Ponedeljek - petek: 09:00 - 19:00</p>
          <p>Sobota in nedelja: zaprto</p>
        </div>
      </div>
      <div className="credit">
        Build and designed by Pimu <i className="fa-solid fa-copyright"></i> All
        rights reserved
      </div>
    </footer>
  );
}
