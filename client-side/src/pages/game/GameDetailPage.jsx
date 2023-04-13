import React from "react";
import { useNavigate } from "react-router-dom";

function GameDetailPage(props) {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/game-list");
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <div className="text-center">
        <iframe
          className=" rounded-4"
          title="asd"
          src={props.propsDetailGame.src}
          style={{ width: "95%", height: "500px" }}
          frameBorder="0"
          allow="gamepad *;"
        ></iframe>
      </div>
      <div className="p-4 w-50">
        <h1>{props.propsDetailGame.name}</h1>
        <button className="rounded-4 bg-secondary text-white fs-5">
          <i class="fa fa-share-alt" /> Share
        </button>
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
        <br />
        <button onClick={handleBack}>back</button>
      </div>
    </>
  );
}

export default GameDetailPage;
