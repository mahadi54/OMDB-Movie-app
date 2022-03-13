import {useEffect, useState} from 'react';
import './App.css'
import MovieCard from './MovieCard';
import searchIcon from './search.svg'


const API_KEY = 'https://www.omdbapi.com?apikey=1285aed1';
    


const App = ()=>{
    const [searchTerm, setsearchTerm] = useState([])
    const [movies, setMovies] = useState([]);

    const searchMovies = async(title)=>{
        const response = await fetch(`${API_KEY}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }

    useEffect(()=>{
        searchMovies('spiderman');

    }, []);
    return(
       
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input placeholder='Search for movies' value={searchTerm} onChange={(e)=> setsearchTerm(e.target.value)}/>
                <img src={searchIcon} alt='Search'onClick={()=> searchMovies(searchTerm)} />

            </div>
            {
                movies?.length > 0 ? 
                (
                    <div className='container'>
                    {
                        movies.map((movie)=>(
                            <MovieCard movie = {movie} />
                        ))
                    }

                    </div>
                ) :
                (
                    <div className='empty'>
                        <h2>No movies found</h2>

                    </div>
                )
            }
            
        </div>

    )
}
export default App;