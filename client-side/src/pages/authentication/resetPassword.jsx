import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import firebase from "../../services/firebase";
import NavbarAuthComponent from "../../components/NavbarAuth";
import { useNavigate } from "react-router";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    try {
      e.preventDefault();
      
      const auth = getAuth(firebase);
      await sendPasswordResetEmail(auth, email);
      alert('Reset Password Email has been Send to Your Email!');

      navigate('/login');
    } catch (error) {
      console.info(error.message);
    }
  }

  return (
    <>
      <NavbarAuthComponent />
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