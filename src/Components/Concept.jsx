import { FaArrowRight } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../Animations/editShirt.json"
import ConceptSlide from "../Tools/ConceptSlide";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Concept = () => {

    AOS.init();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="my-20 mx-4 bg-gray-100 lg:relative lg:mx-36 lg:h-[1000px]">
            <div className="flex flex-col lg:flex-row lg:absolute lg:top-[30%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]">
                <div>
                    <img className="lg:w-[600px] w-full h-96 rounded-2xl" src="https://printify.com/wp-content/uploads/2021/06/Printify-Products-White.jpeg" alt="" />
                </div>
                <div data-aos="fade-right" className="bg-white lg:w-[1000px] lg:h-80 place-self-end lg:px-20 rounded-lg">
                    <h1 className="text-xl font-bold my-5">Easily add your design to a wide range of products</h1>
                    <p className="mb-5">
                        With our free design tools, you can easily add your custom designs to t-shirts, mugs,
                        phone cases, and hundreds of other products.
                    </p>
                    <div className="flex gap-2 text-green-500">
                        <a className="text-lg hover:text-green-700 hover:cursor-pointer">All Products</a><FaArrowRight className="text-xl place-self-center" />
                    </div>
                </div>
            </div>
            <div className="lg:absolute lg:w-[1000px] lg:left-[50%] lg:top-[75%] lg:translate-x-[-48%] lg:translate-y-[-50%]">
                <ConceptSlide></ConceptSlide>
            </div>

            <div className="hidden lg:block lg:absolute lg:top-[40%] lg:left-[35%] lg:translate-x-[-50%] lg:translate-y-[-50%] bg-white rounded-2xl">
                <Lottie
                    options={defaultOptions}
                    height={200}
                    width={200}
                />
            </div>

        </div>

    );
};

export default Concept;