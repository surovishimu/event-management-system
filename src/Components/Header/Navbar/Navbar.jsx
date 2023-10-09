

import { useState } from "react";
import { NavLink } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const links = <>

        <li>
            <NavLink to='/' href="#" className={({ isActive }) =>
                isActive ? "text-amber-600 text-lg font-semibold bg-transparent border-none rounded-lg btn btn-md normal-case hover:bg-transparent" : "text-lg font-semibold btn btn-md bg-transparent border-none hover:bg-transparent normal-case text-white "
            }>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/about' href="#" className={({ isActive }) =>
                isActive ? "text-amber-600 text-lg font-semibold bg-transparent border-none rounded-lg btn btn-md normal-case hover:bg-transparent" : "text-lg font-semibold btn btn-md bg-transparent border-none hover:bg-transparent normal-case text-white "
            }>
                About Us
            </NavLink>
        </li>
        <li>
            <NavLink to='/gallery' href="#" className={({ isActive }) =>
                isActive ? "text-amber-600 text-lg font-semibold bg-transparent border-none rounded-lg btn btn-md normal-case hover:bg-transparent" : "text-lg font-semibold btn btn-md bg-transparent border-none hover:bg-transparent normal-case text-white "
            }>
                Gallery
            </NavLink>
        </li>
        <li>
            <NavLink to='/contact' href="#" className={({ isActive }) =>
                isActive ? "text-amber-600 text-lg font-semibold bg-transparent border-none rounded-lg btn btn-md normal-case hover:bg-transparent" : "text-lg font-semibold btn btn-md bg-transparent border-none hover:bg-transparent normal-case text-white "
            }>
                Contact Us
            </NavLink>
        </li>

    </>

    const { user, logOut } = UseAuth();

    return (
        <nav className="bg-violet-950">
            <div className="container mx-auto flex justify-between items-center">

                <div><img className="lg:h-28 lg:w-44 h-16 w-32" src="../../../../public/image/images-removebg-preview.png" alt="" /></div>

                {/* Toggle button for small screens */}
                <div className="block sm:hidden mt-3">
                    <button
                        className="text-white mr-4 "
                        onClick={toggleMenu}
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Middle: Navigation links */}
                <ul
                    className={`${isOpen ? "block" : "hidden"
                        } sm:flex sm:space-x-4 mt-4 sm:mt-0 `}
                >
                    {links}
                    {/* Login button inside the menu for small screens */}
                    {isOpen && (
                        <li>
                            <NavLink to='/login' href="#" className={({ isActive }) =>
                                isActive ? "text-white text-lg font-semibold bg-teal-500 rounded-lg btn btn-md normal-case hover:bg-teal-500 lg:hidden " : "text-lg font-semibold btn btn-md bg-transparent border-none hover:bg-transparent normal-case lg:hidden text-white"
                            }>
                                Log in
                            </NavLink>
                        </li>
                    )}
                </ul>

                {/* Right side: Login option */}
                <div className="hidden sm:block ">
                    {
                        user?<div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost normal-case hover:bg-violet-900 hover:text-white">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="hover:bg-violet-900 hover:text-white normal-case btn btn-sm  btn-ghost" onClick={logOut}>Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <NavLink to='/login' href="#" className={({ isActive }) =>
                                isActive ? "text-amber-600 text-lg font-semibold bg-transparent border-none rounded-lg btn btn-md normal-case hover:bg-transparent " : "text-lg font-semibold btn btn-md bg-transparent border-none hover:bg-transparent normal-case text-white "
                            }>
                                Log in
                            </NavLink>
                    }


                </div>
            </div>
        </nav>
    );
};

export default Navbar;
