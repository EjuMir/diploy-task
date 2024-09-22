import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdStar } from "react-icons/md";


const CommentSlide = () => {

    AOS.init();

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <div data-aos="fade-down" className="slider-container lg:w-[1200px] mx-auto my-20">
            <Slider {...settings}>
                
                <div className="card bg-base-200 w-80 gap-2">
                    <div className='flex items-end'>
                        <div>
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://www.worldfamousthings.com/wp-content/uploads/2023/06/Cristiano-Ronaldo.jpg"
                                    alt="Shoes"
                                    className="rounded-xl w-20 h-20" />
                            </figure>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>RonalDoe</h2>
                            <a className='underline text-green-500'>store link</a>
                            <div className='flex text-orange-500 text-xl mt-2'>
                                <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                            </div>
                        </div>
                    </div>
                    <div className="card-body items-center">
                        <p>
                            Printify has been an incredible service for us musicians unable to keep large amount of
                            inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts
                            in our jam space. Thanks Printify!
                        </p>

                    </div>
                </div>


                <div className="card bg-base-200 w-80 shadow-xl">
                    <div className='flex items-end'>
                        <div>
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://www.worldfamousthings.com/wp-content/uploads/2023/06/Cristiano-Ronaldo.jpg"
                                    alt="Shoes"
                                    className="rounded-xl w-20 h-20" />
                            </figure>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>RonalDoe</h2>
                            <a className='underline text-green-500'>store link</a>
                            <div className='flex text-orange-500 text-xl mt-2'>
                                <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                            </div>
                        </div>
                    </div>
                    <div className="card-body items-center">
                        <p>
                            Printify has been an incredible service for us musicians unable to keep large amount of
                            inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts
                            in our jam space. Thanks Printify!
                        </p>

                    </div>
                </div>

                <div className="card bg-base-200 w-80 shadow-xl">
                    <div className='flex items-end'>
                        <div>
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://www.worldfamousthings.com/wp-content/uploads/2023/06/Cristiano-Ronaldo.jpg"
                                    alt="Shoes"
                                    className="rounded-xl w-20 h-20" />
                            </figure>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>RonalDoe</h2>
                            <a className='underline text-green-500'>store link</a>
                            <div className='flex text-orange-500 text-xl mt-2'>
                                <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                            </div>
                        </div>
                    </div>
                    <div className="card-body items-center">
                        <p>
                            Printify has been an incredible service for us musicians unable to keep large amount of
                            inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts
                            in our jam space. Thanks Printify!
                        </p>

                    </div>
                </div>


                <div className="card bg-base-200 w-80 shadow-xl">
                    <div className='flex items-end'>
                        <div>
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://www.worldfamousthings.com/wp-content/uploads/2023/06/Cristiano-Ronaldo.jpg"
                                    alt="Shoes"
                                    className="rounded-xl w-20 h-20" />
                            </figure>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>RonalDoe</h2>
                            <a className='underline text-green-500'>store link</a>
                            <div className='flex text-orange-500 text-xl mt-2'>
                                <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                            </div>
                        </div>
                    </div>
                    <div className="card-body items-center">
                        <p>
                            Printify has been an incredible service for us musicians unable to keep large amount of
                            inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts
                            in our jam space. Thanks Printify!
                        </p>

                    </div>
                </div>

            </Slider>
        </div>

    );
};

export default CommentSlide;