

const Footer = () => {
    return (
        <div className="flex items-end w-full mt-20 bg-white">
            <footer className="w-full text-gray-700 bg-gray-100 body-font">
                <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                            <img className="size-20 rounded-full" src="https://i.ibb.co/NYJYKpX/restaurant-logo.webp" alt="" />
                        </a>
                        <p className="mt-2 cinzel text-lg font-bold text-gray-500">BISTRO BOSS Restaurant</p>
                    </div>
                    <div className="flex flex-wrap flex-grow text-center lg:pl-20 md:mt-0 md:text-left">
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-2 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Solutions</h2>
                            <nav className="mb-10 list-none">
                                <li>
                                    <a className="text-gray-600 cursor-pointer hover:text-gray-800">Marketing</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 cursor-pointer hover:text-gray-800">Analytics</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 cursor-pointer hover:text-gray-800">Commerce</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 cursor-pointer hover:text-gray-800">Insights</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-2 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</h2>
                            <nav className="mb-10 list-none">
                                <li>
                                    <a className="text-gray-600 cursor-pointer hover:text-gray-800">Pricing</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 cursor-pointer hover:text-gray-800">Documentation</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 cursor-pointer hover:text-gray-800">Guides</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 cursor-pointer hover:text-gray-800">API Status</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-2 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Company</h2>
                            <nav className="mb-10 list-none">
                                <li>
                                    <a className="text-gray-600 cursor-pointer hover:text-gray-800">About</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 cursor-pointer hover:text-gray-800">Blog</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 cursor-pointer hover:text-gray-800">Jobs</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 cursor-pointer hover:text-gray-800">Press</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-center">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                                        <path d="M17.5 6.5h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-7 h-7" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 11-12 0 6 6 0 0112 0z"></path>
                                        <path stroke="none" d="M12 12a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                </div>
            </footer>
        </div>


    );
};

export default Footer;