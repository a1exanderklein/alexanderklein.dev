const NavBar = () => {
    return (
        <div className="absolute top-0 left-0 w-full p-8 grid grid-cols-3 items-center text-sm lg:text-lg text-white">
            <a className="justify-self-start" href="/">
                {/* AK Small Logo */}
                <svg 
                    version="1.0" 
                    preserveAspectRatio="xMidYMid meet" 
                    viewBox="16.62 65.23 337.6 221.05"
                    zoomAndPan="magnify" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-8 h-8"
                >
                    <defs>
                    <g />
                    </defs>
                    <g fill="currentcolor" fillOpacity="1">
                    <g transform="translate(28.57111, 286.272614)">
                        <g>
                        <path d="M 195.65625 0 L 139.203125 0 L 139.203125 -31.96875 L 75.265625 -31.96875 L 55.859375 0 L -11.953125 0 L 139.796875 -221.046875 L 195.65625 -221.046875 Z M 139.203125 -76.765625 L 139.203125 -138 L 138.59375 -138 L 102.15625 -76.765625 Z M 139.203125 -76.765625 " />
                        </g>
                    </g>
                    </g>
                    <g fill="currentcolor" fillOpacity="1">
                    <g transform="translate(144.832056, 286.272614)">
                        <g>
                        <path d="M 209.390625 0 L 143.375 0 L 83.046875 -95.578125 L 82.4375 -95.578125 L 82.4375 0 L 25.984375 0 L 25.984375 -221.046875 L 82.4375 -221.046875 L 82.4375 -121.578125 L 83.046875 -121.578125 L 145.46875 -221.046875 L 204.609375 -221.046875 L 131.421875 -110.8125 Z M 209.390625 0 " />
                        </g>
                    </g>
                    </g>
                </svg>
            </a>
            <nav className="justify-self-center">
                {/* <ul className="flex flex-row gap-4 font-bold">
                    <li><a href="/about" className="transform transition duration-100 hover:skew-12 uppercase">about</a></li>
                    <li><a href="/projects" className="transform transition duration-100 hover:skew-12 uppercase">projects</a></li>
                    <li><a href="/resume" className="transform transition duration-100 hover:skew-12 uppercase" >resume</a></li>
                </ul> */}
            </nav>
            <div className="justify-self-end">
                <p className="uppercase font-bold">
                    Have a lucky day!
                </p>
            </div>
        </div>
    );
};

export default NavBar;