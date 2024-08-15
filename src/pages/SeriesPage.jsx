import React from 'react'
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar';

const SeriesPage = () => {

    const navigate = useNavigate();

    const viewSeries = (id) => {
        navigate(`/viewSeries/${id}`);
    }

    const [Series, setSeries] = useState([]); 
    //  const [loading, setLoading] = useState(true);
    const {id} = useParams();

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
        
        <>
            <NavBar title="LATEST SERIES"/>
            <div className="flex justify-center flex-wrap gap-4 mx-80 my-1">  
            <Link to="/AddMS"><button className="bg-indigo-400 text-white rounded-full px-6 py-2 ml-[60rem] mt-9 my-14">ADD</button></Link>
                <div className="flex grid grid-cols-4 gap-6">
                    { 
                        Series && Series.map(data => {
                            return (
                            // data.type == "Series" ? <img src={data.image} key={data.id} className="w-44 h-68" /> : " "
                            <Link key={data.id} onClick={(e) => {e.preventDefault(); viewSeries(data.id)}} ><img src={data.image}  className="w-44 h-64 max-w-xs overflow-hidden shadow-lg hover:transform hover:translate-x-4 hover:translate-y-2 transition-transform duration-300"/></Link>
                            )
                        })
                    } 
                </div>
            </div> 
        </>

    )
}

export default SeriesPage