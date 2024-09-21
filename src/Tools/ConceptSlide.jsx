import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ConceptSlide = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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

        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <div>
                        <img className="w-36 h-36 rounded-full mx-auto lg:mx-0" src="https://printify.com/wp-content/uploads/2022/06/Design-Placement-on-Front-of-Shirt-Center-Chest.svg" alt="" />
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl mt-2 font-bold text-green-500">CREATE</h1>
                        <p className="text-lg my-2 font-bold">custom products</p>
                        <p className='lg:w-[300px] text-center lg:text-start'>
                            We offer some of the lowest prices in the industry
                            because print providers continuously compete to win your business.
                        </p>
                    </div>
                </div>


                <div>
                    <div>
                        <img className="w-36 h-36 rounded-full mx-auto lg:mx-0" src="https://printify.com/wp-content/uploads/2021/08/Custom-Luggage-Tags-Your-Design.jpeg" alt="" />
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl mt-2 font-bold text-green-500">SELL</h1>
                        <p className="text-lg my-2 font-bold">on your terms</p>
                        <p className='lg:w-[300px] text-center lg:text-start'>
                            Easily handle peak holiday seasons, with our wide network of
                            partners and automatic routing functionality.
                        </p>
                    </div>
                </div>


                <div>
                    <div>
                        <img className="w-36 h-36 rounded-full mx-auto lg:mx-0" src="https://static.vecteezy.com/system/resources/thumbnails/008/852/088/small_2x/realistic-3d-white-gift-box-with-green-glossy-ribbon-bow-isolated-on-transparent-background-3d-render-isometric-modern-holiday-surprise-box-realistic-icon-for-present-birthday-or-wedding-banners-png.png" alt="" />
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl mt-2 font-bold text-green-500">WE HANDLE</h1>
                        <p className="text-lg my-2 font-bold">fulfillment</p>
                        <p className='lg:w-[300px] text-center lg:text-start'>
                            With 900+ products and top quality brands, you
                            can choose the best products for your business.
                        </p>
                    </div>
                </div>
            </Slider>
        </div>

    );
};

export default ConceptSlide;