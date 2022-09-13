import React from 'react'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
            
            <ToastContainer autoClose={2000} />
        </>
    )
}

export default Layout