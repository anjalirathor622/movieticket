import React from 'react' 
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout() {
    //2.1

    //2.2
    
    //2.3
    return (
        <>
            {/* <div className="preloader">
                <div className="preloader-inner">
                <div className="preloader-icon">
                    <span />
                    <span />
                </div>
                </div>
            </div>
            
            <div className="overlay" /> */}
            
            <Link to="#0" className="scrollToTop">
                <i className="fas fa-angle-up" />
            </Link>
           
           <Header />

            <Outlet />

            <Footer />
        </>
    )
}
