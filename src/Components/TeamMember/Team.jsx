
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { useEffect, useState } from 'react';
const Team = () => {
    const [slidesPerView, setSlidesPerView] = useState(1);
    useEffect(() => {
       
        const mediumScreenMediaQuery = window.matchMedia('(min-width: 640px) and (max-width: 1023px)');
        const largeScreenMediaQuery = window.matchMedia('(min-width: 1024px)');
        const handleMediaQuery = (mediaQuery) => {
            if (mediaQuery.matches) {
                if (mediaQuery.media === '(min-width: 640px) and (max-width: 1023px)') {
                    setSlidesPerView(3); 
                } else {
                    setSlidesPerView(4); 
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
        <div className=' '>
            <h1 className="text-5xl text-center mt-16 font-greatVive text-violet-900 font-semibold mb-10">Our Team Member</h1>
            <img className='mx-auto lg:h-44 h-40 -mb-5 -mt-28' src="../../../public/image/line.png" alt="" />
            <Swiper

                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={slidesPerView}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="lg:grid lg:grid-cols-3 -mt-16"
            >
                <SwiperSlide>
                    <div className="card lg:w-56 mt-16 lg:ml-20 ml-0 md:w-64 w-full bg-base-100 ">
                       
                      <img src="https://event-solutionservice.com/wp-content/uploads/2023/05/BITTU-GUPTA.jpg" alt="" /> 

                      <h1 className='text-center text-xl font-serif font-semibold mt-2'>Asraful Rahaman</h1> 
                      <p className='text-center text-md font-serif font-semibold mt-2'>8 Yrs. of Exp.</p>
                      <small className='text-center text-md font-serif font-semibold mt-2'>Email: asf@gmail.com</small>
                        
                    </div>
                </SwiperSlide>
                
               
                <SwiperSlide>
                    <div className="card lg:w-56 mt-16 ml-20 md:w-64 w-full bg-base-100 ">
                       
                      <img src="https://event-solutionservice.com/wp-content/uploads/2023/05/NEERAJ-KUMAR.jpg" alt="" /> 

                      <h1 className='text-center text-xl font-serif font-semibold mt-2'>Rafiqul Sagar</h1> 
                      <p className='text-center text-md font-serif font-semibold mt-2'>5 Yrs. of Exp.</p>
                      <small className='text-center text-md font-serif font-semibold mt-2'>Email: rafiq@gmail.com</small>
                        
                    </div>
                </SwiperSlide>
                
              

                <SwiperSlide>
                    <div className="card lg:w-56 mt-16 ml-20 md:w-64 w-full bg-base-100 ">
                       
                      <img src="https://event-solutionservice.com/wp-content/uploads/2023/05/PAYAL-KUMARI.jpg" alt="" /> 

                      <h1 className='text-center text-xl font-serif font-semibold mt-2'>Nishat Dolon</h1> 
                      <p className='text-center text-md font-serif font-semibold mt-2'>7 Yrs. of Exp.</p>
                      <small className='text-center text-md font-serif font-semibold mt-2'>Email: dolon@gmail.com</small>
                        
                    </div>
                </SwiperSlide>
               

                <SwiperSlide>
                    <div className="card lg:w-56 mt-16 ml-20 md:w-64 w-full bg-base-100 ">
                       
                      <img src="https://event-solutionservice.com/wp-content/uploads/2023/05/RASHI-SINHA.jpg" alt="" /> 

                      <h1 className='text-center text-xl font-serif font-semibold mt-2'>Farzana Omi</h1> 
                      <p className='text-center text-md font-serif font-semibold mt-2'>11 Yrs. of Exp.</p>
                      <small className='text-center text-md font-serif font-semibold mt-2'>Email: omi@gmail.com</small>
                        
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card lg:w-56 mt-16 ml-20 md:w-64 w-full bg-base-100 ">
                       
                      <img src="https://event-solutionservice.com/wp-content/uploads/2023/05/PREETI-KUMARI.jpg" alt="" /> 

                      <h1 className='text-center text-xl font-serif font-semibold mt-2'>Sumaiya Shimu</h1> 
                      <p className='text-center text-md font-serif font-semibold mt-2'>9 Yrs. of Exp.</p>
                      <small className='text-center text-md font-serif font-semibold mt-2'>Email: simu@gmail.com</small>
                        
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card lg:w-56 mt-16 ml-20 md:w-64 w-full bg-base-100 ">
                       
                      <img src="https://event-solutionservice.com/wp-content/uploads/2023/05/HIMANSHU-JASSAL.jpg" alt="" /> 

                      <h1 className='text-center text-xl font-serif font-semibold mt-2'>Tofazzal Karim</h1> 
                      <p className='text-center text-md font-serif font-semibold mt-2'>6 Yrs. of Exp.</p>
                      <small className='text-center text-md font-serif font-semibold mt-2'>Email: tofa@gmail.com</small>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card lg:w-56 mt-16 ml-20 md:w-64 w-full bg-base-100 ">
                       
                      <img src="https://event-solutionservice.com/wp-content/uploads/2023/05/SURAJ-SINGH.jpg" alt="" /> 

                      <h1 className='text-center text-xl font-serif font-semibold mt-2'>Mehedin Hassan</h1> 
                      <p className='text-center text-md font-serif font-semibold mt-2'>3 Yrs. of Exp.</p>
                      <small className='text-center text-md font-serif font-semibold mt-2'>Email: hassan@gmail.com</small>
                        
                    </div>
                </SwiperSlide>

                

               

              


            </Swiper></div>

    );
};

export default Team;