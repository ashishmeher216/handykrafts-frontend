import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/logo.png'
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from "react-toastify";
import axios from '../helpers/axios';
function Header(props) {
  const {loggedIn,email,signoutRequest}=props;
  console.log("Header...");
  console.log(props)

  const signoutFun = () => {
    const payload = {
      email: email
    }

    signoutRequest(payload);
  }
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <img className='logo-img' src={image} alt="Brand Logo" style={{ backgroundColor: 'white', marginRight: "20px" }} />
        {/* Brand */}
        <Link to='/'>
          <a className="navbar-brand" href="">
            HandyKrafts
          </a>
        </Link>
        {/* Toggler/collapsible Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {/* <Link to='/categories'>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
            </Link> */}
            <Link to='/aboutus'>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
            </Link>
            <Link to='/contactus'>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </Link>
          </ul>
        </div>
        {
          loggedIn ?
            <button className="btn btn-info btn-sm m-1" onClick={signoutFun}>Logout</button>
            :
            <>
              <Link to='/signin'>
                <button className="btn btn-warning btn-sm">Sign In</button>
              </Link>
              <Link to='/signup'>
                <button className="btn btn-info btn-sm m-1">Sign Up</button>
              </Link>
            </>
        }
        <Link to='/cart'>
          <h4 style={{ color: 'white' }}> <FaShoppingCart /> </h4>
        </Link>

      </nav>

    </>
  )
}

export default Header