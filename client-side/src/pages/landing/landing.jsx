import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import NavbarLandingComponent from "../../components/NavbarLanding";
import LandingDefinitionComponent from "../../components/LandingDefinition";
//import LandingCarouselComponent from "../../components/LandingCarousel";
import CarouselGameListComponent from "../../components/CarouselGameListComponent";
import GameListByCategoryComponent from "../../components/GameListByCategoryComponent";
//import LandingListGameComponent from "../../components/LandingListGame";

function LandingPage(props) {
  const array = props.propsArray;
  let racing = [];
  const navigate = useNavigate();
  useEffect(() => {
    cekToken();
  }, []);

  const cekToken = () => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  };

  const handleGameRacing = () => {
    for (let property in array) {
      if (array[property].type === "racing") {
        racing.push(array[property]);
      }
    }
  };

  handleGameRacing();

  const handleDetail = (e) => {
    e.preventDefault();

    //find data berdasarkan select
    const game = array.find((obj) => obj.id === parseInt(e.target.value));
    props.propsGame(game);

    navigate("/game-detail/" + e.target.value);
  };

  const navigateToGameList = () => {
    navigate("/game-list");
  };

  return (
    <div>
      <NavbarLandingComponent />
      {/* <LandingCarouselComponent /> */}
      <CarouselGameListComponent />
      <LandingDefinitionComponent />
      {/* <LandingListGameComponent /> */}

      <div className="bg-dark text-white text-center p-3">
        <GameListByCategoryComponent
          propsCategory={"Top"}
          propsHandleGame={racing}
          propsHandleDetail={handleDetail}
        />
        <button
          type="button"
          class="btn btn-outline-light"
          onClick={navigateToGameList}
        >
          VIEW MORE
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
