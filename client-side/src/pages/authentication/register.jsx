import React, { useEffect, useState } from "react"
import NavbarAuthComponent from "../../components/NavbarAuth"
import { Link, useNavigate } from "react-router-dom";
import { get, getDatabase, push, ref } from "firebase/database";
import firebase from "../../services/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [biodata, setBiodata] = useState('');
  const [city, setCity] = useState('');
  const [socialMedia, setSocialMedia] = useState('');

  const navigate = useNavigate();

  let i = 0;
  useEffect(() => {
    if (i === 0) {
      const checkAccessToken = () => {
        if (localStorage.getItem('token')) {
          navigate('/home')
        }
      };
      checkAccessToken();
      i++;
    }
  }, [navigate, i]);

  const handleRegister = async (e) => {
    e.preventDefault();

    // > Cek inputan user
    if (!email || !username || !password || !biodata || !city || !socialMedia) {
      alert("Check Again Your Register Form!");
    }

    try {
      // > Instanse databasenya ke setup firebase (/src/services/firebase.js)
      const database = getDatabase(firebase);

      // > Query untuk mencari username dan email yang sudah ada
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

      // > Cek apakah username dan email sudah digunakan
      const isUsernameExist = users.find((user) => user.username === username);
      const isEmailExist = users.find((user) => user.email === email);

      if (isUsernameExist) {
        alert('Username has been used!');
        return;
      }

      if (isEmailExist) {
        alert('Email has been used!');
        return;
      }

      // > Buat Autentikasi
      const auth = getAuth(firebase);
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.info(createUser.user, "==> Sukses Register Lur!");
      console.info(createUser, "=-> create user");

      // > Simpan Kedalam Realtime Database
      const dataRef = ref(database, "users");
      await push(dataRef, {
        id: createUser.user.uid,
        email: email,
        username: username,
        password: password,
        total_score: 0,
        biodata: biodata,
        city: city,
        social_media: socialMedia,
      });
      console.info("Data berhasil disimpan di realtime db");

      alert("Register Success!");

      navigate("/login");
    } catch (error) {
      console.info(error.message);
    }
  };

  return (
    <>
      <NavbarAuthComponent />
      <div className="container mt-3">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-sm-12 col-md-8 col-lg-8">
            <div className="card p-3">
              <h1 className="text-center">Register Page</h1>
              <form onSubmit={handleRegister}>
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
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    name="username"
                    type="username"
                    className="form-control"
                    id="username"
                    placeholder="Your Username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
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
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="biodata" className="form-label">
                    Biodata
                  </label>
                  <textarea
                    name="biodata"
                    className="form-control"
                    id="biodata"
                    rows="3"
                    placeholder="Your Biodata"
                    required
                    onChange={(e) => setBiodata(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    name="city"
                    type="city"
                    className="form-control"
                    id="city"
                    placeholder="Your Hometown"
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="social_media" className="form-label">
                    Instagram URL
                  </label>
                  <input
                    name="social_media"
                    type="social_media"
                    className="form-control"
                    id="social_media"
                    placeholder="Your Instagram URL"
                    onChange={(e) => setSocialMedia(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid gap-2 mt-2">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                  <Link
                    to="/login"
                    className="btn btn-success"
                    target="__blank"
                  >
                    Have Account? Login Here
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

export default RegisterPage;
