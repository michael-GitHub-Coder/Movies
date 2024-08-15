import React from 'react'
import data from "../data.json";
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';


const MoviesPage = () => {

    const d = "New%Movie";
    const navigate = useNavigate();

    const viewMovies = (id) => {
        navigate(`/viewMovies/${id}`);
    }

    const [movies, setMovies] = useState([]); 
    //  const [loading, setLoading] = useState(true);
    
     useEffect(() => {
        const fetchMovies = async () =>{
           try{
            const res = await fetch('http://localhost:5000/Movies?type=Movie');
            const data = await res.json();
            setMovies(data);
           }catch(error){
             console.log('Error fetching data ', error)
           } 
        }
        fetchMovies();
     }, [])
     
    return(
        <>
        <NavBar title="LATEST MOVIES"/>
        <div className="flex justify-center flex-wrap gap-4 mx-80 my-1">  
        <Link to="/AddMS"><button className="bg-indigo-400 text-white rounded-full px-6 py-2 ml-[60rem] mt-9 my-14">ADD</button></Link>
           <div className="flex grid grid-cols-4 gap-6">
            { 
                    movies && movies.map(data => {
                        return (
                        // data.type == "Movie" ? <img src={data.image} key={data.id} className="w-44 h-68" /> : ""
                        <Link key={data.id} onClick={(e) => {e.preventDefault(); viewMovies(data.id)}} ><img src={data.image}  className="w-44 h-64 max-w-xs overflow-hidden shadow-lg"/></Link>
                        )
                    })
                }
           </div>
        </div>
        </>
    )
}

export default MoviesPage