import "./Header.scss";
import logo from "../../logo.png";

function Header() {
  return (
    <div className="Header-maincontainer">
      <img src={logo} className="Header-logo" alt="logo" />
      <h1 className="Header-title">Personality Test</h1>
    </div>
  );
}

export default Header;
