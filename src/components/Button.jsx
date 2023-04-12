import "../styles/button.css";

export default function Button({ children, style }) {
  return <button style={style}>{children}</button>;
}
