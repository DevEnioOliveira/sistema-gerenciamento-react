import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import Nav from '../components/template/nav'
import Logo from '../components/template/logo'
import Footer from '../components/template/footer'


export default(props) => {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
        
    )
}