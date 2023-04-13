import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarAuthComponent from "../../components/NavbarAuth";
import { get, getDatabase, ref } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../../services/firebase";

const LoginPage = () => {
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  let i = 0;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, [i, navigate]);

  // > Login Process
  // => Ambil data dari form login
  const handleFormLogin = (e) => {
    setFormLogin((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value
      };
    });
  };
  // => Handler Proses Login
  const handleLogin = async (e) => {
    e.preventDefault();

    const {email, password} = formLogin;
    
    // > Cek inputan user
    if (!email || !password) {
      alert('Check Again Your Login Form!');
    }

    try {
      // > Instanse databasenya ke setup firebase (/src/services/firebase.js)
      const database = getDatabase(firebase);

      // > Query untuk mencari email 
      const usersRef = ref(database, 'users');
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
        // > Cek config firebase.js
        const auth = getAuth(firebase);
        // > Buat akun user (authentication)
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        console.info(userCredential, '==> user credential');

        // > Tampilkan user data (credentials)
        const user = userCredential.user;
        console.log(user, "==> Success Login User");

        // Simpan token
        const token = user.accessToken;
        // console.info(token, 'ini token');
        localStorage.setItem('token', token);

        // > Jika login berhasil direct kehalaman login
        navigate('/');
      } else {
        return alert('Check Again Your Login Form');
      }
    } catch (error) {
      console.info(error.message);
    }
  }

  return(
    <>
      <NavbarAuthComponent />
      <div className="container mt-3">
        <div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <div className="card p-3">
              <h1 className="text-center">Login Page</h1>
              <form onSubmit={ handleLogin }>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input name="email" type="email" className="form-control" id="email" placeholder="Your Email Address" onChange={ handleFormLogin }  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input name="password" type="password" className="form-control" id="password" placeholder="Your Password" onChange={ handleFormLogin }  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Login</button>
                  <Link to="/register" className="btn btn-success" target="__blank">Dont Have Account? Signup Here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default LoginPage;