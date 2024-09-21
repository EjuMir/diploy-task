import Slider from "../Tools/Slider";
import Lottie from "react-lottie";
import animationData from "../Animations/Animation - 1726907344627.json";
import { RiPlayCircleLine } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";

const Banner = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const list = <>
        <li className="flex"><IoMdCheckmark className="text-3xl text-green-500" />100% Free to use</li>
        <li className="flex"><IoMdCheckmark className="text-3xl text-green-500" />900+ High-Quality Products</li>
        <li className="flex"><IoMdCheckmark className="text-3xl text-green-500" />Largest global print network</li>
    </>

    return (
        <div className="flex lg:flex-row flex-col gap-8 justify-center items-center mt-20">
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-4xl font-bold">Create and sell <br />custom products</h1>
                </div>
                <div className="text-lg font-bold">
                    <ul>
                       {list}
                    </ul>
                </div>
                <div className="flex gap-3">
                    <a className="btn bg-green-500 text-white">Start For Free</a>
                    <a className="btn"><RiPlayCircleLine className="text-xl" />How it Works?</a>
                </div>
                <div>
                    <h3 className="text-green-500 font-bold">Trusted by over 8M sellers around the world</h3>
                </div>
            </div>

            <div className="relative">
                <div className="z-[1] bg-white absolute top-[40%] left-[50%] translate-x-[50%] translate-y-[-100%]">
                    <Slider></Slider>
                </div>
                <div>
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;