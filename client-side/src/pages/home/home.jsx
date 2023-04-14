import React from "react";
import { useNavigate } from "react-router";
import { getAuth, signOut } from "firebase/auth";
import firebase from "../../services/firebase";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const auth = getAuth(firebase);
    await signOut(auth);

    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <h1>Ini adalah homepage</h1>
      <button className="btn btn-primary" onClick={ handleLogout }>Logout</button>
    </>
  );
};

export default HomePage;