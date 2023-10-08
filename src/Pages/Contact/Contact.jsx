import ContactForm from "../../Components/Contact Form/ContactForm";
import Footer from "../../Components/Footer/Footer";
import MessageForm from "../../Components/MessageForm/MessageForm";


const Contact = () => {
    return (
        <div>
            
            
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-greatVive text-violet-900 text-center font-semibold mt-10 mb-10">Send us Your Requirement</h1>
            <img className='mx-auto lg:h-48 -mt-28 -mb-36 h-24' src="../../../public/image/line.png" alt="" />
            <MessageForm></MessageForm>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Contact;