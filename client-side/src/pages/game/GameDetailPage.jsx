import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarHomeComponent from "../../components/NavbarHome";
import GameSuitComponent from "../../components/GameSuitComponents";

function GameDetailPage(props) {
  const navigate = useNavigate();
  let frame;
  let arrayLb = props.propsLb;
  let leaderBoard = [];

  useEffect(() => {
    cekToken();
  }, []);

  const cekToken = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  };

  const handleLeaderBoard = () => {
    for (let property in arrayLb) {
      leaderBoard.push(arrayLb[property]);
    }
    //console.log(leaderBoard, "====>a");
  };

  handleLeaderBoard();

  function compare(a, b) {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  }

  //kembali ke halaman sebelumnya
  // const handleBack = (e) => {
  //   e.preventDefault();
  //   navigate("/game-list");
  // };

  //untuk mengubah huruf depan pada kata menjadi kapital
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (props.propsDetailGame.type === "new") {
    frame = (
      <>
        <GameSuitComponent />
      </>
    );
  } else {
    frame = (
      <iframe
        className=" rounded-4"
        title={props.propsDetailGame.name}
        src={props.propsDetailGame.src}
        style={{ width: "95%", height: "700px" }}
        frameBorder="0"
        allow="gamepad *;"
      ></iframe>
    );
  }

  return (
    <>
      <NavbarHomeComponent propsPutUsername={props.propsSetUsername} />
      <div className="text-center">{frame}</div>
      <div>
        <div className="row align-items-start pb-3 text-light bg-secondary">
          <div className="col-6">
            <div className="pt-3 ps-5 fs-4 ">
              <h1>{props.propsDetailGame.name}</h1>
              <table>
                <tr>
                  <td>Developer</td>
                  <td>:</td>
                  <td></td>
                  <td>{props.propsDetailGame.developer}</td>
                </tr>
                <tr>
                  <td>Platform</td>
                  <td>:</td>
                  <td></td>
                  <td>{props.propsDetailGame.platform}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>:</td>
                  <td></td>
                  <td>{capitalize(props.propsDetailGame.type)}</td>
                </tr>
              </table>
              <br />
              <p>{props.propsDetailGame.desc}</p>
              {/* <button
          className="w-5 h-5 fs-5 bg-secondary rounded-3 text-white"
          onClick={handleBack}
        >
          BACK
        </button> */}
            </div>
          </div>
          <div className="col-6 text-center pt-4 pe-5">
            <h1>LEADERBOARD</h1>
            <table className="table table-striped table-dark fw-bold fs-5 mt-5 ">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                {arrayLb.sort(compare).map((el, idx) => (
                  <tr key={el.id}>
                    <td>{idx + 1}</td>
                    <td>{el.name}</td>
                    <td>{el.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameDetailPage;
