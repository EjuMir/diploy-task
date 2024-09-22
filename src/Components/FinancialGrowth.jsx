
const FinancialGrowth = () => {
    return (
        <div className="my-20 mx-4 bg-gray-100 lg:relative lg:mx-36 lg:h-[1000px]">
        <div className="flex flex-col lg:flex-row-reverse lg:absolute lg:top-[30%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]">
            <div>
                <img className="lg:w-[600px] w-full h-96 rounded-2xl" src="https://img.freepik.com/premium-vector/people-watering-money-tree-picking-golden-coins-from-green-plant-successful-business-growth-income-investment-concept-flat-characters-making-money-company-have-cash-financial-profits_88138-613.jpg" alt="" />
            </div>
            <div data-aos="fade-right" className="bg-white lg:w-[1000px] lg:h-80 place-self-end lg:px-20 rounded-lg">
                <h1 className="text-xl font-bold my-5">Easily add your design to a wide range of products</h1>
                <p className="mb-5">
                    With our free design tools, you can easily add your custom designs to t-shirts, mugs,
                    phone cases, and hundreds of other products.
                </p>
                <div className="flex gap-2 text-green-500">
                    <a className="text-lg hover:text-green-700 hover:cursor-pointer">All Products</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FinancialGrowth;