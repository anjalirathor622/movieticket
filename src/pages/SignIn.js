import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function SignIn() {
    //hooks area
    const {email,pass} = useParams()

    //return
    return (
        <>
            <section className="account-section bg_img" data-background="assets/images/account/account-bg.jpg">
                <div className="container">
                    <div className="padding-top padding-bottom">
                    <div className="account-area">
                        <div className="section-header-3">
                        <span className="cate">hello</span>
                        <h2 className="title">welcome back</h2>
                        </div>
                        <form className="account-form">
                        <div className="form-group">
                            <label htmlFor="email2">Email<span>*</span></label>
                            <input type="text" value = {email} placeholder="Enter Your Email" id="email2" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass3">Password<span>*</span></label>
                            <input type="password" value = {pass} placeholder="Password" id="pass3" required />
                        </div>
                        <div className="form-group checkgroup">
                            <input type="checkbox" id="bal2" required defaultChecked />
                            <label htmlFor="bal2">remember password</label>
                            <Link to="#0" className="forget-pass">Forget Password</Link>
                        </div>
                        <div className="form-group text-center">
                            <input type="submit" defaultValue="log in" />
                        </div>
                        </form>
                        <div className="option">
                        Don't have an account? <Link to="/sign-up">sign up now</Link>
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
