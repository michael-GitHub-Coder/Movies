import React from 'react'
import { useState,useEffect } from "react"
import { useLoaderData, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';


const ViewMovies = () => {

    const {id} = useParams();
    const loaded = useLoaderData();
    const navigate = useNavigate();

    const  onDelete = async (e,idc) =>{
        const res = await fetch(`http://localhost:5000/Movies/${idc}`,{
            method: 'DELETE',
        });

        e.preventDefault();
        const confirm = window.confirm("Are you sure you want to delete this file?");
        navigate("/movies")

    }

  return (
   <>
    {loaded.map( data => (data.id == id ? 
        <NavBar title={data.name}/> 
        : null  ))
    }
    <div key={id} className="flex grid grid-cols-2 jstify-center justify-items-center mx-48 my-24">
        {loaded.map( data => (
            data.id == id ? 
            <>
            
            <div className="max-w-xs rounded overflow-hidden shadow-xl"><img src={data.image} className='h-full w-full '/></div>
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
                    <button onClick={(e) =>{onDelete(e,data.id)}} button className="text-white mr-12 pl-4 pr-4 p-2 bg-indigo-500 rounded-full">DELETE</button>
                </div>
            </div>
            </>
            :null
         ))}
        
    </div>
   
   </>
  )
  
}

export   default ViewMovies