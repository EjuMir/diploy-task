
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
                    delay: 2400,
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
                <SwiperSlide><img src="https://images.thenile.io/r1000/9781444910582.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.squarespace-cdn.com/content/v1/59e235dcd7bdcec81eb68962/1575923349583-5KH4TDVO8RXU4XBNSI0M/ke17ZwdGBToddI8pDm48kD755XqWqn8HkRX8WSTt5GJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URwn7vetbNoOrjGqAVoZN5bz1XPY0_Ev1nDpBBPOnwUda4oDI66FEaoPF3aKRzQZjg/Historical+Fiction+Where+the+Light+Enters+by+Sara+Donati.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.squarespace-cdn.com/content/v1/59e235dcd7bdcec81eb68962/1575923349157-3BNDH7JR5UF7ZU0A5A48/ke17ZwdGBToddI8pDm48kJTNl5E2hijD7J-sESO_BVN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ue3pExvFiO6E9rv2lljq9S2_mVV9EJlaTc_26ArkrjDTJilkUu7eIyBb-AQDEk_nZw/Historical+Fiction+The+Sound+of+the+Hours+by+Karen+Campbell.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://s-i.huffpost.com/gen/1148926/images/o-CLASSIC-BOOKS-ORIGINAL-COVERS-facebook.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;