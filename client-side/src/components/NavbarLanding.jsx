import React from "react";
import { useNavigate } from "react-router";

const NavbarLandingComponent = () => {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToGameList = () => {
    navigate("/game-list");
  };

  const navigateToLanding = () => {
    navigate("/");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ opacity: "70%" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            style={{ width: "30px", height: "30px" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a onClick={navigateToLanding} className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a onClick={navigateToGameList} className="nav-link">
                  Game List
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item-create-account">
                  <a
                    onClick={navigateToRegister}
                    className="nav-link active"
                    aria-current="page"
                  >
                    Create An Account
                  </a>
                </li>
                <li className="nav-item-sign-in">
                  <a
                    onClick={navigateToLogin}
                    className="nav-link active"
                    aria-current="page"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLandingComponent;
