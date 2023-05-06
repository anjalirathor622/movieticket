import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';
import { selectUserInfo, signUpAsync } from './authSlice';
import Spinner from '../../components/Spinner';


export default function Auth() {
    //2.1 hooks area
    //const [loading,setLoading] = useState(false)
    const [payload,setPayload] = useState({
        "username": null,
        "email": null,
        "password": null
    })
    const userInfo = useSelector(selectUserInfo);
    const dispatch = useDispatch();

    const navigate = useNavigate()

    useEffect(()=>{
        if(userInfo.success === true) {
            swal("Hurreeeyyy !", "User Regestered successfully!", "success")
            setTimeout(()=>{
                navigate(`/sign-in/${payload.email}/${payload.password}`)
                
            },3000)
        }
        if(userInfo.error === true) {
            swal("Opppps !", "User Already Exist !!", "error")
        }
    },[userInfo])

//defination
let handleChange = (e)=>{
    //alert('okokok')
    //console.log('e.target.name====>',e.target.name)
    console.log('e.target.value====>',e.target.value)
    setPayload({
    ...payload,
    [e.target.name]:e.target.value
    })
}
let submitData = ()=>{
    //alert('okokok')
    console.log('to be submitted====>',payload);

    if(payload.password === payload.cpassword){
        delete payload.cpassword;
        console.log('ready to submitted====>',payload)

        dispatch(signUpAsync(payload))
        
    }else{
        swal("Try Again!", "password & confirm password doesn't match!!!", "error");
        //alert("password & confirm password doesn't match")
    }
}
//return statement
    return (
        <>
            {console.log('user info----->',userInfo)}
            {console.log('payload===>',payload)}
            {console.log('loader----->',userInfo.loading)}
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
                    <button type="button" className='bg-transparent text-white border-bottom rounded' onClick={submitData}>{userInfo.loading?<Spinner/>:'SignUp'} </button>
                </div>
            </form>
        </>
    )
}
