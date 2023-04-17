import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// import { getDatabase } from "@firebase/database";
import firebase from "../../services/firebase";
import { useNavigate } from "react-router";
import NavbarLandingComponent from "../../components/NavbarLanding";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const auth = getAuth(firebase);
  // const database = getDatabase(firebase);

  const handleResetPassword = async (e) => {
    try {
      e.preventDefault();

      // 1 GET Autentikasi Firebase 
      // 2. Samakan dengan email yang diinput oleh user
      // 3 hapus autentikasinya (DELETE ACCOUNT) 
      // ===> DIATAS DILAKUKAN DIBELAKANG LAYAR
      // 4. Buat form reset password (redirect)
      // 5. cuma ada inputan password aja
      // 6. ketika di form password, masukin password kita createUserWithEmailAndPassword
      // 7. email kita simpan didalam state
      // # cari email jika ditemukan update uid nya (duplicate (kalau bisa data sebelumnya sudah dihapus dulu))
      // ====> 4, 5, 6, 7

      // const resetPassword = await sendPasswordResetEmail(auth, email, actionCodeSettings);
      const resetPassword = await sendPasswordResetEmail(auth, email, {
        url: "http://localhost:3000/reset-password-form", // URL halaman reset password buatanmu
        handleCodeInApp: true,
      });
      console.info(resetPassword);
      alert('Reset Password Email has been Send to Your Email!');
      navigate('/login');
    } catch (error) {
      console.info(error.message);
    }
  }

  return (
    <>
      <NavbarLandingComponent />
      <div className="container mt-3">
        <div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <div className="card p-3">
              <h1 className="text-center">Reset Password</h1>
              <form onSubmit={ handleResetPassword }>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input name="email" type="email" className="form-control" id="email" placeholder="Your Email Address" onChange={ (e) => setEmail(e.target.value) }  />
                </div>
                <div className="d-grid gap-2 mt-2">
                  <button type="submit" className="btn btn-primary">Send Email Reset Password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default ResetPasswordPage;