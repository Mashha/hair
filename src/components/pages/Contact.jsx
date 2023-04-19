import { Link } from "react-router-dom";
import "../../styles/contact.css";
import phone from "../../images/icons/phone_icon.png";
import home from "../../images/icons/home_icon.png";
import email from "../../images/icons/email_icon.png";

export default function Contact() {
  return (
    <>
      <div className="hero-section">
        <h2>Kontakt</h2>
      </div>
      <main>
        <h1>Obišči nas</h1>
        <div className="main-inner">
          <div className="div-contact">
            <div className="inner-data">
              <div className="icon">
                <img src={home} alt="" />
              </div>
              <div className="inner-data-address">
                <p>V salonu Povej Naprej</p>
                <p>Majorja Lavriča ulica 12</p>
                <p>Ljubljana - Šiška</p>
              </div>
            </div>
            <div className="phone-and-email">
              <div className="mobile-phone">
                <div className="icon">
                  <img src={phone} alt="" />
                </div>
                <Link to="tel:064-157-600">064-157-600</Link>
              </div>
              <div className="email-address">
                <div className="icon">
                  <img src={email} alt="" />
                </div>
                <Link to="mailto:narg.cut@gmail.com">narg.cut@gmail.com</Link>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.631648180087!2d14.474542215271942!3d46.078385500271835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477acd3641030e41%3A0x4bad48e76debfd8d!2sMajorja%20Lavri%C4%8Da%20ulica%2012%2C%201000%20Ljubljana!5e0!3m2!1sen!2ssi!4v1677594807694!5m2!1sen!2ssi"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
