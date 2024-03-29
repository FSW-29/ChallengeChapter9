import { getAuth, verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";
import { getDatabase, update, ref, get } from "@firebase/database";
import firebase from "../../services/firebase";
import { useNavigate } from "react-router";
import NavbarLandingComponent from "../../components/NavbarLanding";

const ResetPasswordFormPage = () => {
  // > Navigasi kehalaman dituju
  const navigate = useNavigate();

  // > set auth dan realtime database
  const auth = getAuth(firebase);
  const database = getDatabase(firebase);

  const handleUpdatePassword = async (event) => {
    event.preventDefault();

    // > Get data password (input password)
    // => merupakan kode unik yang dikirimkan oleh Firebase Authentication ke email pengguna saat permintaan reset password dibuat
    const code = new URLSearchParams(window.location.search).get("oobCode");
    // => value password
    const newPassword = event.target.elements.password.value;

    try {
      // > digunakan untuk memverifikasi kode reset password yang diberikan oleh Firebase Authentication
      const abc = await verifyPasswordResetCode(auth, code);
      // > digunakan untuk mengonfirmasi kode reset password dan memperbarui password baru yang diberikan oleh pengguna.
      await confirmPasswordReset(auth, code, newPassword);


      // > Set new password to real time database
      // => Abil data user
      const currentUser = auth;
      console.info(currentUser, 'ini current user');

      const usersRef = ref(database, "users");
      const snapshot = await get(usersRef);

      const users = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        users.push({
          ids: childSnapshot.key,
          ...childData,
        });
      });

      // > Cek apakah username dan email sudah digunakan
      const checkData = users.find((user) => user.email === abc);
      console.info(checkData);

      if (checkData) {
        const userRef = ref(database, `users/${checkData.ids}`);
        await update(userRef, { password: newPassword });
        console.info("Password updated successfully");
      }

      alert("Password Anda telah berhasil direset");
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <NavbarLandingComponent />
      <div className="container mt-3">
        <div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <div className="card p-3">
              <h1 className="text-center">Reset Password</h1>
              <form onSubmit={ handleUpdatePassword }>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">password Address</label>
                  <input name="password" type="password" className="form-control" id="password" placeholder="New Password Address" />
                </div>
                <div className="d-grid gap-2 mt-2">
                  <button type="submit" className="btn btn-primary">Update Password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPasswordFormPage