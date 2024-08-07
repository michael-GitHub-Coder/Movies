import data from "../data.json";

const Movies = () => {

    const moviesdata = data && data.map(datan => {
        return (
            datan.type == "Movie" ?
             <img src={datan.image} key={datan.id} className="w-44 h-68"/> : 
             ""
        )
        
    });
    const newMoviesData = moviesdata.filter(moviesdata => moviesdata !== undefined && moviesdata !=="");
    console.log(newMoviesData);

    return (
        <div>
            <h1 className="my-24 flex justify-center">LATEST MOVIES</h1>
            <div className="flex justify-center flex-wrap gap-4 mx-80">
                {newMoviesData.slice(0,8) }
            </div>
            <button className="bg-indigo-400 text-white rounded-full px-6 py-2 ml-[64rem] mt-9">More</button>
        </div>
    )
}
export default Movies;