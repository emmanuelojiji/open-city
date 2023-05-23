import "./Header.scss";
import logo from "../Media/logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} className="logo" />

      <div>
        <h3>MONDAY 22</h3>
        <h1>Live Updates</h1>
      </div>
    </header>
  );
};

export default Header;
