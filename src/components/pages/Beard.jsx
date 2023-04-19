import "../../styles/beard.css";

export default function Beard() {
  return (
    <>
      <div className="beard-hero">
        <h2>Brivstvo</h2>
      </div>
      <main className="beard-main">
        <div className="beard-hero-inner">
          <p>
          V frizerskem salonu Narg ponujam tudi brivske storitve, ki prinašajo bolj tradicionalen in klasičen pristop k urejanju moških. Te storitve vključujejo britje brade z britvijo, striženje in barvanje brade, britje glave in nego obrvi. To moškim omogoča, da na enem mestu uživajo v prednostih frizerskega salona in brivnice. Poleg tega lahko brivske storitve v frizerskem salonu nudijo tudi bolj sproščeno in družabno vzdušje, kar strankam daje priložnost, da se srečajo s prijatelji ali navežejo nove vezi. Z združevanjem storitev frizerskega salona in brivnice sem želela poskrbeti za bolj raznoliko in celovito ponudbo storitev nege las.
          </p>
        </div>

        <div className="services-container">
          <div className="price-item-wrapper">
            <h2 className="price-item-title">Britje</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Glave</div>
                <div className="price">
                  12<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Brade</div>
                <div className="price">
                  18<span>&euro;</span>
                </div>
              </div>
            </div>
            <div className="item-divider"></div>
          </div>

          <div className="price-item-wrapper">
            <h2 className="price-item-title">Urejanje</h2>
            <div className="price-item-inner">
              <div className="service-wrapper">
                <div className="service-name">Brade</div>
                <div className="price">
                  15<span>&euro;</span>
                </div>
              </div>
              <div className="service-wrapper">
                <div className="service-name">Obrvi</div>
                <div className="price">
                  2<span>&euro;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
