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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            temporibus esse totam error fugiat praesentium voluptates eveniet
            dicta laborum, quibusdam cum quam excepturi nihil suscipit expedita.
            Inventore eveniet quam laborum vero nobis cumque laboriosam
            reprehenderit voluptatibus odio minima quis, nesciunt repellat error
            ab numquam consequatur eaque autem. Tenetur, accusantium autem!
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
