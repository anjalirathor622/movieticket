import axios from "axios"
import { URL } from "../../helper/helper"

export const fetchSignUp = (payload)=>{

    // returning a class 
    // let obj = new classname()
    // return new classname()
    return new Promise((resolve, reject)=>{
        //call the api
        axios.post(`${URL}/api/auth/local/register`,payload)
        .then((res)=>{
            console.log('api respons---->',res);
            resolve(res);
        })
        .catch((err)=>{
            console.log('err',err);
            reject(err);
        });
    })
}