import React from "react";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <a className="navbar-brand" href="/index.js">
          Cart Application
        </a>
        <div className="row">
          <div className="col-5">
            <span></span>
          </div>
          <div className="col-3">
            <span className="badge badge-pill badge-secondary">
              Items: {totalCounters}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
