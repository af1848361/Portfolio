import { React, useEffect } from 'react';


function PortfolioNavbar(props) {
    useEffect(() => {
        checked_color_mode()
    });

    function checked_color_mode() {
        if (localStorage.getItem('color-theme') === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('dark-mode', true);
            document.getElementById('switch-mode-title').textContent = 'Light Mode'
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('dark-mode', false);
            document.getElementById('switch-mode-title').textContent = 'Dark Mode'
        }
    }

    function clicked_to_change_color_mode(come_from_title) {
        let lightSwitch = document.getElementById('light-switch');
        if (come_from_title === true) {
            lightSwitch.click();
        };
        if (lightSwitch.checked) {
            document.documentElement.classList.add('dark');
            document.getElementById('switch-mode-title').textContent = 'Light Mode'
        } else {
            document.documentElement.classList.remove('dark');
            document.getElementById('switch-mode-title').textContent = 'Dark Mode'
        }

    }

    function navbar_open_close() {
        var list_of_classes = document.getElementById('navbar-cta');
        if (list_of_classes.classList.contains("hidden")) {
            list_of_classes.classList.remove("hidden")
        } else if (!list_of_classes.classList.contains("hidden")) {
            list_of_classes.classList.add("hidden")
        }
    };

    return (
        <>
            <nav className="bg-white dark:bg-black items-center shadow-sm dark:shadow-xl shadow-slate-500 dark:shadow-blue-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-3 ">
                    <a href="" className='flex items-center justify-center space-x-3 rtl:space-x-reverse'>
                        <img src="/src/assets/Logo.png" alt="" className='h-8 dark:bg-white rounded-xl' />
                        <span className='self-center text-xl font-semibold dark:text-white'>
                            Portfolio.
                        </span>
                    </a>
                    <div className='flex md:order-2 space-x-2 md:space-x-1 rtl:space-x-reverse'>
                        <a href='#contact-me'>
                            <button type='button'
                                className='text-sm px-4 py-1 text-center font-semibold rounded-lg border-2
                            bg-white  border-black hover:text-white hover:bg-black
                            dark:border-white dark:bg-black dark:text-white  dark:hover:text-black  dark:hover:bg-white ' >
                                Contact me
                            </button>
                        </a>
                        <button data-collapse-toggle="navbar-cta" type='button'
                            className='inline-flex items-center p-2 w-8 h-8 justify-center rounded-lg md:hidden 
                            border-2 border-black font-bold
                            hover:bg-black hover:text-white
                            dark:hover:bg-white dark:hover:text-black
                            dark:text-white dark:border-white' aria-controls="navbar-cta" aria-expanded="false" onClick={navbar_open_close}>
                            {/* <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg> */}
                            &#9776;
                        </button>
                    </div>
                    <div id='navbar-cta' className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1 
                    dark:text-white text-center'>
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-black dark:border-white">
                            <li className='hover:font-semibold'>
                                <a href="#home" className="block py-2 px-3 md:p-0 " aria-current="page">Home</a>
                            </li>
                            <li className='hover:font-semibold'>
                                <a href="#about" className="block py-2 px-3 md:p-0 ">About</a>
                            </li>
                            <li className='hover:font-semibold'>
                                <a href="#projects" className="block py-2 px-3 md:p-0 ">Projects</a>
                            </li>
                            <li className='hover:font-semibold'>
                                <a href="#know" className="block py-2 px-3 md:p-0 ">What I Know</a>
                            </li>
                            <li className='hover:font-semibold'>
                                <div className="grid grid-rows-1 grid-flow-col text-center items-center justify-center py-1">
                                    <input id='light-switch' type="checkbox" className="light-switch sr-only row-auto" onClick={() => {
                                        clicked_to_change_color_mode(false);
                                    }} />
                                    <label className="relative cursor-pointer items-center row-auto px-1" htmlFor="light-switch">
                                        <svg className="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                            <path className="fill-orange-400" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                                            <path className="fill-yellow-500" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                                        </svg>
                                        <svg className="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                            <path className="fill-slate-800" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                                            <path className="fill-blue-600" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
                                        </svg>
                                    </label>
                                    <span id='switch-mode-title' className="xl:hidden lg:hidden md:hidden relative cursor-pointer" onClick={() => {
                                        clicked_to_change_color_mode(true);
                                    }}></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default PortfolioNavbar;
