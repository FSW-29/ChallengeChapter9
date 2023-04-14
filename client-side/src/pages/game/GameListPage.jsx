import React from "react";
import { useNavigate } from "react-router-dom";
import CarouselGameListComponent from "../../components/CarouselGameListComponent";
import GameListByCategoryComponent from "../../components/GameListByCategoryComponent";

function GameListPage(props) {
  const navigate = useNavigate();
  const array = props.propsArray;

  // filter data pada sesuai kategori
  const handleGameRacing = () => {
    return array.filter((item) => item.type.toLowerCase() === "racing");
  };

  const handleGamePuzzle = () => {
    return array.filter((item) => item.type.toLowerCase() === "puzzle");
  };

  const handleGameAction = () => {
    return array.filter((item) => item.type.toLowerCase() === "action");
  };

  const handleGameNew = () => {
    return array.filter((item) => item.type.toLowerCase() === "new");
  };
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
      <CarouselGameListComponent />
      <div className="container">
        <GameListByCategoryComponent
          propsCategory={"New"}
          propsHandleGame={handleGameNew}
          propsHandleDetail={handleDetail}
        />

        <GameListByCategoryComponent
          propsCategory={"Racing"}
          propsHandleGame={handleGameRacing}
          propsHandleDetail={handleDetail}
        />

        <GameListByCategoryComponent
          propsCategory={"Puzzle"}
          propsHandleGame={handleGamePuzzle}
          propsHandleDetail={handleDetail}
        />

        <GameListByCategoryComponent
          propsCategory={"Action"}
          propsHandleGame={handleGameAction}
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
