import React from 'react';
import weather from "../weather.svg"

function Header(props) {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a href='/' className="navbar-brand me-auto ms-auto p-0">Weather app <img src={weather} alt="/logo/" style={{height:'2rem',objectFit: 'cover'}} /></a>
  </div>
</nav>
    );
}

export default Header;