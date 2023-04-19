import "../styles/mobile-section.css";
import { Link } from "react-router-dom";

export default function MobileSection() {
  return (
    <div className="info-in-mobile">
      <div className="phone-email">
        <Link to="tel:064-157-600">
          <i className="fa-solid fa-phone"></i> 064-157-600
        </Link>
        <Link to="mailto:narg.cut@gmail.com">
          <i className="fa-solid fa-envelope"></i> narg.cut@gmail.com
        </Link>
      </div>
      <div className="social-icons">
        <Link to="https://www.facebook.com/profile.php?id=100086505107010" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </Link>
        <Link to="https://www.instagram.com/narg_frizerstvo_brivstvo_foto/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </Link>
      </div>
    </div>
  );
}
