import { Link } from "react-router-dom";
import { IoCaretBackSharp } from 'react-icons/io5';

const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center">
            <div>
                <h1 className="text-4xl font-bold">Error 404</h1>
                <p className="text-2xl font-bold  mt-2">Sorry, We Misplaced That Page</p>

            </div>

            <div>
                <Link to={'/'}><button className="btn btn-md bg-amber-600  text-white hover:bg-amber-600  hover:text-white mt-5"><IoCaretBackSharp></IoCaretBackSharp>Home Page</button></Link>
            </div>
        </div>
    );
};

export default Error;