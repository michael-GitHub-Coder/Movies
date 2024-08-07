import data from "../data.json";

const AllSeries = () =>{

    return(
        
        <div className="flex justify-center flex-wrap gap-4 mx-80 my-1">  
        <a href="#"><button className="bg-indigo-400 text-white rounded-full px-6 py-2 ml-[80rem] mt-9 my-14">ADD</button></a>
            {
                data && data.map(data => {
                    return (
                       data.type == "Series" ? <img src={data.image} key={data.id} className="w-44 h-68" /> : ""
                    )
                })
            }
        </div>
    )
}
export default AllSeries;