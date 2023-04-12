import "../styles/about.css";

export default function About() {
  return (
    <section className="about-me" id="about">
      <h1>O meni</h1>
      <div className="about-me-inner">
        <div className="image-section">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
        <div className="text-section">
          <div className="text-inner">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
              repellendus quis sed distinctio ipsum quae laboriosam ad voluptas
              accusantium rem, expedita voluptatem, reiciendis magni vel harum
              quibusdam veniam cum consequatur explicabo alias. Pariatur impedit
              eum in, esse eveniet voluptatum sed omnis tenetur iure placeat
              molestiae. Optio, asperiores? Eveniet, explicabo molestias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
