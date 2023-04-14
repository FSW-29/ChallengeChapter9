
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/authentication/register";
import NotFoundPage from "./pages/notfound/notfound";
import GameListPage from "./pages/game/GameListPage";
import GameDetailPage from "./pages/game/GameDetailPage";
import listGame from "./list-game.json";
import LoginPage from './pages/authentication/login';


function App() {
  let [game, setGame] = useState([]);

  // Ambil data game yg di select lalu di set di useState untuk digunakan di game detail page
  const handleGame = (e) => {
    console.log(e, "======> id");
    setGame(e);
    return e;
  };

  // ambil data dr json lalu di alihkan ke game list page
  const array = listGame.game;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/' element={ <HomePage /> } />
          <Route path='/register' element={ <RegisterPage /> } />
          <Route path='/login' element={ <LoginPage /> } />
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
          <Route path='*' element={ <NotFoundPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
