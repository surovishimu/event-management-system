import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { useEffect, useState } from 'react';
const Review = () => {
    const [slidesPerView, setSlidesPerView] = useState(1);
    useEffect(() => {
  
        const mediumScreenMediaQuery = window.matchMedia('(min-width: 640px) and (max-width: 1023px)');
        const largeScreenMediaQuery = window.matchMedia('(min-width: 1024px)');
        const handleMediaQuery = (mediaQuery) => {
            if (mediaQuery.matches) {
                if (mediaQuery.media === '(min-width: 640px) and (max-width: 1023px)') {
                    setSlidesPerView(2);
                } else {
                    setSlidesPerView(3);
                }
            } else {
                setSlidesPerView(1); 
            }
        };
        handleMediaQuery(largeScreenMediaQuery);

        largeScreenMediaQuery.addEventListener('change', handleMediaQuery);
        mediumScreenMediaQuery.addEventListener('change', handleMediaQuery);
        return () => {
            largeScreenMediaQuery.removeEventListener('change', handleMediaQuery);
            mediumScreenMediaQuery.removeEventListener('change', handleMediaQuery);

        };
    }, []);
    return (
        <div className='mt-20 '>
            <h1 className="text-5xl text-center mt-16 font-greatVive text-violet-900 font-semibold mb-10">Our Lovely Customers</h1>
            <Swiper

                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={slidesPerView}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="lg:grid lg:grid-cols-3"
            >
                <SwiperSlide>
                    <div className="card lg:w-80 md:w-80 w-full bg-base-100 shadow-xl h-full">
                        <div className="rating mx-auto mt-5 -mb-3">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <div className="card-body items-center text-center">
                            <p className='text-sm font-serif text-center '>I can not thank your team enough for making our destination wedding a dream come true! Every detail was meticulously planned, and the execution was flawless. It was an great experience for us.</p>
                        </div>

                        <div className='flex justify-around items-center px-10 mb-4'>
                            <img className='h-24' src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" alt="" />
                            <h1 className='font-serif font-semibold text-lg'>Md Jafar Iqbal</h1>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card lg:w-80 md:w-80 w-full bg-base-100 shadow-xl h-full">
                        <div className="rating mx-auto mt-5 -mb-3">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <div className="card-body items-center text-center">
                            <p className='text-sm  font-serif text-center '>Your event planning expertise truly shines through. Our engagement party was a huge success, thanks to your creativity and attention to detail. The decorations, food were all top-notch!</p>
                        </div>

                        <div className='flex justify-around items-center px-10 mb-4'>
                            <img className='h-24' src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" alt="" />
                            <h1 className='font-serif font-semibold text-lg'>Md Newaz</h1>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card lg:w-80 md:w-80 w-full bg-base-100 shadow-xl ">
                        <div className="rating mx-auto mt-5 -mb-3">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <div className="card-body items-center text-center">
                            <p className='text-sm font-serif text-center -mb-8'>I was blown away by the stunning setup you created for my baby shower. It was a day filled with joy and laughter, and I could not have asked for a more perfect celebration. </p>
                        </div>

                        <div className='flex justify-around items-center px-10 mb-4'>
                            <img className='h-24' src="https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg" alt="" />
                            <h1 className='font-serif font-semibold text-lg'>Zakia Noor</h1>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card lg:w-80 md:w-80 w-full bg-base-100 shadow-xl ">
                        <div className="rating mx-auto mt-5 -mb-3">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <div className="card-body items-center text-center">
                            <p className='text-sm font-serif text-center -mb-6'>Our corporate event was a hit, all thanks to your teams expertise. From the venue selection to the seamless coordination, everything was superb. We received so many compliments from our colleagues</p>
                        </div>

                        <div className='flex justify-around items-center px-10 mb-4'>
                            <img className='h-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZDbs9LsCYFM4_6KRkrAmbyStuXXdbgdKMJmDUl7TEUVQjX2OXYENIRsDhIh7DyUb0xc8&usqp=CAU" alt="" />
                            <h1 className='font-serif font-semibold text-lg'>Md Tahfizul</h1>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card lg:w-80 md:w-80 w-full bg-base-100 shadow-xl ">
                        <div className="rating mx-auto mt-5 -mb-3">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <div className="card-body items-center text-center">
                            <p className='text-sm font-serif text-center '>I can not express how thrilled I am with your event planning for my sons birthday party. The entertainment,and decorations were a hit with the kids and adults alike.</p>
                        </div>

                        <div className='flex justify-around items-center px-10 mb-4'>
                            <img className='h-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd5KqiP_7htmin1ZO_xz4J9ZGEFums_SeuuuqQbqce4n4KAND-etj0j4opK_2TSPhdNIQ&usqp=CAU" alt="" />
                            <h1 className='font-serif font-semibold text-lg'>Razia Khatun</h1>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card lg:w-80 md:w-80 w-full bg-base-100 shadow-xl ">
                        <div className="rating mx-auto mt-5 -mb-3">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <div className="card-body items-center text-center">
                            <p className='text-sm font-serif text-center '>You truly outdid yourselves with the arrangements for our reunion. It was heartwarming to reconnect with old friends in such a beautiful and well-organized setting. </p>
                        </div>

                        <div className='flex justify-around items-center px-10 mb-4'>
                            <img className='h-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9kkioHRLqjNVqdYjWHdKWCLEYKfjJRoCYw&usqp=CAU" alt="" />
                            <h1 className='font-serif font-semibold text-lg'>Shihab Uddin</h1>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card lg:w-80 md:w-80 w-full bg-base-100 shadow-xl ">
                        <div className="rating mx-auto mt-5 -mb-3">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <div className="card-body items-center text-center">
                            <p className='text-sm font-serif text-center '>Our mehendi ceremony was a magical experience, all thanks to your teams creative vision. The vibrant decor and entertainment made it a day filled with love and laughter. We could not be happier!</p>
                        </div>

                        <div className='flex justify-around items-center px-10 mb-4'>
                            <img className='h-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcRzIH4z-aAw9737oimlsR53-GWSOkDhfbmwqox870z3VYLH5jR_qr252EWXzzFdXWvI&usqp=CAU" alt="" />
                            <h1 className='font-serif font-semibold text-lg'>Shamoli Shila</h1>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card lg:w-80 md:w-80 w-full  bg-base-100 shadow-xl h-full">
                        <div className="rating mx-auto mt-5 -mb-3">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <div className="card-body items-center text-center">
                            <p className='text-sm font-serif text-center '>You made my bachelor party unforgettable! The night was filled with excitement, and the attention to detail in planning the event was impressive. You guys know how to throw a great party!</p>
                        </div>

                        <div className='flex justify-around items-center px-10 mb-4'>
                            <img className='h-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWkUDp1tdLv-fWInWpNKsxAuJL-dO1RQYLjOqVIlXfvZAR32vpodF6Rj8I6qQoKa7WD2I&usqp=CAU" alt="" />
                            <h1 className='font-serif font-semibold text-lg'>Md Saifullah Mian</h1>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper></div>

    );
};

export default Review;