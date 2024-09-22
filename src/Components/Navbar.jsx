
const Navbar = () => {

    //navbar dropdowns
    const howItWorks = <><details>
        <summary className="hover:text-green-500">How it works</summary>
        <ul className="p-2 w-36 z-[3]">
            <li className="hover:text-green-500"><a>How Printify Works</a></li>
            <li className="hover:text-green-500"><a>Print On Demand</a></li>
            <li className="hover:text-green-500"><a>Printify Quality Promise</a></li>
            <li className="hover:text-green-500"><a>What to sell</a></li>
        </ul>
    </details></>

    const services = <><details>
        <summary className="hover:text-green-500">Services</summary>
        <ul className="p-2 w-36 z-[3]">
            <li className="hover:text-green-500"><a>How Printify Works</a></li>
            <li className="hover:text-green-500"><a>Print On Demand</a></li>
            <li className="hover:text-green-500"><a>Printify Quality Promise</a></li>
            <li className="hover:text-green-500"><a>What to sell</a></li>
        </ul>
    </details></>

    const useCases = <><details>
        <summary className="hover:text-green-500">Use-cases</summary>
        <ul className="p-2 w-36 z-[3]">
            <li className="hover:text-green-500"><a>How Printify Works</a></li>
            <li className="hover:text-green-500"><a>Print On Demand</a></li>
            <li className="hover:text-green-500"><a>Printify Quality Promise</a></li>
            <li className="hover:text-green-500"><a>What to sell</a></li>
        </ul>
    </details></>

    const needHelp = <><details>
        <summary className="hover:text-green-500">Need help?</summary>
        <ul className="p-2 w-36 z-[3]">
            <li className="hover:text-green-500"><a>How Printify Works</a></li>
            <li className="hover:text-green-500"><a>Print On Demand</a></li>
            <li className="hover:text-green-500"><a>Printify Quality Promise</a></li>
            <li className="hover:text-green-500"><a>What to sell</a></li>
        </ul>
    </details></>

    //all navbar information
    const dropDowns = <>
        <li className="hover:text-green-500"><a>Catalogue</a></li>
        <li className="z-[3]">{howItWorks}</li>
        <li className="hover:text-green-500"><a>Pricing</a></li>
        <li className="hover:text-green-500"><a>Blogs</a></li>
        <li className="z-[3]">{services}</li>
        <li className="z-[3]">{useCases}</li>
        <li className="z-[3]">{needHelp}</li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-md sticky z-[3]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 p-2 shadow">
                        {dropDowns}
                    </ul>
                </div>
                <div className="flex gap-0">
                    <img className="w-15 h-10" src="https://ugc.production.linktr.ee/aa1ee213-072b-4c35-a692-8cd8a124fa9c_Printify-Logo-04.png?io=true&size=thumbnail-stack-v1_0" alt="" />
                    <a className="text-2xl font-bold text-green-500">Printify</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {dropDowns}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="btn bg-white text-black shadow-md">Log in</a>
                <a className="btn bg-green-500 text-white shadow-md">Sign up</a>
            </div>
        </div>
    );
};

export default Navbar;