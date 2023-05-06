//import area
import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../features/auth/Auth';


//defination area
function SignUp() {
    //hooks area


    //return 
    return (
        <>
            <section className="account-section bg_img" data-background="assets/images/account/account-bg.jpg">
                <div className="container">
                    <div className="padding-top padding-bottom">
                    <div className="account-area">
                        <div className="section-header-3">
                        <span className="cate">welcome</span>
                        <h2 className="title">to <Link to="/">Boleto</Link> </h2>
                        </div>
                        < Auth />
                        <div className="option">
                        Already have an account? <Link to="/sign-in">Login</Link>
                        </div>
                        <div className="or"><span>Or</span></div>
                        <ul className="social-icons">
                        <li>
                            <Link to="#0">
                            <i className="fab fa-facebook-f" />
                            </Link>
                        </li>
                        <li>
                            <Link to="#0" className="active">
                            <i className="fab fa-twitter" />
                            </Link>
                        </li>
                        <li>
                            <Link to="#0">
                            <i className="fab fa-google" />
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

//export area
export default SignUp;