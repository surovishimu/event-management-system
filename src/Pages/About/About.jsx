
import { Helmet } from "react-helmet-async";
import Team from "../../Components/TeamMember/Team";


const About = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Dreams Event | About
                </title>
            </Helmet>
            <div>
                <div>
                    <h1 className="lg:text-5xl md:text-4xl text-3xl mt-5 mb-5 font-greatVive text-violet-900 text-center font-semibold"><span className="text-amber-500">Hello!</span> We Are an Event Planning Agency</h1>
                    <img className='mx-auto lg:h-44 h-40 -mb-5 -mt-24' src="/image/line.png" alt="" />
                    <p className="w-3/4 mx-auto text-md font-serif text-center">

                        Located in the heart of the picturesque Rajshahi district, nestled within the enchanting village of Mohonpur, Dreams Event has been a cherished part of our community for 20 years. Our journey began with a simple yet profound vision: to bring dreams to life through exceptional event experiences. With every passing year, our passion for event management has grown, and our commitment to turning your dreams into reality has remained unwavering.

                        At Dreams Event, we understand that life's most significant moments deserve to be celebrated in style. Whether it's a grand wedding celebration, a corporate gala, a milestone birthday, or any special occasion in between, we are here to make your dreams come true. Our dedicated team of event experts is known for its creativity, precision, and relentless pursuit of perfection. We pour our hearts into every detail, ensuring that your event is not merely an occasion but a cherished memory that you and your guests will treasure.

                        Our legacy is one of excellence, marked by countless smiles, heartfelt thank-yous, and stories of unforgettable moments. We take immense pride in our local roots, our commitment to our community, and our role in making Mohonpur and Rajshahi shine on the event map. Dreams Event isn't just an event management company; it's a promise of extraordinary experiences, where dreams truly come to life. Welcome to our world of celebration, where every moment is magical, and every event is a masterpiece."

                    </p>
                </div>

                <div className="flex lg:flex-row md:flex-col flex-col w-3/4 mx-auto text-center mt-16 p-5 items-center">
                    <div className="flex-1 lg:border-r-2 md:border-r-none border-r-none border-amber-600">
                        <h1 className="text-3xl font-bold font-greatVive text-violet-900">Our Missions</h1>
                        <p className="font-serif text-md">
                            Our “Dream's Event” starts with our mission, which is enduring. It declares our purpose as a company and serves as the standard against which we conduct business and interact with clients.<br />
                            <span className="font-bold text-amber-600">To deliver extraordinary events….</span> <br />
                            <span className="font-bold text-amber-600">To inspire the world with our hard work… </span><br />
                            <span className="font-bold text-amber-600">To create value and make a difference.</span>
                        </p>


                    </div>
                    <div className="flex-1 p-5">
                        <h1 className="text-3xl font-bold font-greatVive text-violet-900">Our Vision</h1>
                        <p className="font-serif text-md">Our vision serves as the exoskeleton for our “Dream's Event” and guides every aspect of our business by describing what we need to accomplish in order to continue achieving sustainable and quality growth. Keeping our “Dream's Event” in mind we want to grow a legal event organizer to one the biggest event management company operating in diverse sectors.</p>
                    </div>
                </div>

            </div>
            <Team></Team>
        </div>
    );
};

export default About;