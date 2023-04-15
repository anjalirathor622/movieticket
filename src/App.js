import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import { authRoutes, userRoutes } from './myRoutes/allRoutes';
import './App.css';
import {URL} from './helper/helper';


//useContext
export const MovieContext = createContext();
function App() {
  //2.1
  const [initialState,setInitialState] = useState({
                                                    movies: [],
                                                    cart:[]
                                                  })
 
  //2.2
  useEffect(() => {
    axios.get(`${URL}/api/movies?populate=*`)
    .then( (res)=> {
      // handle success
      console.log("api_res---->",res.data.data);
      setInitialState({
        ...initialState,
        movies: [...res.data.data.map((cv,idx)=>{
          return {
            name: cv?.attributes?.name,
            image: URL+cv?.attributes?.image_thumb?.data?.attributes?.url
          }
        })
      ]
    })
  })
  .catch( (error)=> {
    // handle error
    console.log(error);
  })
  .finally( ()=> {
    // always executed
  });
},[])



//2.3
return (
  <MovieContext.Provider value={initialState}>
      {console.log('initialState====>',initialState)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {
              userRoutes && userRoutes.map((cv,idx)=>{
                return <Route key={idx} path={cv.path} element={cv.element}></Route>
              })
            }
          </Route>
          {
              authRoutes && authRoutes.map((cv,idx)=>{
                return <Route key={idx} path={cv.path} element={cv.element}></Route>
              })
            }
        </Routes>  
      </BrowserRouter>
    </MovieContext.Provider>
  );
}

export default App;
