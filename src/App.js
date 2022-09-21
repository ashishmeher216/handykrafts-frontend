import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { toast } from "react-toastify";
import axios from './helpers/axios';
import Signup from './containers/Signup';
import Signin from './containers/Signin';
import Home from './containers/Home';
import ContactUs from './containers/ContactUs';
import ProductForm from './containers/Admin/ProductForm';
import AboutUs from './containers/AboutUs'
import ProductAll from './containers/ProductAll';
import ProductsForEachCategories from './containers/ProductsForEachCategories';
import Layout from './components/Layout';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  const signinRequest = (user) => {
    axios.post("/user/signin", user)
      .then((response) => {
        // console.log(response.data);
        const { payload, message } = response.data;
        setLoggedIn(payload.loggedIn);
        setEmail(payload.email);
        toast.success(`${message}`, {
          position: toast.POSITION.TOP_CENTER
        });
      })
      .catch((error) => {
        // console.log(error)
        toast.error(`${error.response.data.message}`, {
          position: toast.POSITION.TOP_CENTER
        });
      });
  }

  const signoutRequest = (payload) => {
    axios
      .post("/user/signout", payload)
      .then((response) => {
        setLoggedIn(false);
        setEmail("");
        const { message } = response.data;
        toast.success(`${message}`, {
          position: toast.POSITION.TOP_CENTER
        });
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`, {
          position: toast.POSITION.TOP_CENTER
        });
      });
  }
  return (
    <BrowserRouter>
      <Layout loggedIn={loggedIn} email={email} signoutRequest={signoutRequest}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signin' element={<Signin signinRequest={signinRequest} />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/aboutus' element={<AboutUs />}></Route>
          <Route path='/products/create' element={<ProductForm />}></Route>
          <Route path='/allproducts' element={<ProductAll />}></Route>
          <Route path='/categories/:id' element={<ProductsForEachCategories />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
