import React from 'react';

function HometabView(props) {
    return (
        <>
            <div id="home" className='my-1 dark:bg-black py-9 md:py-28 flex justify-center shadow-sm dark:shadow-xl shadow-slate-500 dark:shadow-blue-800'>
                <div className="flex flex-col md:flex-row py-2">
                    <div className='px-4 py-1 grid justify-items-center'>
                        <img className='rounded-full shadow-lg shadow-slate-600 dark:shadow-blue-600 size-80' src='https://raw.githubusercontent.com/af1848361/Portfolio/main/src/assets/batmanprofile.jpg' />
                    </div>

                    <div className='self-center px-4 py-5 grid justify-items-center mt-4'>
                        <p className='dark:text-white text-3xl font-semibold sm:text-4xl'>Syed Gohar Ali Naqvi</p>
                        <p className='py-3 text-slate-500 dark:text-blue-800'>__Want to Become a Professional Hacker with Python & Rust...</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HometabView;