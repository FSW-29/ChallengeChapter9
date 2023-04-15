import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarHomeComponent from "../../components/NavbarHome";

function GameDetailPage(props) {
  const navigate = useNavigate();
  let frame;

  useEffect(() => {
    cekToken();
  }, []);

  const cekToken = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  };

  //kembali ke halaman sebelumnya
  const handleBack = (e) => {
    e.preventDefault();
    navigate("/game-list");
  };

  //untuk mengubah huruf depan pada kata menjadi kapital
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (props.propsDetailGame.type === "new") {
    frame = <></>;
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
      <NavbarHomeComponent />
      <div className="text-center">{frame}</div>
      <div className="pt-3 ps-5 w-50 fs-4">
        <h1>{props.propsDetailGame.name}</h1>
        <button className="rounded-4 bg-secondary text-white fs-5">
          <i className="fa fa-share-alt" /> Share
        </button>
        <br />
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
        <button
          className="w-5 h-5 fs-5 bg-secondary rounded-3 text-white"
          onClick={handleBack}
        >
          BACK
        </button>
      </div>
    </>
  );
}

export default GameDetailPage;
