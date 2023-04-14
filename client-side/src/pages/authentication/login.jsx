import React, { useState }  from "react";
import { useNavigate } from "react-router";

function LoginPage() {

    const[emailUser, setEmailUser] = useState("")
    const[passwordUser, setPasswordUser] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault()

      navigate('/home')
    }

    return(
        <div className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <div className="card-body p-4 p-md-5">
                  <h3 className="text-center mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login Form</h3>
      
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

                    {/* button login */}
                    <div class="d-flex justify-content-center">
                      <button type="submit" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                    </div>
                  
                    {/* <p class="text-center text-muted mt-5 mb-0">Already have an account? 
                    <a onClick={navigateToLogin} class="fw-bold text-body"><u>Login here</u></a></p> */}
                
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LoginPage;