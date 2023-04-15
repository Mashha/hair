import { Link } from "react-router-dom";
import Button from "./Button";
import "../styles/services.css";

export default function Services() {
  return (
    <section className="services" id="serviceSection">
      <h1>Storitve</h1>
      <div className="services-inner">
        <div className="service">
          <img
            src="https://images.unsplash.com/photo-1581674210501-c760093514e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <Button>
            <Link to="/frizerstvo">Več info</Link>
            <i className="fa-solid fa-chevron-right"></i>
          </Button>
          <h3>Frizerstvo</h3>
          <p>
            Ohranjamo zdrave in sijoče lase.
          </p>
        </div>
        <div className="service">
          <img
            src="https://images.unsplash.com/photo-1541533848490-bc8115cd6522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhcmJlciUyMHN0eWxlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <Button>
            <Link to="/brivstvo">Več info</Link>
            <i className="fa-solid fa-chevron-right"></i>
          </Button>
          <h3>Brivstvo</h3>
          <p>
            Oblikujemo in negujemo brado.
          </p>
        </div>
        <div className="service">
          <img
            src="https://images.unsplash.com/photo-1520998116484-6eeb2f72b5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <Button>
            <Link to="/fotografija">Več info</Link>
            <i className="fa-solid fa-chevron-right"></i>
          </Button>
          <h3>Fotografija</h3>
          <p>
            Ustvarjamo nepoazbne spomine.
          </p>
        </div>
      </div>
    </section>
  );
}
