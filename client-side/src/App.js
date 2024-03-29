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
import GameSuitComponent from "./components/GameSuitComponents";
import ResetPasswordPage from "./pages/authentication/resetPassword";
import ResetPasswordFormPage from "./pages/authentication/formResetPassword";

function App() {
  let [game, setGame] = useState([]);
  let [username, setUsername] = useState("");
  let userNum = null;
  let name;
  const database = getDatabase(firebase);

  // Ambil data game yg di select lalu di set di useState untuk digunakan di game detail page
  const handleGame = (e) => {
    // console.log(e, "======> id");
    setGame(e);
    return e;
  };

  // ambil data dr json lalu di alihkan ke game list page
  //const array = listGame.game;
  let arrayGame;
  let [arrGame, setArrGame] = useState();

  let arrayLb;
  let [arrLb, setArrLb] = useState();

  const fetchDataUser = async () => {
    try {
      // const databaseFirebase = await get(child(ref(database), "users"));

      // let cekData = Object.values(databaseFirebase.val());
      // let tokenCurrentUser = localStorage.getItem("token");

      // for (let i = 0; i < cekData.length; i++) {
      //   if (cekData[i].id === tokenCurrentUser) {
      //     userNum = i;
      //   }
      // }

      const usersRef = ref(database, "users");
      const snapshot = await get(usersRef);

      const users = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        users.push({
          ids: childSnapshot.key,
          ...childData,
        });
      });

      for (let property in users) {
        if (users[property].id === localStorage.getItem("token")) {
          console.log(users[property].username, "========>>> snap");
          name = users[property].username;
        }
      }

      if (!localStorage.getItem("token")) {
        setUsername("");
      } else {
        setUsername(name);
      }
    } catch (err) {
      console.log(err);
    }
  };

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

  //Handle show Username on navbar
  const handleUserName = (e) => {
    setUsername(e);
  };

  useEffect(() => {
    fetchDataUser();
    fecthDataGame();
    fecthDataLeaderBoard();
    handleUserName();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/register" element={<RegisterPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route
            path="/reset-password-form"
            element={<ResetPasswordFormPage />}
          />
          <Route
            path="/home"
            element={
              <HomePage
                propsSetUsername={username}
                propsArray={arrGame}
                propsGame={handleGame}
              />
            }
          />
          <Route
            path="/"
            element={
              <LandingPage propsArray={arrGame} propsGame={handleGame} />
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            exact
            path="/profile"
            element={<ProfilePage propsSetUsername={username} />}
          />
          <Route
            path="/login"
            element={<LoginPage propsUsername={handleUserName} />}
          />
          <Route
            exact
            path="/game-list"
            element={
              <GameListPage
                propsGame={handleGame}
                propsArray={arrGame}
                propsSetUsername={username}
              />
            }
          />
          <Route
            exact
            path={"/game-detail/:name"}
            element={
              <GameDetailPage
                propsDetailGame={game}
                propsLb={arrLb}
                propsSetUsername={username}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
          <Route exact path="/game-suit" element={<GameSuitComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
