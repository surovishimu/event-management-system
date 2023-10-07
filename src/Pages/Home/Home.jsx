import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Services from "../../Components/Services/Services";


const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <Banner></Banner>
            <Services services={services}></Services>
        </div>
    );
};

export default Home;