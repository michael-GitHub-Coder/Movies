
import { useRef } from "react";
import backH from "../Images/headerb.png";



const NavBar = () => {

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
                    <a href="#"><span className="text-blue-700">Enter-</span>Stream</a>
                </div>
                {/* <!-- Navigation Links (hidden on small screens) --> */}
                <div className="hidden md:flex space-x-12">
                    <a href="#" className="mt-9 text-white hover:text-blue-600">Movies</a>
                    <a href="#" className="mt-9  text-white hover:text-blue-600">Series</a>
                </div>
                {/* <!-- Button --> */}
                <div className="hidden md:flex">
                    <button className="mt-9  bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-500">
                        Subscribe
                    </button>
                </div>
                {/* <!-- Hamburger Menu Button (visible on small screens) --> */}
                <div  className="md:hidden">
                    <button id="nav-toggle" className="text-gray-300 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {/* <!-- Responsive Menu (visible on small screens) --> */}
            <div id="nav-content" className="md:hidden">
                <a href="#" className="mt-9 text-white hover:text-blue-600">Movies</a>
                <a href="#" className="mt-9  text-white hover:text-blue-600">Series</a>
                <button class="block bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-500 mt-2">
                    Subscribe
                </button>
            </div>
        </nav>
       </>
    )

}
export default NavBar;