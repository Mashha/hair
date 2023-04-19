import "../styles/whyus.css";
import { Link } from "react-router-dom";

export default function WhyUs() {
  return (
    <section className="why-choose-us" id="why-us">
      <h1>Zakaj izbrati salon Narg?</h1>
      <div className="why-us-inner">
        <div className="top-text">
          <p>
            Moja misija je krepiti zaupanje in dobro počutje strank. Verjamem v
            nego las in brade z minimalnim vplivom na živali in planet.
          </p>
          <p>
            Uporabljam{" "}
            <Link
              to="https://www.act-now.fi/en/"
              className="products-link"
              target="_blank"
            >
              veganske izdelke
            </Link>
            , ki niso testirani na živalih in so brez sulfitov ter silikonov. So
            nežni tako za lase, kot tudi kožo.
          </p>
          <p>
            Poleg tega veganski izdelki nudijo vrsto prednosti: vsebujejo skrbo
            izbrane naravne sestavine, ne vsebujejo močnih kemikalij in
            sintetičnih dišav, ki lahko dražijo in poškodujejo lase in lasišče,
            in so izdelani iz biorazgradljivih sestavin in embalažnih
            materialov.
          </p>

          <p>
            V salonu so vse stranke deležne natančnosti, nežnosti in
            profesionalnosti.
          </p>
        </div>
        <div className="bottom">
          <img
            className="one"
            src="https://images.unsplash.com/photo-1519421692594-d7a3f3e3fe5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGhhaXIlMjBzdHlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <img
            className="two"
            src="https://images.unsplash.com/photo-1601127607688-ca400a2e61de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxoYWlyJTIwc3R5bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <img
            className="three"
            src="https://plus.unsplash.com/premium_photo-1667516650977-b6fb6e3a5a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHNoYW1wb298ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
          />

          <img
            className="four"
            src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGhhaXIlMjBzdHlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <img
            className="five"
            src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hhbXBvb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <img
            className="six"
            src="https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJlYXJkZWQlMjBtYW4lMjBwb3J0cmFpdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
