import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { signup } from '../redux/actions';

const checkUppercase = (str) => {
  let flag = false;
  let upperChars = /[A-Z]/;
  if (upperChars.test(str)) {
    flag = true;
    return flag;
  }
  return flag;
}
const checkSpecialChar = (str) => {
  let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (spChars.test(str)) {
    return true;
  } else {
    return false;
  }
}
function Signup() {
  const dispatch = useDispatch()
  const auth = useSelector(state=>state.auth)

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const resetForm = () => {
    setFname("")
    setLname("")
    setMobile("")
    setEmail("")
    setPassword("")
  }

  const signupFun = (e) => {
    e.preventDefault();
    if (fname === "") {
      return toast.error("First name is required!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (lname === "") {
      return toast.error("Last name is required!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (mobile === "") {
      return toast.error("Mobile number is required!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (!/^[0-9]+$/.test(mobile)) {
      return toast.error("Mobile number must contain digits only!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (mobile.length !== 10) {
      return toast.error("Mobile number must be 10 digit long!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (email === "") {
      return toast.error("Email is required", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (!email.includes('@')) {
      return toast.error("Invalid email!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    if (password === "") {
      return toast.error("Password is required!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (password.length < 8 || password.length > 15) {
      return toast.error("Password length must contain 8-15 characters!", {
        position: toast.POSITION.TOP_CENTER,
      });

    }
    if (checkUppercase(password) === false) {
      return toast.error("Password must contain atleast one uppercase character!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (checkSpecialChar(password) === false) {
      return toast.error("Password must contain atleast one special character!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    //signup code
    const payload = {
      fname: fname,
      lname: lname,
      mobile: mobile,
      email: email,
      password: password
    }

    resetForm();

    dispatch(signup(payload))
  }

  //if user is already logged in then redirect the user to home page
  if (auth.authenticate) {
    return <Navigate to={`/`} />;
}
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 d-none d-md-block">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid" alt="Computer image" />
        </div>
        <div className="col-md-6">
          <form name="SignupForm" action="">
            <h3 className="text-center font-weight-bold">Registration</h3>
            <p className="text-center">Take your art to the next level.</p>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <label htmlFor="fname"> First Name </label>
                <input type="text" id="fname" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} />

              </div>
              <div>
                <label htmlFor="lname">Last Name </label>
                <input type="text" id="lname" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} />

              </div>
            </div>

            <label htmlFor="mobile">Mobile Number </label>
            <input type="text" id="mobile" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />

            <label htmlFor="email">Email </label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password </label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <input type="submit" defaultValue="Submit" onClick={signupFun} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup