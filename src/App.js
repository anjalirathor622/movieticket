import { createContext, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import { authRoutes, userRoutes } from './myRoutes/allRoutes';
import './App.css';
import {URL} from './helper/helper';


//useContext
export const MovieContext = createContext();
function App() {
  
  const [initialState,setInitialState] = useState({
                                                    movies: [
                                                              {
                                                                  name:'Alone2',
                                                                  image:'http://pixner.net/boleto/demo/assets/images/movie/movie01.jpg'
                                                              },
                                                              {
                                                                  name:'Mars2',
                                                                  image:'http://pixner.net/boleto/demo/assets/images/movie/movie02.jpg'
                                                              },
                                                              {
                                                                  name:'Venus2',
                                                                  image:'http://pixner.net/boleto/demo/assets/images/movie/movie03.jpg'
                                                              }
                                                            ],
                                                    cart:[]
                                                  })
  //2.1
 
  //2.2
  axios.get(`${URL}/api/movies?populate=*`)
    .then( (res)=> {
    // handle success
    console.log("api_res---->",res.data.data);
    //console.log('movieData====>',movieData)
    })
    .catch( (error)=> {
    // handle error
    console.log(error);
    })
    .finally( ()=> {
    // always executed
    });

  //2.3
  return (
    <MovieContext.Provider value={initialState}>
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
