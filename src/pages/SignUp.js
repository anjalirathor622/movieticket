//import area
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { selectUserInfo } from '../features/auth/authSlice';

//defination area
function SignUp() {
    //hooks area
    const [payload,setPayload] = useState({
                                            "username": null,
                                            "email": null,
                                            "password": null
                                        })
    let userInfo = useSelector(selectUserInfo);

    //defination
    let submitData = ()=>{
        //alert('okokok')
    }
    let handleChange = (e)=>{
        //alert('okokok')
        console.log('e.target.name====>',e.target.name)
        console.log('e.target.value====>',e.target.value)
        setPayload({
                    ...payload,
                    [e.target.name]:e.target.value
                })
    }


    //return 
    return (
        <>
            {console.log('user info----->',userInfo.userInfo.username)}
            {console.log('payload===>',payload)}
            <section className="account-section bg_img" data-background="assets/images/account/account-bg.jpg">
                <div className="container">
                    <div className="padding-top padding-bottom">
                    <div className="account-area">
                        <div className="section-header-3">
                        <span className="cate">welcome</span>
                        <h2 className="title">to Boleto </h2>
                        </div>
                        <form className="account-form">
                        <div className="form-group">
                            <label htmlFor="username">Username<span>*</span></label>
                            <input type="text" name="username" placeholder="Enter Your username" id="username" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email1">Email<span>*</span></label>
                            <input type="text" name="email" placeholder="Enter Your Email" id="email1" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass1">Password<span>*</span></label>
                            <input type="password" name="password" placeholder="Password" id="pass1" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass2">Confirm Password<span>*</span></label>
                            <input type="password" name="cpassword" placeholder="Password" id="pass2" required onChange={handleChange} />
                        </div>
                        <div className="form-group checkgroup">
                            <input type="checkbox" id="bal" required defaultChecked />
                            <label htmlFor="bal">I agree to the <Link to="#0">Terms, Privacy Policy</Link> and <Link to="#0">Fees</Link></label>
                        </div>
                        <div className="form-group text-center">
                            <input type="button" className='bg-primary' defaultValue="Sign Up" onClick={submitData()} />
                        </div>
                        </form>
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