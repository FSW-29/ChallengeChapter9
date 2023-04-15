import React from "react";
import NavbarHomeComponent from "../../components/NavbarHome";
// import { useNavigate } from "react-router";
// import { getAuth, signOut } from "firebase/auth";
// import firebase from "../../services/firebase";

const HomePage = () => {

    // const navigate = useNavigate();

    // const handleLogout = async () => {
    //   const auth = getAuth(firebase);
    //   await signOut(auth);

    //   localStorage.removeItem('token');
    //   navigate('/login');
    // };

    return(
        <>
            <NavbarHomeComponent />
            <div className="home">
                <div className="text-center text-white" >  
                    <h1 className="home-title" style={{paddingTop: "15%"}}>PLAY TRADITIONAL GAME</h1>
                    <h6 className="home-tagline">Experience New Traditional Gameplay</h6>
                    <a href="https://www.crazygames.com/" type="button" className="btn btn-secondary btn-lg btn-block btn btn-warning bold">PLAY NOW</a>
                
                {/* <button className="btn btn-primary" onClick={ handleLogout }>Logout</button> */}
                </div> 
            </div>
        </>
    );

}

export default HomePage;