import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Series = () => {

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
          data.type == "Series" ? <img src={data.image} key={data.id} className="w-44 h-68"/> : ""
      )
    })
  
    // const NewSeriesdata = constNewJsonData.filter(constNewJsonData => constNewJsonData !== "");

    return (
        <div>
          <h1 className="my-24 flex justify-center">LATEST SERIES</h1>
          <div className="flex grid grid-cols-4 gap-2 justify-center flex-wrap gap-4 mx-80">
            {seriesdata.slice(0,8)}
          </div>
          <Link to="/series"><button className="bg-indigo-400 text-white rounded-full px-6 py-2 ml-[64rem] mt-10">More</button></Link>
        </div>
    )
}

export default Series;