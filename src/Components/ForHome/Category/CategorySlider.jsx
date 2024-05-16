import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"

const CategorySlider = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={40}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mt-10"
        >
            <SwiperSlide>
                <img className='w-[312px]' src={slide1} alt="" />
                <h3 className='text-3xl cinzel text-white -mt-24 text-center'>SALADS</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-[312px]' src={slide2} alt="" />
                <h3 className='text-3xl cinzel text-white -mt-24 text-center'>PIZZAS</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-[312px]' src={slide3} alt="" />
                <h3 className='text-3xl cinzel text-white -mt-24 text-center'>SOUPS</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-[312px]' src={slide4} alt="" />
                <h3 className='text-3xl cinzel text-white -mt-24 text-center'>DESSERTS</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-[312px]' src={slide5} alt="" />
                <h3 className='text-3xl cinzel text-white -mt-24 text-center'>SALADS</h3>
            </SwiperSlide>

        </Swiper>
    );
};

export default CategorySlider;