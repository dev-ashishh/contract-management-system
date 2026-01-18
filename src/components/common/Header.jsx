import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        Contract Management System
      </div>

      <nav className="header-nav">
        <Link to="/">Dashboard</Link>
        <Link to="/blueprints">Blueprints</Link>
        <Link to="/create-contract">Create Contract</Link>
      </nav>
    </header>
  );
};

export default Header;
