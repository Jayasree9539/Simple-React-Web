import React from "react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className={`display-flex`}>
      <div className="logo">
        <img
          src="/assets/kerala__1_-removebg-preview.png"
          alt="Logo"
          className="logo-image"
        />
      </div>
      <SearchBar />
      <ul className="nav display-flex">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
