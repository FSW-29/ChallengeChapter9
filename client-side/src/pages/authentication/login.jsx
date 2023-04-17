import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { get, getDatabase, ref, push } from "firebase/database";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import firebase from "../../services/firebase";
import NavbarLandingComponent from "../../components/NavbarLanding";

const LoginPage = (props) => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  let i = 0;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, [i, navigate]);

  // > Login Using Email and Password
  // => Ambil data dari form login
  const handleFormLogin = (e) => {
    setFormLogin((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };
  // => Handler Proses Login
  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = formLogin;

    // > Cek inputan user
    if (!email || !password) {
      alert("Check Again Your Login Form!");
    }

    try {
      // > Instanse databasenya ke setup firebase (/src/services/firebase.js)
      const database = getDatabase(firebase);

      // > Query untuk mencari email
      const usersRef = ref(database, "users");
      const snapshot = await get(usersRef);

      const users = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        users.push({
          id: childSnapshot.key,
          ...childData,
        });
      });

      // > Cek apakah email ada di realtime database
      const isEmailExist = users.find((user) => user.email === email);

      if (isEmailExist) {
        // console.info(isEmailExist, '==> email ditemukan');
        // > Cek config firebase.js
        const auth = getAuth(firebase);
        // > Buat akun user (authentication)
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        // console.info(userCredential, '==> user credential');

        // > Tampilkan user data (credentials)
        const user = userCredential.user;
        // console.info(user, "==> Success Login User");
        // console.info(user.uid, '==> uid user');

        // > Simpan token (token dalam bentuk uid)
        const tokenUID = user.uid;
        // console.info(token, 'ini token');
        // > Generate local storage untuk simpan token
        localStorage.setItem("token", tokenUID);

        //Handle show Username on navbar
        let name;
        for (let property in users) {
          if (users[property].id === localStorage.getItem("token")) {
            name = users[property].username;
          }
        }
        props.propsUsername(name);
        //

        // > Jika login berhasil direct kehalaman home
        navigate("/home");
      } else {
        return alert("Check Again Your Login Form");
      }
    } catch (error) {
      console.info(error.message);
      alert("Check Again Email or Password!");
    }
  };

  // > Login Using Google Auth
  const loginWithGoogle = async () => {
    try {
      // > Proses Auth
      const auth = getAuth(firebase);
      const provider = new GoogleAuthProvider();
      const loginResult = await signInWithPopup(auth, provider);
      // console.info(loginResult, '==> 1');
      // console.info(loginResult.user, '==> 2');

      // > Get user id, username, email
      // => id
      const idUser = loginResult.user.uid;
      // => email
      const emailUser = loginResult.user.email;
      // => username
      const name = loginResult.user.displayName;
      const splitName = name.split(" ");
      const usernameUser =
        splitName[0].toLowerCase() +
        splitName[1].toLocaleLowerCase() +
        Math.floor(Math.random() * 1000);

      // > Proses Simpan Kedalam Realtime Database
      const database = getDatabase(firebase);
      const dataRef = ref(database, "users");
      await push(dataRef, {
        id: idUser,
        email: emailUser,
        username: usernameUser,
        password: "0n3ucoSxNHHYLyIq9qid0z5UR",
        total_score: 0,
        biodata: "Belum Diatur",
        city: "Belum Diatur",
        social_media: "Belum Diatur",
      });

      // > Buat token (generate token) bila user login dengan google auth
      const tokenLoginGoogleUID = loginResult.user.uid;
      // > Set token
      localStorage.setItem("token", tokenLoginGoogleUID);
      // console.info(loginResult.user.uid, '==> ini uid');

      navigate("/home");
    } catch (error) {
      console.info(error.message);
    }
  };

  return (
    <>
      <NavbarLandingComponent />
      <div className="container mt-3">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-sm-12 col-md-8 col-lg-8">
            <div className="card p-3">
              <h1 className="text-center">Login Page</h1>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email Address"
                    onChange={handleFormLogin}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Your Password"
                    onChange={handleFormLogin}
                  />
                </div>
                <div className="d-grid gap-2 mt-2">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <Link
                    to="/register"
                    className="btn btn-success"
                    target="__blank"
                  >
                    Dont Have Account? Signup Here
                  </Link>
                </div>
                <div className="or my-3 text-center">
                  <p style={{ fontSize: "14px", fontWeight: "lighter" }}>Or</p>
                </div>
                <div className="d-grid gap-2 mt-3">
                  <Link className="btn btn-secondary" onClick={loginWithGoogle}>
                    Login Using Google!
                  </Link>
                </div>
                <div className="d-grid gap-2 my-3">
                  <hr />
                  <Link
                    to="/reset-password"
                    className="text-decoration-none text-center text-black"
                  >
                    Forgot the Password? Press Here
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
