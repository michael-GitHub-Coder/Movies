import React from 'react'
import { useState,useEffect } from "react"
import { useParams, useLoaderData} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import testP from '../Images/1c.png'
import NavBar from './NavBar';


const ViewSeries = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const loaded = useLoaderData();

    const  onDelete = async (e,idc) =>{
        const res = await fetch(`http://localhost:5000/Movies/${idc}`,{
            method: 'DELETE',
        });

        e.preventDefault();
        const confirm = window.confirm("Are you sure you want to delete this file?");
        navigate("/series")
    }

  return (
    <>
    {loaded.map( data => (data.id == id ? 
        <NavBar title={data.name}/> 
        : null ))
    }
    
    <div className="flex grid grid-cols-2 jstify-center justify-items-center mx-48 my-24">
        {loaded.map( data => (
            data.id == id ? 
            <>
            <div className=" max-w-xs rounded overflow-hidden shadow-lg"><img src={data.image} className='h-full w-ful'/></div>
                <div className="w-5/6 px-6 rounded overflow-hidden ">
                <div className=" font-bold text-xl">{data.name}</div>
                <p className="py-10 ">{data.description}</p>
                <div className="font-bold text-md">
                    <div>Country : {data.country}</div>
                    <div>Genre : {data.genre}</div>
                    <div>Year : {data.startDate.substring(0,4)}</div>
                    <div>Type : {data.type}</div>
                </div>
                <div className="mt-8 py-2">
                    <Link to={`/Edit/${data.id}`}><button className="text-white mr-12 pl-4 pr-4 p-2 bg-indigo-500 rounded-full">EDIT</button></Link>
                    <button onClick={(e) => {onDelete(e,data.id)}} className="text-white mr-12 pl-4 pr-4 p-2 bg-indigo-500 rounded-full">DELETE</button>
                </div>
            </div>
            </>
            :null
        ))}
        
    </div>
    </>
   
  )
}

const load = async () => {
    const res = await fetch('http://localhost:5000/Movies');
    const data = await res.json();
    return data;
}
export {ViewSeries as default, load} 