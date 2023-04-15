import AboutUs from "../../src/pages/AboutUs";
import Contact from "../../src/pages/Contact";
import Home from "../../src/pages/Home";
import MovieCheckout from "../../src/pages/MovieCheckout";
import MovieDetails from "../../src/pages/MovieDetails";
import MovieGrid from "../../src/pages/MovieGrid";
import { MovieList } from "../../src/pages/MovieList";
import MovieSeatPlan from "../../src/pages/MovieSeatPlan";
import MovieTicketPlan from "../../src/pages/MovieTicketPlan";
import NoPage from "../../src/pages/NoPage";
import Popcorn from "../../src/pages/Popcorn";
import SignIn from "../../src/pages/SignIn";
import SignUp from "../../src/pages/SignUp";

const userRoutes = [
    { path:"/", element:<Home/> },
    { path:"/movie-grid", element:<MovieGrid/> },
    { path:"/movie-details", element:<MovieDetails/> },
    { path:"/movie-ticket-plan", element:<MovieTicketPlan/> },
    { path:"/movie-seat-plan", element:<MovieSeatPlan/> },
    { path:"/movie-checkout", element:<MovieCheckout/> },
    { path:"/movie-list", element:<MovieList/> },
    { path:"/popcorn", element:<Popcorn/> },
    { path:"/about", element:<AboutUs/> },
    { path:"/contact", element:<Contact/> }
]

const authRoutes = [
    { path:"/sign-in", element:<SignIn/> },
    { path:"/sign-up", element:<SignUp/> },
    { path:"/*", element:<NoPage/> }
]

export {userRoutes,authRoutes}