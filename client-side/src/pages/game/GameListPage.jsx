import React from "react";
import { useNavigate } from "react-router-dom";

function GameListPage(props) {
  const navigate = useNavigate();
  const array = props.propsArray;
  const handleGameRacing = () => {
    return array.filter((item) => item.type.toLowerCase().includes("racing"));
  };

  const handleGamePuzzle = () => {
    return array.filter((item) => item.type.toLowerCase().includes("puzzle"));
  };

  const handleGameAdventure = () => {
    return array.filter((item) =>
      item.type.toLowerCase().includes("adventure")
    );
  };

  const handleDetail = (e) => {
    e.preventDefault();
    console.log(e, "=========> iddd");
    navigate("/game-detail/" + e.target.value);
    const game = array.find((obj) => obj.id === parseInt(e.target.value));
    props.propsGame(game);
  };

  return (
    <>
      <div className="container">
        <h1>Racing</h1>
        <div className="row align-items-start text-center">
          {handleGameRacing().map((el) => (
            <div className="col-3 border border-primary rounded-3">
              <button
                className="rounded-3"
                onClick={handleDetail}
                value={el.id}
                style={{
                  background: `url(${el.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "none",
                  width: "100%",
                  height: "200px",
                }}
              />
            </div>
          ))}
        </div>

        <h1>Puzzle</h1>
        <div className="row align-items-start text-center">
          {handleGamePuzzle().map((el) => (
            <div className="col-3 border border-primary rounded-3">
              <button
                className="rounded-3"
                onClick={handleDetail}
                value={el.id}
              >
                {el.id}
              </button>
            </div>
          ))}
        </div>

        <h1>Shooter</h1>
        <div className="row align-items-start text-center">
          {handleGameAdventure().map((el) => (
            <div className="col-3 border border-primary rounded-3">
              <button
                className="rounded-3"
                onClick={handleDetail}
                value={el.id}
              >
                {el.id}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GameListPage;
