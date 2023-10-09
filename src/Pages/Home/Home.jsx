import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Services from "../../Components/Services/Services";
import Intro from "../../Components/Intro/Intro";
import Qualification from "../../Components/Qualification/Qualification";
import Review from "../../Components/Review/Review";
import MessageForm from "../../Components/MessageForm/MessageForm";
import Footer from "../../Components/Footer/Footer";
import Faq from "../../Components/FAQ/Faq";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <Helmet>
                <title>
                    Dreams Event | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Intro></Intro>
            <Services services={services}></Services>
            <Qualification></Qualification>
            <Review></Review>
            <MessageForm></MessageForm>
            <Faq></Faq>


        </div>
    );
};

export default Home;