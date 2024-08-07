import data from "../data.json";

const Series = () => {

    const seriesdata =  data && data.map(data =>{
        return (
          data.type == "Series" ? <img src={data.image} key={data.id} className="w-44 h-68"/> : ""
      )
    })

    const NewSeriesdata = seriesdata.filter(seriesdata => seriesdata !== undefined && seriesdata !== "");

    return (
        <div>
          <h1 className="my-24 flex justify-center">LATEST SERIES</h1>
          <div className="flex justify-center flex-wrap gap-4 mx-80">
            {NewSeriesdata.slice(0,8)}
          </div>
          <button className="bg-indigo-400 text-white rounded-full px-6 py-2 ml-[64rem] mt-9">More</button>
        </div>
    )
}

export default Series;