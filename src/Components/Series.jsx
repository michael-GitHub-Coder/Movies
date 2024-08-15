import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";


const Series = () => {

  const navigate = useNavigate();

    const viewSeries = (id) => {
        navigate(`/viewSeries/${id}`);
    }
  const [series, setSeries] = useState([]); 
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

    const seriesdata =  series && series.map(data =>{
        return (
          <Link key={data.id} onClick={(e) => {e.preventDefault(); viewSeries(data.id)}} ><img src={data.image}  className="w-44 h-64 max-w-xs overflow-hidden shadow-lg hover:transform hover:translate-x-4 hover:translate-y-2 transition-transform duration-300"/></Link>
      )
    })
  
    // const NewSeriesdata = constNewJsonData.filter(constNewJsonData => constNewJsonData !== "");

    return (
       <>
    
       <div>
          <h1 className="my-24 flex justify-center">LATEST SERIES</h1>
          <div className="flex grid grid-cols-4 gap-2 justify-center flex-wrap gap-4 mx-80">
            {seriesdata.slice(0,8)}
          </div>
          <Link to="/series"><button className="bg-indigo-400 text-white rounded-full px-6 py-2 ml-[64rem] mt-10">More</button></Link>
        </div>
       </>
    )
}

export default Series;