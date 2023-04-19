import "../../styles/photo.css";

export default function Photo() {
  return (
    <>
      <div className="photo-hero">
        <h2>Fotografija</h2>
      </div>
      <main className="photo-main">
        <div className="photo-hero-inner">
          <p>
          Ko si stranke v salonu uredijo novo pričesko, želijo pogosto ujeti trenutek in pokazati svoj novi videz. Zato svojim strankam ponujam tudi fotografske storitve. Stranko fotografiram v določenem prostoru salona, z uporabo različnih tehnik osvetlitve in poziranja pa ustvarim osupljive slike. Stranka lahko te fotografije uporabi za svojo osebno uporabo, na primer za posodabljanje svojih profilov na družabnih omrežjih ali prikazovanje prijateljem in družini. Salon jih lahko uporablja tudi v promocijske namene, za predstavitev svojega dela in pridobivanje novih strank. S ponudbo storitev fotografiranja po pričeski saloni strankam nudijo edinstveno izkušnjo, ki jim omogoča, da v celoti cenijo svoj novi videz in ga delijo z drugimi.
          </p>
        </div>

        <div className="services-container">
          <div className="price-item-wrapper">
            <h2 className="price-item-title">Fotografiranje</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Cena na fotografijo</div>
                <div className="no-price">Po dogovoru</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
