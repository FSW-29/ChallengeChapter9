import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/authentication/register';
import NotFoundPage from './pages/notfound/notfound';
import HomePage from './pages/home/home';
import LoginPage from './pages/authentication/login';
import LandingPage from './pages/landing/landing';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={ <HomePage /> } />
          <Route path='/login' element={ <LoginPage /> } />
          <Route path='/register' element={ <RegisterPage /> } />
          <Route path='/' element={ <LandingPage />} />
          <Route path='*' element={ <NotFoundPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
