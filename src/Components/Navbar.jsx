
const Navbar = () => {

    //navbar dropdowns
    const catalogue = <><details>
        <summary className="hover:text-green-500">How it works</summary>
        <ul className="p-2">
            <li className="hover:text-green-500"><a>How Printify Works</a></li>
            <li className="hover:text-green-500"><a>Print On Demand</a></li>
            <li className="hover:text-green-500"><a>Printify Quality Promise</a></li>
            <li className="hover:text-green-500"><a>What to sell</a></li>
        </ul>
    </details></>

    const services = <><details>
        <summary className="hover:text-green-500">Services</summary>
        <ul className="p-2">
            <li className="hover:text-green-500"><a>How Printify Works</a></li>
            <li className="hover:text-green-500"><a>Print On Demand</a></li>
            <li className="hover:text-green-500"><a>Printify Quality Promise</a></li>
            <li className="hover:text-green-500"><a>What to sell</a></li>
        </ul>
    </details></>

    const useCases = <><details>
        <summary className="hover:text-green-500">Use-cases</summary>
        <ul className="p-2">
            <li className="hover:text-green-500"><a>How Printify Works</a></li>
            <li className="hover:text-green-500"><a>Print On Demand</a></li>
            <li className="hover:text-green-500"><a>Printify Quality Promise</a></li>
            <li className="hover:text-green-500"><a>What to sell</a></li>
        </ul>
    </details></>

    const needHelp = <><details>
        <summary className="hover:text-green-500">Need help?</summary>
        <ul className="p-2">
            <li className="hover:text-green-500"><a>How Printify Works</a></li>
            <li className="hover:text-green-500"><a>Print On Demand</a></li>
            <li className="hover:text-green-500"><a>Printify Quality Promise</a></li>
            <li className="hover:text-green-500"><a>What to sell</a></li>
        </ul>
    </details></>

//all navbar information
    const dropDowns = <>
        <li className="hover:text-green-500"><a>Catalogue</a></li>
        <li>{catalogue}</li>
        <li className="hover:text-green-500"><a>Pricing</a></li>
        <li className="hover:text-green-500"><a>Blogs</a></li>
        <li>{services}</li>
        <li>{useCases}</li>
        <li>{needHelp}</li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-md">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-80 p-2 shadow">
                        {dropDowns}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-green-500">Printify</a>
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