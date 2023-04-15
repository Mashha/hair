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
