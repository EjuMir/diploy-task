
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {

    return (
        <div>
            <Swiper
                id='swipe'
                autoplay={{
                    delay: 1900,
                    disableOnInteraction: false,
                }}
                navigation={true}
                slidesPerView={1}
                
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.20': {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    '@1.20': {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    '@1.70': {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                }}


                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.pinimg.com/736x/df/ed/ee/dfedeee61c4be8b31174ee684575ff7f.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://us.123rf.com/450wm/yupiramos/yupiramos2304/yupiramos230400374/202513163-modern-fashion-design-men-and-women-clothing.jpg?ver=6" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHwE7VuSkk5duvq2g4iTeYei9_bMiTeiFyg&s" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;