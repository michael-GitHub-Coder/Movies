import {Link} from 'react-router-dom'

const Footer = () => {

    return (
        <div className="bg-gray-300 h-28 text mt-24" >
            <div className="container mx-auto flex justify-between items-center py-10">
                {/* <!-- Logo --> */}
                <div className="text-gray-500 text-lg ">
                    <Link to="/" className="font-bold">Enter-Stream</Link>
                </div>
                {/* <!-- Navigation Links (hidden on small screens) --> */}
                <div className="hidden md:flex space-x-12">
                    <Link to="/movies" className=" text-gray-500 ">MOVIES</Link>
                    <Link to="/series" className="  text-gray-500 ">SERIES</Link>
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