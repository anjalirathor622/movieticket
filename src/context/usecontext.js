import { useContext } from 'react'
import { MovieContext } from '../App';

export const UseContextFunc = ()=>{
    const initialMovies = useContext(MovieContext);
  return initialMovies
}
