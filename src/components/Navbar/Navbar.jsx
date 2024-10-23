import "./Navbar.scss";
import TravelLogo from "../../assets/TravelLogo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={TravelLogo} className="navbar__logo" alt="Travel Logo" />
      <span className="navbar__text">my travel journal.</span>
    </nav>
  );
}
