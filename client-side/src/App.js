import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/authentication/register';
import NotFoundPage from './pages/notfound/notfound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={ <RegisterPage /> } />
          <Route path='*' element={ <NotFoundPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
