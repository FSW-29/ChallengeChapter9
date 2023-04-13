import React from "react"
import NavbarAuthComponent from "../../components/NavbarAuth"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, push } from "firebase/database";

const RegisterPage = () => {
  return (
    <>
      <NavbarAuthComponent />
      <h1>Adrian Mulyawan</h1>
    </>
  );
};

export default RegisterPage;