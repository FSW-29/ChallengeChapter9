import React from "react";
import logoBinar from '../assets/binar_logo.png'

const NavbarAuthComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={ logoBinar } alt="img-banner-auth" width="30" height="24" class="d-inline-block align-text-top" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavbarAuthComponent;