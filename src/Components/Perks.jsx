
const Perks = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-10 mt-20 mx-4 lg:mx-36 content-center">
            <div>
                <div>
                    <img className="w-36 h-36 rounded-full mx-auto lg:mx-0" src="https://a.storyblok.com/f/158954/1000x524/b4eb65e80f/4cb115_19b160b2e80b457894cec33381e00e99_mv2.gif" alt="" />
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl my-3 font-bold">Higher Profits</h1>
                    <p>
                        We offer some of the lowest prices in the industry
                        because print providers continuously compete to win your business.
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <img className="w-36 h-36 rounded-full mx-auto lg:mx-0" src="https://biteable.com/wp-content/uploads/2023/09/Templates-5-Infographic.gif" alt="" />
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl my-3 font-bold">Robust Scaling</h1>
                    <p>
                        Easily handle peak holiday seasons, with our wide network of
                        partners and automatic routing functionality.
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <img className="w-36 h-36 rounded-full mx-auto lg:mx-0" src="https://cdn.dribbble.com/users/1471713/screenshots/5309031/social_800-600_3.gif" alt="" />
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl my-3 font-bold">Best Selection</h1>
                    <p>
                       With 900+ products and top quality brands, you 
                       can choose the best products for your business. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Perks;