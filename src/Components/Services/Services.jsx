import ServicesCard from "../ServicesCard/ServicesCard";
import PropTypes from 'prop-types';


const Services = ({ services }) => {

    return (
        <div className="mt-16">
            <div><p className="text-4xl text-amber-600 font-semibold text-center font-serif">Services</p>
                <h1 className="mt-2 font-greatVive text-5xl text-violet-900 font-semibold text-center mx-auto">
                    <h2 className="lg:text-5xl md:text-3xl text-2xl font-greatVive "> Fall in love with our Services</h2>

                    <div className="border-b-2 border-amber-600 w-1/4 mx-auto mt-1"></div>
                   
                </h1></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-10 mt-8">
                {
                    services?.map(service => <ServicesCard service={service} key={service.id}> </ServicesCard>)
                }
            </div>
        </div>



    );
};
Services.propTypes = {
    services: PropTypes.array.isRequired
}
export default Services;