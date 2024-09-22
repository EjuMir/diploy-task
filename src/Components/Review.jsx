import AOS from 'aos';
import 'aos/dist/aos.css';
import CommentSlide from '../Tools/CommentSlide';

const Review = () => {
    AOS.init();

    return (
        <div>
            <div className="flex flex-col text-center justify-center my-20 gap-8 mx-auto flex-start lg:text-start lg:flex-row lg:w-[1200px]">
                <div>
                    <h2 className="text-2xl lg:text-4xl lg:w-96 font-bold">Trusted by over 8M sellers around the world</h2>
                </div>
                <div data-aos="fade-right">
                    <p className="text-lg text-gray-500 lg:w-96">
                        Whether you are just getting started or run an enterprise-level e-commerce business,
                        we do everything we can to ensure a positive merchant experience.
                    </p>
                </div>
            </div>
            <CommentSlide></CommentSlide>
        </div>

    );
};

export default Review;