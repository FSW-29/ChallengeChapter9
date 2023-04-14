<<<<<<< HEAD
import React, { useState }  from "react"
import { useNavigate } from "react-router";
=======
import React, { useEffect, useState } from "react"
>>>>>>> 75e65ab8e883f8e6e1e3d69dff0ea24732ae3c4c
import NavbarAuthComponent from "../../components/NavbarAuth"
import { Link, useNavigate } from "react-router-dom";
import { get, getDatabase, push, ref } from "firebase/database";
import firebase from "../../services/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage = () => {
<<<<<<< HEAD

  const[emailUser, setEmailUser] = useState("")
  const[passwordUser, setPasswordUser] = useState("")

  const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault()
    }

    const navigateToLogin = () => {
      navigate('/login')
    }
=======
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
          navigate('/')
        }
      }
      checkAccessToken();
      i++;
    }
    
  }, [navigate, i]);

  const handleRegister = async (e) => {
    e.preventDefault();

    // > Cek inputan user
    if (!email || !username || !password || !biodata || !city || !socialMedia) {
      alert('Check Again Your Register Form!');
    }

    try {
      // > Instanse databasenya ke setup firebase (/src/services/firebase.js)
      const database = getDatabase(firebase);

      // > Query untuk mencari username dan email yang sudah ada
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

      // > Cek apakah username dan email sudah digunakan
      const isUsernameExist = users.find((user) => user.username === username);
      const isEmailExist = users.find((user) => user.email === email);

      if (isUsernameExist) {
        alert('Username has been taken');
        return;
      }

      if (isEmailExist) {
        alert('Email has been used');
        return;
      }

      // > Buat Autentikasi
      const auth = getAuth(firebase);
      const createUser = await createUserWithEmailAndPassword(auth, email, password);
      console.info(createUser.user, '==> Sukses Register Lur!');
      console.info(createUser, '=-> create user');

      // > Simpan Kedalam Realtime Database
      const dataRef = ref(database, 'users');
      await push(dataRef, {
        id: createUser.user.uid,
        email: email,
        username: username,
        password: password,
        total_score: 0,
        biodata: biodata,
        city: city,
        social_media: socialMedia
      });
      console.info('Data berhasil disimpan di realtime db');

      alert('Register Success!');

      navigate('/login');

    } catch (error) {
      console.info(error.message);
    }
  };
>>>>>>> 75e65ab8e883f8e6e1e3d69dff0ea24732ae3c4c

  return (
    <>
      <NavbarAuthComponent />
<<<<<<< HEAD
      <div className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <div className="card-body p-4 p-md-5">
                  <h3 className="text-center mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Form</h3>
      
                  {/* setting form */}
                  <form onSubmit={handleSubmit} className="px-md-2">
                    
                    {/* get data email */}
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example1q">Email</label>
                      <input type="email" className="form-control" onChange={e => setEmailUser(e.target.value)} />
                    </div>
                    {/* get data password */}
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control" onChange={e => setPasswordUser(e.target.value)}/>
                    </div>

                    {/* button register & navigate to login page */}
                    <div class="d-flex justify-content-center">
                      <button type="submit" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                    </div>
                  
                    <p class="text-center text-muted mt-5 mb-0">Already have an account? 
                    <a onClick={navigateToLogin} class="fw-bold text-body"> <u>Login here</u></a></p>
                
                  </form>
                </div>
              </div>
=======
      <div className="container mt-3">
        <div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <div className="card p-3">
              <h1 className="text-center">Register Page</h1>
              <form onSubmit={ handleRegister }>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input name="email" type="email" className="form-control" id="email" placeholder="Your Email Address" onChange={ (e) => setEmail(e.target.value) } required />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input name="username" type="username" className="form-control" id="username" placeholder="Your Username" onChange={ (e) => setUsername(e.target.value) } required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input name="password" type="password" className="form-control" id="password" placeholder="Your Password" onChange={ (e) => setPassword(e.target.value) } required />
                </div>
                <div className="mb-3">
                  <label htmlFor="biodata" className="form-label">Biodata</label>
                  <textarea name="biodata" className="form-control" id="biodata" rows="3" placeholder="Your Biodata" required onChange={ (e) => setBiodata(e.target.value) }></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">City</label>
                  <input name="city" type="city" className="form-control" id="city" placeholder="Your Hometown" onChange={ (e) => setCity(e.target.value) } required />
                </div>
                <div className="mb-3">
                  <label htmlFor="social_media" className="form-label">Instagram URL</label>
                  <input name="social_media" type="social_media" className="form-control" id="social_media" placeholder="Your Instagram URL" onChange={ (e) => setSocialMedia(e.target.value) } required />
                </div>
                <div className="d-grid gap-2 mt-2">
                  <button type="submit" className="btn btn-primary">Register</button>
                  <Link to="/login" className="btn btn-success" target="__blank">Have Account? Login Here</Link>
                </div>
              </form>
>>>>>>> 75e65ab8e883f8e6e1e3d69dff0ea24732ae3c4c
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;