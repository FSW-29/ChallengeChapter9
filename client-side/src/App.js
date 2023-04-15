import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ref, set, get, child, getDatabase, update } from "firebase/database";
import firebase from "./services/firebase";
import RegisterPage from "./pages/authentication/register";
import NotFoundPage from "./pages/notfound/notfound";
import GameListPage from "./pages/game/GameListPage";
import GameDetailPage from "./pages/game/GameDetailPage";
import listGame from "./list-game.json";
import LoginPage from "./pages/authentication/login";
import ProfilePage from "./pages/authentication/profilePage";
import LandingPage from "./pages/landing/landing";
import HomePage from "./pages/home/home";

function App() {
  let [game, setGame] = useState([]);
  const database = getDatabase(firebase);

  // Ambil data game yg di select lalu di set di useState untuk digunakan di game detail page
  const handleGame = (e) => {
    console.log(e, "======> id");
    setGame(e);
    return e;
  };

  // ambil data dr json lalu di alihkan ke game list page
  //const array = listGame.game;
  let arrayGame;
  let [arrGame, setArrGame] = useState();

  let arrayLb;
  let [arrLb, setArrLb] = useState();

  const fecthDataGame = async () => {
    try {
      const databaseFirebase = await get(child(ref(database), "game"));
      arrayGame = Object.values(databaseFirebase.val());
      setArrGame(arrayGame);
      //console.log(arrayGame, "====>b");
    } catch (error) {
      console.log(error);
    }
  };

  const fecthDataLeaderBoard = async () => {
    try {
      const databaseFirebase = await get(child(ref(database), "leaderboard"));
      arrayLb = Object.values(databaseFirebase.val());
      setArrLb(arrayLb);
      //console.log(arrayLb, "====>b");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthDataGame();
    fecthDataLeaderBoard();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            exact
            path="/game-list"
            element={
              <GameListPage propsGame={handleGame} propsArray={arrGame} />
            }
          />
          <Route
            exact
            path={"/game-detail/:name"}
            element={<GameDetailPage propsDetailGame={game} propsLb={arrLb} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
