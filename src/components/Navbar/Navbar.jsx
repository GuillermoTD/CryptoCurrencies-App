import React from "react";
import { Link } from "react-router-dom";
import { BsCoin } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link className="Navbar_Brand" to="/">
        <BsCoin className="Navbar_Brand_icon" /> Cryptoverse-app
      </Link>
      <div className="Navbar_Links">
        <Link to="/" className="Navbar_Links_item">
          Home
        </Link>
        <Link to="cryptocurrencies" className="Navbar_Links_item">
          CryptoCurrencies
        </Link>
        <Link to="exchanges" className="Navbar_Links_item">
          Exchanges
        </Link>
        <Link to="news" className="Navbar_Links_item">
          News
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
