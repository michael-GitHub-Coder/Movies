const Footer = () => {

    return (
        <div className="bg-gray-300 h-28 text mt-24" >
            <div className="container mx-auto flex justify-between items-center py-10">
                {/* <!-- Logo --> */}
                <div className="text-gray-500 text-lg ">
                    <a href="#" className="font-bold">Enter-Stream</a>
                </div>
                {/* <!-- Navigation Links (hidden on small screens) --> */}
                <div className="hidden md:flex space-x-12">
                    <a href="#" className=" text-gray-500 ">MOVIES</a>
                    <a href="#" className="  text-gray-500 ">SERIES</a>
                </div>
                {/* <!-- Button --> */}
                <button className="text-gray-500 px-4 py-2 rounded-full hover:bg-gray-100">
                    SUBSCRIBE
                </button>
            </div>
        </div>
    )
}

export default Footer;