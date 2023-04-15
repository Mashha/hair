import { useEffect, useState } from "react";
import icon from "../images/icons/scroll_icon.png";

export default function ScrollWithButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  function scrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="scroll">
      {showButton && (
        <button className="scroll-icon" onClick={scrollUp}>
          <img src={icon} alt="" />
        </button>
      )}
    </div>
  );
}
