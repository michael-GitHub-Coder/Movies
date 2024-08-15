import React from 'react'
import { useState,useEffect } from "react"
import { useLoaderData, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const ViewMovies = () => {

    const {id} = useParams();
    const loaded = useLoaderData();
    // const [movie,setMovie] = useState([]);
  
    // useEffect(() =>{
    //     const fetchMovie = async () => {
    //         try{
    //             const res = await fetch('http://localhost:5000/Movies?type=Movie');
    //             const data = await res.json();
    //             setMovie(data);

    //         }catch (error){
    //             console.log("Error fetching data" + error);
    //         }
    //     }
    //     fetchMovie();

    // },[])
  const deleteF = async () =>{
    const res = await fetch(`http://localhost:5000/Movies?type=Movie/${id}`,{
            method: 'DELETE',
  });
 }

 const  onDelete = (e,id) =>{
    e.preventDefault();
    const confirm = window.confirm("Are you sure you want to delete this file?");
    if(!confirm){deleteF(id);}else{alert("File not deleted")}
  
 }

  return (
   <>
    {loaded.map( data => (data.id == id ? 
        <NavBar title={data.name}/> 
        : null ))
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
                    <div>Year : {data.year}</div>
                    <div>Type : {data.type}</div>
                </div>
                <div className="mt-8 py-2">
                    <Link to={`/Edit/${data.id}`}><button className="text-white mr-12 pl-4 pr-4 p-2 bg-indigo-500 rounded-full">EDIT</button></Link>
                    <button onClick={(e) =>{() =>{onDelete(e,data.id)}}} button className="text-white mr-12 pl-4 pr-4 p-2 bg-indigo-500 rounded-full">DELETE</button>
                </div>
            </div>
            </>
            :null
         ))}
        
    </div>
   </>
  )
  
}

// const loadM = async () =>{
//     const res = fetch('http://localhost:5000/Movies?type=Movie');
//     const data = await res.json();
//     return data;
// }
export   default ViewMovies