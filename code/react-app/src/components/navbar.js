import React, { Component } from 'react';

// Stateless functional component
const NavBar = ({totalCounters}) => {
  return (
    // copied from Bootstrap
    // a navigation bar with a title and the number of active carts 
    <React.Fragment >
      <nav className="navbar navbar-light bg-light" style={{flexDirection: 'column', alignItems: 'center'}}>
        <a className="navbar-brand" href="#">Welcome to Sarah's React Application{" "}
        </a>
      </nav>
      <nav className="navbar navbar-light bg-light" style={{flexDirection: 'column', alignItems: 'center'}}>
        <a className="navbar-brand" href="#">Number of Active Carts{" "}
          <span className="badge badge-pill badge-secondary">
              {totalCounters}
          </span>
        </a>
      </nav>
    </React.Fragment >
  );
};

export default NavBar;
