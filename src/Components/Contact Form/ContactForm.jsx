import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const ContactForm = () => {
    return (
        <div className="flex lg:flex-row md:flex-col flex-col gap-5 justify-around items-center mt-20">

            <div data-aos="fade-right" className="card h-80  bg-violet-200 w-72 shadow-2xl shadow-violet-800 p-5 text-center text-md text-amber-800 font-serif ">
                <div className="card-body">
                    <h2 className="card-title mx-auto -mt-4">Office Location</h2>
                    <IoLocationOutline className="mx-auto w-20 h-16"></IoLocationOutline>
                    <p>Dreams Event Studio Ltd. <br />
                        Shop No. 10, Sarthik, <br />
                        Besides Gulmohar Park Mall, <br />
                        Mohanpur,Kesor <br />
                        Rajshahi 6220</p>

                </div>
            </div>
            <div data-aos="fade-left" className="card h-80  bg-violet-200 w-72 shadow-2xl shadow-violet-800 p-5 text-center text-md text-amber-800 font-serif">
                <div className="card-body">
                    <h2 className="card-title mx-auto -mt-4">Talk To An Expert</h2>
                    <FiPhone className="mx-auto w-20 h-16"></FiPhone>
                    <p>+880 8447300532</p>
                    <p>+880 6557300532</p>
                    <p>+880 4787300532</p>

                </div>
            </div>
            <div data-aos="fade-right" className="card h-80  bg-violet-200 w-72 shadow-2xl shadow-violet-800 p-5 text-center text-md text-amber-800 font-serif">
                <div className="card-body">
                    <h2 className="card-title  -mt-4 mx-auto">Email Address</h2>
                    <MdOutlineEmail className="mx-auto w-20 h-16"></MdOutlineEmail>
                    <p>eventDream018@gmail.com</p>
                    <p>eventDream015@gmail.com</p>
                    <p>eventDream014@gmail.com</p>

                </div>
            </div>


        </div>
    );
};

export default ContactForm;