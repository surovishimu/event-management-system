import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { id, img, title, description, starting_price } = service;
    const [hovered, setHovered] = useState(false);

    const cardClass = `card shadow-2xl text-center bg-violet-900 relative`;
    const overlayClass = `absolute inset-0 flex flex-col items-center justify-center transition-opacity ${hovered ? 'bg-amber-500 opacity-95 rounded-xl text-2xl pt-3 pb-5 px-2  font-serif font-semibold' : 'opacity-0'
        }`;

    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
            className={cardClass}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <figure>
                <img src={img} alt={title} />
            </figure>
            <div className="card-body ">
                <h2 className="text-center text-xl font-serif text-amber-500 -mt-5 -mb-5">
                    {title}
                </h2>
                {hovered && (
                    <div className={overlayClass}>
                        <p className="text-white">{description}</p>
                        <img className="mx-auto mb-4" src="https://www.sbevents.in/images/title-bottom.png" alt="" />
                        <h4 className='text-sm font-serif'>From {starting_price} and up</h4>
                        <Link to={`/services/${id}`}>
                            <button className="bg-violet-950 mb-2 rounded-md text-white px-4 py-2 mt-2 w-42 flex items-center text-sm font-sans">
                                Show Details <AiOutlineDoubleRight className='ml-2' />
                            </button></Link>
                    </div>
                )}
            </div>
        </div>
    );
};
ServicesCard.propTypes = {
    service: PropTypes.array.isRequired
}
export default ServicesCard;
