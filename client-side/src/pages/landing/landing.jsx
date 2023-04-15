import React from "react";
// import { useNavigate } from "react-router";
import NavbarLandingComponent from "../../components/NavbarLanding";
import LandingDefinitionComponent from "../../components/LandingDefinition";
import LandingCarouselComponent from "../../components/LandingCarousel";
//import LandingListGameComponent from "../../components/LandingListGame";

function LandingPage() {
  return (
    <div>
      <NavbarLandingComponent />
      <LandingCarouselComponent />
      <LandingDefinitionComponent />
      {/* <LandingListGameComponent /> */}
    </div>
  );
}

export default LandingPage;
