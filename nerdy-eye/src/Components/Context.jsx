import React, { createContext, useState, useEffect } from 'react'
import Addfavourites from './Addfavourites';
import RemoveFav from './RemoveFav';

export const Context = createContext();



const MovieApp = ({ children }) => {
    const [movies, setMovies] = useState([])
    const [favourites, setFavourites] = useState([])
    const [searchValue, setSearchValue] = useState("")

    const getMoviesRequest = async (searchValue) => {
        const link = `http://www.omdbapi.com/?s=${searchValue}&apikey=7d62aafb`;

        const response = await fetch(link);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    }

    useEffect(() => {
        getMoviesRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app'));
        setFavourites(movieFavourites)
    }, [])

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app', JSON.stringify(items))
    }

    const addfavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    }

    const removefavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID);

        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);

        console.log("removed")
    }

    return (
        <Context.Provider
            value={{
                movies,
                setMovies,
                favourites,
                setFavourites,
                setSearchValue,
                searchValue,
                addfavouriteMovie,
                removefavouriteMovie,
                Addfavourites,
                RemoveFav
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default MovieApp