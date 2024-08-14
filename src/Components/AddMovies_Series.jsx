
import { useState,useEffect } from "react"
import DatePicker from 'react-datepicker';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const AddMovies_Series = () => {
   
    const {id} = useParams();
    
    const [movies, setMovie] = useState(null);
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (date) => {
        setStartDate(date);
     };
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
        <div>
        <NavBar />
        <form className="flex grid grid-cols-2 jstify-center justify-items-center mx-48 my-24">
            <div className=" w-1/2 h-5/6  overflow-hidden shadow-lg bg-gray-300">
                <div className="flex justify-center font-bold text-md mt-52"><button>Upload Movie Poster</button></div>
            </div>
            <div className="w-4/5 px-6 rounded overflow-hidden ">
                <div className="text-md py-2">
                    <label htmlFor="name">Movie/Series Name</label>
                    <div className="mt-2">
                        <input
                        type="text"
                        id="name"
                        placeholder="Movie/Series name"
                        className="border-2 border-gray-300 p-2 rounded w-full"
                        />
                    </div>
                </div>

                <div className="text-md py-2">
                    <label htmlFor="name">Description</label>
                    <div className="mt-2">
                        <input
                        type="text"
                        id="name"
                        placeholder="Movie/Series Description"
                        className="border-2 border-gray-300 p-2  pb-12 rounded w-full"
                        />
                    </div>
                </div>

                <div className="text-md py-2">
                    <label htmlFor="name">Country</label>
                    <div className="mt-2">
                        {/* <input
                        type="text"
                        id="name"
                        placeholder="Select Country"
                        className="border-2 border-gray-300 p-2 rounded w-full"
                        /> */}
                        <select
                        id="country"
                        className="border-2 border-gray-300 p-2 rounded w-full"
                        >
                        <option value="">Select Country</option>
                        <option value="usa">United States</option>
                        <option value="canada">Canada</option>
                        <option value="uk">United Kingdom</option>
                        <option value="australia">Australia</option>
                        <option value="france">France</option>
                        <option value="germany">Germany</option>
                        <option value="india">India</option>
                        <option value="japan">Japan</option>
                        <option value="china">China</option>
                        </select>

                    </div>
                </div>

                <div className="text-md py-2">
                    <label htmlFor="name">Year</label>
                    <div className="mt-2">
                        {/* <input
                        type="text"
                        id="name"
                        placeholder="2024/08/01"
                        className="border-2 border-gray-300 p-2 rounded w-full"
                        /> */}
                         <DatePicker
                            selected={startDate}
                            onChange={handleChange}
                            dateFormat="yyyy/MM/dd"
                            className="border-2 border-gray-300 p-2 rounded w-full"
                         />
                    </div>
                </div>
                <div className="mt-2 py-2"> 
                    <input
                    type="checkbox"
                    className="mr-2"
                    /> Movie
                     <input
                        type="checkbox"
                        className="ml-14 mr-2 rounded-full text-indigo-500"
                    /> Series
                </div>
                <div className="mt-2 py-2"> 
                    <button className="text-white border-2 bg-indigo-500 p-2 rounded-full w-full">SAVE</button>
                </div>
            </div>
        </form>
        </div>
    )

}
export default AddMovies_Series