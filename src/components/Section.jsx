import pdf from "../assets/Cenik_Narg.pdf";
import "../styles/section.css";

export default function Section() {
  return (
    <>
      <div className="change">
        <div className="change-inner">
          <h2>Si želite spremembe?</h2>

          <a href={pdf} rel="noreferrer" target="_blank" className="priceList">
            Cenik
          </a>
        </div>
      </div>
    </>
  );
}
