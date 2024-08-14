import {Link} from 'react-router-dom'
import { useRef } from "react";
import backH from "../Images/headerb.png";



const NavBar = ({title}) => {

    const navRef = useRef();

    const showNavbar = () => {
		navRef.current.classList.toggle(
			"hidden"
		);
	};
    // const navToggle = document.getElementById('nav-toggle');
    // const navContent = document.getElementById('nav-content');

    // navToggle.addEventListener('click', () => {
    //     navContent.classList.toggle('hidden');
    // });

    return(
       <>
        <nav className="h-96 w-screen" style={{backgroundImage: `url(${backH})`, backgroundSize: 'Cover', backgroundPosition: 'center'}}>
            <div className="container mx-auto flex justify-between items-center">
                {/* <!-- Logo --> */}
                <div className="mt-9  text-white text-lg ">
                    <Link to="/"><span className="text-blue-700">Enter-</span>Stream</Link>
                </div>
                {/* <!-- Navigation Links (hidden on small screens) --> */}
                <div className="hidden md:flex space-x-12">
                    <Link to="/movies" className="mt-9 text-white hover:text-blue-600">Movies</Link>
                    <Link to="/series" className="mt-9  text-white hover:text-blue-600">Series</Link>
                </div>
                {/* <!-- Button --> */}
                <div className="hidden md:flex">
                    <button className="mt-9  bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-300">
                        Subscribe
                    </button>
                </div>  
            </div>  
            <div className="flex justify-center text-5xl text-white py-32">{title}</div>
        </nav>
       </>
    )

}
export default NavBar;