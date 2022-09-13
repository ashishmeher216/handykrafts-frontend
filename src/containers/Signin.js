import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

function startsWithCapital(word) {
    return word.charAt(0) === word.charAt(0).toUpperCase()
}
function checkIfStringHasSpecialChar(_string) {
    let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (spChars.test(_string)) {
        return true;
    } else {
        return false;
    }
}
function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailMessage,setEmailMessage] = useState("")
    const [passwordMessage,setPasswordMessage] = useState("")

    const login = (e) =>{
        e.preventDefault();
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
        if(password === "") {
            return toast.error("Password is required", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
        ///login here
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid" alt="Sample image" />
                </div>
                <div className="col-md-6">
                    <form name="Signin">
                        <h3 className="text-center font-weight-bold">Sign In</h3>
                        <p className="text-center">Take your art to the next level.</p>
                        <label htmlFor="email"> Email </label>
                        <input className='inputField' type="text" id="email" name="email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <span>{emailMessage}</span>

                        <label htmlFor="password">Password </label>
                        <input className='inputField' type="text" id="password" name="password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <span>{passwordMessage}</span>

                        <Link to='/changepassword'>
                            <p style={{ color: 'green' }}>Change Password</p>
                        </Link>
                        <input type="submit" defaultValue="Submit" onClick={login}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin