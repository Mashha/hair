import { Link } from "react-router-dom";
import pdf from "../assets/Cenik_Narg.pdf";
import "../styles/section.css";

export default function Section() {
  return (
    <>
      <div className="change">
        <div className="change-inner">
          <h2>Si želite spremembe?</h2>

          <Link to={pdf} target="_blank" className="priceList">
            Cenik
          </Link>
        </div>
      </div>
    </>
  );
}
