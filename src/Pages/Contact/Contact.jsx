import { Helmet } from "react-helmet-async";
import ContactForm from "../../Components/Contact Form/ContactForm";
import MessageForm from "../../Components/MessageForm/MessageForm";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Dreams Event | Contact
                </title>
            </Helmet>
            
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-greatVive text-violet-900 text-center font-semibold mt-10 mb-10">Send us Your Requirement</h1>
            <img className='mx-auto lg:h-48 lg:-mt-28 md:-mt-20 -mt-20 -mb-36 h-24  ' src="/image/line.png" alt="" />
            <MessageForm></MessageForm>
            <ContactForm></ContactForm>
         
        </div>
    );
};

export default Contact;