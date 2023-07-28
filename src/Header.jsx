import logo from "./assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="ballance">
        <h1>My balance</h1>
        <p>$921.48</p>
      </div>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
