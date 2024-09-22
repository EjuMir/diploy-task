
const FinancialGrowth = () => {
    return (
        <div className="my-20 mx-4 lg:mx-36 ">
            <div className="flex flex-col lg:flex-row-reverse">
                <div>
                    <img className="lg:w-[600px] w-full h-full rounded-t-lg" src="https://img.freepik.com/premium-vector/woman-watering-money-flower_107173-9236.jpg" alt="" />
                </div>

                <div data-aos="fade-right" className="bg-cyan-950 lg:w-[1000px] p-4 place-self-end lg:px-20 rounded-l-lg">
                    <h1 className="text-5xl font-bold my-5 text-white">Make Money, Risk-Free</h1>
                    <p className="mb-5 text-white">
                        You pay for fulfillment only when you make a sale
                    </p>
                    <div className="bg-gray-900 w-72 mb-3 rounded-xl p-4">
                        <div className="flex justify-between text-white my-2">
                            <p>You sell a shirt</p>
                            <p>$18</p>
                        </div>
                        <div className="flex justify-between text-white my-2">
                            <p>You pay for its production</p>
                            <p>$12</p>
                        </div>
                        <hr />
                        <div className="flex justify-between text-white my-2">
                            <p>Your Profit</p>
                            <p>$6</p>
                        </div>
                    </div>
                    <div>
                        <a className="btn bg-green-700 text-white border-none rounded-none mb-3">Start Selling</a>
                        <p className="mb-3 text-white text-xs">100% Free to use · 900+ Products · Largest print network</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialGrowth;