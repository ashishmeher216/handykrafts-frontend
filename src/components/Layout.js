import React from 'react'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <>
            <Header loggedIn={props.loggedIn} email={props.email} signoutRequest={props.signoutRequest} />
            {props.children}
            <Footer />

            <ToastContainer autoClose={2000} />
        </>
    )
}

export default Layout