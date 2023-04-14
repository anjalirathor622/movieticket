//import { initialState } from "../../pages/Home";
import { initialState } from "../../App";

export const reduserFunction = (oldState = initialState, action)=>{
    //console.log(oldState);
    
    //let newState =  oldState;
    switch(action.type){
        case 'REMOVE':
            //console.log('hello') 
            return{
                ...oldState,
                movies:[...oldState.movies.filter((cv1,idx1,arr1)=>{
                    return (cv1.name !== action.mname)
                })]
            }
            
        case  'ADD':
            //console.log('hiii')
            return oldState;
            
        default:
            return oldState;
        } 
    
    //return oldState;
}
//reduserFunction()