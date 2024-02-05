import React from "react";
import "./header-menu.scss";
const MyHeader = () => {
  return (
    <header className="brzi-header">
      <a href="/" className="brzi-header__logo">
        Logo
      </a>
      <nav>
        <ul className="brzi-header__opcije">
          <li>
            <a href="/home" className="brzi-header__opcija">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="brzi-header__opcija">
              About
            </a>
          </li>
          <li>
            <a href="/when" className="brzi-header__opcija">
              When
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MyHeader;
