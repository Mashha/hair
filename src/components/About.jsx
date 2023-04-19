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
            Sem Maja, že od malega me veseli frizerstvo in brivstvo ter fotografija, zato sem se odločila učiti od najboljših. Prej sem delala pri Ljubljanskih brivcih in Stevotu. Udeležila sem se številnih seminarjev. Leta 2022 sem se odločila za samostojno pot, zato sem odprla s.p. in ustvarila NARG. Pri meni do dobrodosle stranke vseh starosti Moški in ženske. Uporabljam veganske izdelke, ki niso testirani na zivalih in so brez sulfatov in silikonov.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
