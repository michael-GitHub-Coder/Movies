import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "./NavBar";
import { useLoaderData } from "react-router-dom";

const Edit = () => {


  const Editdata = useLoaderData();
  const [name, setName] = useState(Editdata.name);
  const [description, setDescription] = useState(Editdata.description);
  const [country, setCountry] = useState(Editdata.country);
  const [type, setType] = useState(Editdata.type);
  const [startDate, setStartDate] = useState(new Date());
  const [image, setImage] = useState(Editdata.image);

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("country", country);
    formData.append("type", type);
    formData.append("year", startDate.toISOString().split("T")[0]);
    // formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/Movies", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Movie/Series added successfully!");
        // Optionally reset the form here
      } else {
        alert("Failed to add Movie/Series.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <NavBar />
      <form
        onSubmit={handleSubmit}
        className="flex grid grid-cols-2 justify-center justify-items-center mx-48 my-24"
      >
        <div className="w-1/2 h-5/6 overflow-hidden shadow-lg bg-gray-300">
          <div className="flex justify-center font-bold text-sm ml-24 mt-52">
            {/* <input type="file" name="image" onChange={handleFileChange} /> */}
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
                placeholder="Movie/Series name"
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
                placeholder="Movie/Series Description"
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
                <option value="">Select Country</option>
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
