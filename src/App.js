import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MovieGrid from './pages/MovieGrid';
import MovieDetails from './pages/MovieDetails';
import MovieTicketPlan from './pages/MovieTicketPlan';
import MovieSeatPlan from './pages/MovieSeatPlan';
import MovieCheckout from './pages/MovieCheckout';
import Popcorn from './pages/Popcorn';
import { MovieList } from './pages/MovieList';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

export const initialState = {
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
}
//useContext
export const MovieContext = createContext();
function App() {
  //2.1
 
  //2.2

  //2.3
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieContext.Provider value={initialState}><Layout /></MovieContext.Provider>}>
          <Route index element={<Home/>}></Route>
          <Route path="/movie-grid" element={<MovieGrid />}></Route>
          <Route path="/movie-details" element={<MovieDetails />}></Route>
          <Route path="/movie-ticket-plan" element={<MovieTicketPlan />}></Route>
          <Route path="/movie-seat-plan" element={<MovieSeatPlan />}></Route>
          <Route path="/movie-checkout" element={<MovieCheckout />}></Route>
          <Route path="/popcorn" element={<Popcorn />}></Route>
          <Route path="/movie-list" element={<MovieList />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>

        <Route path="*" element={<NoPage/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
