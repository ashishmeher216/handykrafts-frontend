import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './containers/Signup';
import Signin from './containers/Signin';
import Layout from './components/Layout';
import Home from './containers/Home';
import ContactUs from './containers/ContactUs';
import ProductForm from './containers/Admin/ProductForm';
import AboutUs from './containers/AboutUs'
import ProductAll from './containers/ProductAll';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
          <Route path = '/products/create' element={<ProductForm />}></Route>
          <Route path ='/allproducts' element={<ProductAll/>}></Route>
          {/* <Route path='/changepassword' element={<ChangePasswordForm />}></Route> */}
          {/* <Route path='/home' element={<Home itemsList={itemsListState} updateItems={handleAdd} />}></Route>
        <Route path='/cart' element={<Cart updatedList={updatedListState} remove={handleRemove} increment={incrementHandle} decrement={decrementHandle} totalPriceProp={totalPrice} />}></Route> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
