import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "./NavBar";
import {useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edit = () => {

  const navigate = useNavigate();
  const {id} = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [image, setImage] = useState(null);
 
  const setStates = (name1, description1, country1, type1, startDate1, image1) => {
        setName(name1);
        setDescription(description1);
        setCountry(country1);
        setType(type1);
        setStartDate(startDate1);
        setImage(image1);
        
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/Movies?");
        const data = await response.json();
        console.log(data)

        data.map( data => {
          data.id == id ? 
            setStates(data.name,data.description,data.country,data.type,data.startDate,data.image)
          : null
        })

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    
 
  }, []);

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
         setUploadImage(reader.result);
         setImage(reader.result);   
      };

      reader.readAsDataURL(file);
      
   }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
   
    const newData = {
      id: Math.floor(Math.random() * 1000000) + 1,
      name,
      description,
      country,
      startDate,
      type,
      image,
   }


    try {
      const response = await fetch(`http://localhost:5000/Movies/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

    
      
      if (response.ok) {
        alert("Movie/Series updated successfully!");
        setName("");
        setCountry("");
        setDescription("");
        setImage(null);
      } else {
        alert("Failed to update Movie/Series.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };


  return (
    <div>
      <NavBar />
      {

      }
      <form
        onSubmit={handleSubmit}
        className="flex grid grid-cols-2 justify-center justify-items-center mx-48 my-24"
      >
        <div className="w-1/2 h-5/6 overflow-hidden shadow-lg bg-gray-300">
          <div className="flex justify-center font-bold text-sm ml-24 mt-52">
            <input type="file" name="image" onChange={handleFileChange} />
            {
              image && (<img src={image}  alt='Upload Movie Poster' className='w-full h-full object-cover'></img>)
            }
          </div>
        </div>
        <div className="w-4/5 px-6 rounded overflow-hidden">
          <div className="text-md py-2">
            <label htmlFor="name">Movie/Series Name</label>
            <div className="mt-2">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder={name}
                className="border-2 border-gray-300 p-2 rounded w-full"
              />
            </div>
          </div>

          <div className="text-md py-2">
            <label htmlFor="description">Description</label>
            <div className="mt-2">
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder={description}
                className="border-2 border-gray-300 p-2 pb-12 rounded w-full"
              />
            </div>
          </div>

          <div className="text-md py-2">
            <label htmlFor="country">Country</label>
            <div className="mt-2">
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="border-2 border-gray-300 p-2 rounded w-full"
              >
                <option value="">{country}</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
              </select>
            </div>
          </div>

          <div className="text-md py-2">
            <label htmlFor="year">Year</label>
            <div className="mt-2">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy/MM/dd"
                className="border-2 border-gray-300 p-2 rounded w-full"
              />
            </div>
          </div>

          <div className="mt-2 py-2">
            <label>
              <input
                type="radio"
                name="type"
                value="Movie"
                checked={type === "Movie"}
                onChange={(e) => setType(e.target.value)}
                className="mr-2"
              />
              Movie
            </label>
            <label className="ml-14">
              <input
                type="radio"
                name="type"
                value="Series"
                checked={type === "Series"}
                onChange={(e) => setType(e.target.value)}
                className="mr-2"
              />
              Series
            </label>
          </div>

          <div className="mt-2 py-2">
            <button
              type="submit"
              className="text-white border-2 bg-indigo-500 p-2 rounded-full w-full"
            >
              SAVE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;
