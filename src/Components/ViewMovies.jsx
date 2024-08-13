import React from 'react'
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import testP from '../Images/1c.png'

const ViewMovies = () => {

    const {id} = useParams();

    const [movies, setMovie] = useState(null);

    useEffect(() =>{
        const fetchMovie = async () => {
            try{
                const res = await fetch('http://localhost:5000/Movies?type=Movie');
                const data = await res.json();
                setMovie(data);

            }catch (error){
                console.log("Error fetching data" + error);
            }
        }

        fetchMovie();

    },[])

  return (

    <div className="flex grid grid-cols-2 jstify-center justify-items-center mx-48 my-24">
        <div className=" max-w-xs rounded overflow-hidden shadow-lg"><img src={testP} /></div>
        <div className="w-5/6 px-6 rounded overflow-hidden ">
            <div className=" font-bold text-xl">Movie Name</div>
            <p className="py-10 ">jfbehfbrhfbrjrjgnrejnjf</p>
            <div className="font-bold text-md">
                <div>Country : </div>
                <div>Genre : </div>
                <div>Year : </div>
                <div>Type : </div>
            </div>
        </div>
    </div>
  )
}

export default ViewMovies