import React from 'react'
import data from "../data.json";
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const SeriesPage = () => {
    const [Series, setSeries] = useState([]); 
    //  const [loading, setLoading] = useState(true);
    
     useEffect(() => {
        const fetchMovies = async () =>{
           try{
            const res = await fetch('http://localhost:5000/Movies?type=Series');
            const data = await res.json();
            setSeries(data);
           }catch(error){
             console.log('Error fetching data ', error)
           } 
        }
        fetchMovies();
     }, [])
   
    return(
        
        <div className="flex justify-center flex-wrap gap-4 mx-80 my-1">  
        <Link to="/AddMS"><button className="bg-indigo-400 text-white rounded-full px-6 py-2 ml-[60rem] mt-9 my-14">ADD</button></Link>
            <div className="flex grid grid-cols-4 gap-2">
                {
                    Series && Series.map(data => {
                        return (
                        data.type == "Series" ? <img src={data.image} key={data.id} className="w-44 h-68" /> : " "
                        )
                    })
                } 
            </div>
        </div> 

        
    )
}

export default SeriesPage