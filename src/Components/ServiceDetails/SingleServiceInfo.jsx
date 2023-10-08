import PropTypes from 'prop-types';

const SingleServiceInfo = ({ serviceInfo }) => {
    const { title, description2, included, duration, guests, starting_price,
        photo1, photo2, photo3, photo4, photo5, photo6 } = serviceInfo;


    return (
        <div>
            <div className="text-center mt-8">
                <h1 className="font-greatVive lg:text-7xl md:text-5xl text-4xl text-violet-900 -mb-7 z-20 relative ">{title}</h1>
                <img className="mx-auto lg:h-24 h-16 -mb-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCrQLhkiiWe8z1AWvNERTgh9fEhKoKty4aj9mYvvJoHUOl680zKDgbY20UkLSdWJNrJE&usqp=CAU" alt="" />

                <p className="lg:text-xl text-md font-serif w-2/4 mx-auto mb-4 mt-5">{description2}</p>

                <h4 className="text-md font-serif"><span className="text-xl text-amber-600 font-serif font-semibold">Included:</span>{included}</h4>
                <h4 className="text-md font-serif mt-2"><span className="text-xl text-amber-600 font-serif font-semibold">Duration:</span>{duration}</h4>
                <h6 className="text-md font-serif"><span className="text-xl text-amber-600 font-serif font-semibold">Guests:</span>{guests}</h6>

                <p className='mt-2 text-md font-serif bg-amber-600 font-semibold w-fit mx-auto'>Price Start from {starting_price}</p>

            </div>
            <div className='mt-20 text-center font-serif  lg:text-4xl text-2xl font-semibold text-violet-900 '>
                <h1 className='font-greatVive z-20 -mb-20 relative'>Our {title} Gallery</h1>
                <img className='mx-auto lg:h-44 h-40 -mb-5' src="../../../public/image/line.png" alt="" />
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-10">

                <div className="overflow-hidden border-2 border-dotted border-amber-600 p-5">
                    <img src={photo1} alt="Gallery Image 1" className="w-full h-full transition-transform transform hover:scale-105" />
                </div>


                <div className="overflow-hidden border-2 border-dotted border-amber-600 p-5">
                    <img src={photo2} className="w-full h-full transition-transform transform hover:scale-105" />
                </div>

                <div className="overflow-hidden border-2 border-dotted border-amber-600 p-5">
                    <img src={photo3} alt="Gallery Image 3" className="w-full h-full transition-transform transform hover:scale-105" />
                </div>
                <div className="overflow-hidden border-2 border-dotted border-amber-600 p-5">
                    <img src={photo4} alt="Gallery Image 3" className="w-full h-full transition-transform transform hover:scale-105" />
                </div>
                <div className="overflow-hidden border-2 border-dotted border-amber-600 p-5">
                    <img src={photo5} alt="Gallery Image 3" className="w-full h-full transition-transform transform hover:scale-105" />
                </div>
                <div className="overflow-hidden border-2 border-dotted border-amber-600 p-5">
                    <img src={photo6} alt="Gallery Image 3" className="w-full h-full transition-transform transform hover:scale-105" />
                </div>


            </div>
        </div>
    );
};
SingleServiceInfo.propTypes = {
    serviceInfo: PropTypes.object.isRequired
}
export default SingleServiceInfo;