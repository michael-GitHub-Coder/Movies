import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const Movies = () => {

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


    const moviesdata = movies && movies.map(datan => {
        return (
            <Link key={datan.id} onClick={(e) => {e.preventDefault(); viewMovies(datan.id)}} ><img src={datan.image}  className="w-44 h-68"/></Link>
        )
    });
    const newMoviesData = moviesdata.filter(moviesdata => moviesdata !== undefined && moviesdata !=="");


    return (
        <div>
            <h1 className="my-24 flex justify-center">LATEST MOVIES</h1>
            <div className="flex sm:grid grid-cols-4 gap-2 justify-center flex-wrap gap-4 mx-80">
                {newMoviesData.slice(0,8)}
            </div>
            <Link to="/movies"><button  className="bg-indigo-400 text-white rounded-full px-6 py-2 ml-[64rem] mt-9">More</button></Link>
        </div>
    )
}
export default Movies;