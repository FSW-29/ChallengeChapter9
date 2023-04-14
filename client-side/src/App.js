import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/authentication/register';
import NotFoundPage from './pages/notfound/notfound';
import LoginPage from './pages/authentication/login';
import HomePage from './pages/home/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/register' element={ <RegisterPage /> } />
          <Route path='/login' element={ <LoginPage /> } />
          <Route path='*' element={ <NotFoundPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
