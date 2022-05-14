import { useContext, useState } from "react";
import { UserContext } from "../context/apiMovies";
import NaturalList from "./NaturalList";
import DisplayMovies from "./DisplayMovies";

const SelectMovie = () => {
    const { movies, genres, favList } = useContext(UserContext);
    console.log("Theo", movies)
    
    return (
        <>
        
        <NaturalList />
        <DisplayMovies />       
        
        </>
    )
}

export default SelectMovie