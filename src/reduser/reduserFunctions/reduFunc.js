//import { initialState } from "../../pages/Home";

//import { useContext } from "react";
//import { MovieContext } from "../../App";

//import { UseContextFunc } from "../../context/usecontext";

export const reduserFunction = (oldState , action)=>{
    //const movies = useContext(MovieContext);
    //oldState = movies;
    console.log('oldstate===>',oldState);
    
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