import React from 'react'
import { useState,useEffect } from "react"
import { useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import testP from '../Images/1c.png'

const ViewSeries = () => {

    const {id} = useParams();

    const [series, setSeries] = useState([]);

    useEffect(() =>{
        const fetchMovie = async () => {
            try{
                const res = await fetch('http://localhost:5000/Movies?type=Movie');
                const data = await res.json();
                setSeries(data);

            }catch (error){
                console.log("Error fetching data" + error);
            }
        }

        fetchMovie();

    },[])

  return (

    <div className="flex grid grid-cols-2 jstify-center justify-items-center mx-48 my-24">
        {series.map(series =>{
            series.id == id ? 
            <>
             <div className=" max-w-xs rounded overflow-hidden shadow-lg"><img src={testP}  /></div>
                <div className="w-5/6 px-6 rounded overflow-hidden ">
                <div className=" font-bold text-xl">{series.name}</div>
                <p className="py-10 ">{series.description}</p>
                <div className="font-bold text-md">
                    <div>Country : {series.country}</div>
                    <div>Genre : {series.genre}</div>
                    <div>Year : {series.year}</div>
                    <div>Type : {series.type}</div>
                </div>
                <div className="mt-8 py-2">
                    <button className="text-white mr-12 pl-4 pr-4 p-2 bg-indigo-500 rounded-full">EDIT</button>
                    <button button className="text-white mr-12 pl-4 pr-4 p-2 bg-indigo-500 rounded-full">DELETE</button>
                </div>
            </div>
            </>
            :null
        })}
       
    </div>
  )
}

export default ViewSeries