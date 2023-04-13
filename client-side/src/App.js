import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/authentication/register";
import NotFoundPage from "./pages/notfound/notfound";
import GameListPage from "./pages/game/GameListPage";
import GameDetailPage from "./pages/game/GameDetailPage";

function App() {
  let [game, setGame] = useState([]);

  const handleGame = (e) => {
    console.log(e, "======> id");
    setGame(e);
    return e;
  };

  const array = [
    {
      id: 1,
      name: "Smash Karts",
      desc: "Smash Karts is a 3D multiplayer kart battle game. Drive your go-kart, pick up weapons, and blow up other karts to win! Keep playing to level up and unlock new characters and prizes.",
      type: "racing",
      developer: "crazygames@tall.team",
      platform: "Browser (desktop, mobile, tablet)",
      image:
        "https://images.crazygames.com/smash-karts/20201119155032/smash-karts-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&fit=crop",
      src: "https://www.crazygames.com/embed/smash-karts",
    },
    {
      id: 2,
      desc: "bbbbbbbbb",
      type: "puzzle",
    },
    {
      id: 3,
      desc: "ccccccccc",
      type: "adventure",
    },
    {
      id: 4,
      desc: "ddddddddd",
      type: "racing",
    },
    {
      id: 5,
      desc: "eeeeeeeeee",
      type: "puzzle",
    },
    {
      id: 6,
      desc: "fffffffffff",
      type: "adventure",
    },
    {
      id: 7,
      desc: "ggggggggggg",
      type: "racing",
    },
    {
      id: 8,
      desc: "hhhhhhhhhhh",
      type: "puzzle",
    },
    {
      id: 9,
      desc: "iiiiiiiiii",
      type: "adventure",
    },
    {
      id: 10,
      desc: "jjjjjjjjj",
      type: "racing",
    },
    {
      id: 11,
      desc: "kkkkkkkkk",
      type: "puzzle",
    },
    {
      id: 12,
      desc: "lllllllll",
      type: "adventure",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route
            exact
            path="/game-list"
            element={<GameListPage propsGame={handleGame} propsArray={array} />}
          />
          <Route
            exact
            path={"/game-detail/:name"}
            element={<GameDetailPage propsDetailGame={game} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
