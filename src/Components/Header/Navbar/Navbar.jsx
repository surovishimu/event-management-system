import { useState } from "react";
import { NavLink } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const { user, logOut } = UseAuth();

    return (
        <nav className="bg-violet-950">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <img className="lg:h-28 lg:w-44 h-16 w-32" src="/image/images-removebg-preview.png" alt="" />
                </div>

                <div className="block sm:hidden mt-3">
                    <button
                        className="text-white mr-4"
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

                <ul className={`${isOpen ? "block sm:flex sm:space-x-4 mt-4 sm:mt-0" : "hidden sm:flex sm:space-x-4 mt-4 sm:mt-0"}`}>
                    <li>
                        <NavLink to='/' href="#" className={({ isActive }) =>
                            isActive ? "text-amber-600 text-lg font-semibold bg-transparent border-none rounded-lg btn btn-md normal-case hover:bg-transparent" : "text-lg font-semibold btn btn-md bg-transparent border-none hover:bg-transparent normal-case text-white hover:text-lg "
                        }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' href="#" className={({ isActive }) =>
                            isActive ? "text-amber-600 text-lg font-semibold bg-transparent border-none rounded-lg btn btn-md normal-case hover:bg-transparent" : "text-lg font-semibold btn btn-md bg-transparent border-none hover:bg-transparent normal-case text-white hover:text-lg"
                        }>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/gallery' href="#" className={({ isActive }) =>
                            isActive ? "text-amber-600 text-lg font-semibold bg-transparent border-none rounded-lg btn btn-md normal-case hover:bg-transparent" : "text-lg font-semibold btn btn-md bg-transparent border-none hover:bg-transparent normal-case text-white hover:text-lg"
                        }>
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' href="#" className={({ isActive }) =>
                            isActive ? "text-amber-600 text-lg font-semibold bg-transparent border-none rounded-lg btn btn-md normal-case hover:bg-transparent" : "text-lg font-semibold btn btn-md bg-transparent border-none hover:bg-transparent normal-case text-white hover:text-lg"
                        }>
                            Contact Us
                        </NavLink>
                    </li>

                    {user?.email ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="User Profile" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm btn-ghost normal-case hover:bg-violet-900 hover:text-white">{user.displayName}</button>
                                </li>
                                <li>
                                    <button className="hover:bg-violet-900 hover:text-white normal-case btn btn-sm btn-ghost" onClick={logOut}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <li>
                            <NavLink to='/login' href="#" className={({ isActive }) =>
                                isActive ? "text-amber-600 text-lg font-semibold bg-transparent border-none rounded-lg btn btn-md normal-case hover:bg-transparent " : "text-lg font-semibold btn btn-md bg-transparent border-none hover:bg-transparent normal-case text-white hover:text-lg "
                            }>
                                Log in
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
