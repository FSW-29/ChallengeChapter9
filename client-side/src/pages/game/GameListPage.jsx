import React from "react";
import { useNavigate } from "react-router-dom";
import CarouselGameListComponent from "../../components/CarouselGameListComponent";
import GameListByCategoryComponent from "../../components/GameListByCategoryComponent";
import NavbarHomeComponent from "../../components/NavbarHome";
import NavbarLandingComponent from "../../components/NavbarLanding";

function GameListPage(props) {
  const navigate = useNavigate();
  const array = props.propsArray;
  let racing = [];
  let puzzle = [];
  let action = [];
  let gameNew = [];

  //filter data pada sesuai kategori

  const handleGameRacing = () => {
    for (let property in array) {
      if (array[property].type === "racing") {
        racing.push(array[property]);
      }
    }
    //console.log(racing, "====>a");
    //return array.filter((item) => item.type.toLowerCase() === "racing");
  };

  const handleGamePuzzle = () => {
    for (let property in array) {
      if (array[property].type === "puzzle") {
        puzzle.push(array[property]);
      }
    }
    //console.log(puzzle, "====>a");
    //return array.filter((item) => item.type.toLowerCase() === "puzzle");
  };

  const handleGameAction = () => {
    for (let property in array) {
      if (array[property].type === "action") {
        action.push(array[property]);
      }
    }
    //return array.filter((item) => item.type.toLowerCase() === "action");
  };

  const handleGameNew = () => {
    for (let property in array) {
      if (array[property].type === "new") {
        gameNew.push(array[property]);
      }
    }
    //return array.filter((item) => item.type.toLowerCase() === "new");
  };

  handleGameRacing();
  handleGamePuzzle();
  handleGameAction();
  handleGameNew();

  //

  //function untuk pindah ke detail page
  const handleDetail = (e) => {
    e.preventDefault();

    //find data berdasarkan select
    const game = array.find((obj) => obj.id === parseInt(e.target.value));
    props.propsGame(game);

    navigate("/game-detail/" + e.target.value);
  };

  //border border-primary rounded-3

  return (
    <>
      {!localStorage.getItem("token") ? (
        <NavbarLandingComponent />
      ) : (
        <NavbarHomeComponent />
      )}

      <CarouselGameListComponent />
      <div className="container">
        <GameListByCategoryComponent
          propsCategory={"New"}
          propsHandleGame={gameNew}
          propsHandleDetail={handleDetail}
        />

        <GameListByCategoryComponent
          propsCategory={"Racing"}
          propsHandleGame={racing}
          propsHandleDetail={handleDetail}
        />

        <GameListByCategoryComponent
          propsCategory={"Puzzle"}
          propsHandleGame={puzzle}
          propsHandleDetail={handleDetail}
        />

        <GameListByCategoryComponent
          propsCategory={"Action"}
          propsHandleGame={action}
          propsHandleDetail={handleDetail}
        />
      </div>
    </>
  );
}

export default GameListPage;

/* <h1>Racing</h1>
        <div className="row align-items-start text-center pb-3">
          {handleGameRacing().map((el) => (
            <div className="col-3">
              <button
                className="rounded-3"
                onClick={handleDetail}
                value={el.id}
                style={{
                  background: `url(${el.image})`,
                  backgroundSize: "100% 200px",
                  backgroundRepeat: "none",
                  width: "100%",
                  height: "200px",
                }}
              />
            </div>
          ))}
        </div> */

/* <h1>Puzzle</h1>
        <div className="row align-items-start text-center pb-3">
          {handleGamePuzzle().map((el) => (
            <div className="col-3">
              <button
                className="rounded-3"
                onClick={handleDetail}
                value={el.id}
                style={{
                  background: `url(${el.image})`,
                  backgroundSize: "100% 200px",
                  backgroundRepeat: "none",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "200px",
                }}
              />
            </div>
          ))}
        </div> */

/* <h1>Action</h1>
        <div className="row align-items-start text-center pb-3">
          {handleGameAction().map((el) => (
            <div className="col-3">
              <button
                className="rounded-3"
                onClick={handleDetail}
                value={el.id}
                style={{
                  background: `url(${el.image})`,
                  backgroundSize: "100% 200px",
                  backgroundRepeat: "none",
                  width: "100%",
                  height: "200px",
                }}
              />
            </div>
          ))}
        </div>
      </div> */
