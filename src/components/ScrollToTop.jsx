import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  let element = document.querySelector("#storitve-btn");

  useEffect(() => {
   console.log(location.pathname)
    //window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return null;
}
