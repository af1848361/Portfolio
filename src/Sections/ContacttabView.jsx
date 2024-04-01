import React from 'react';

function ContacttabView(props) {

    return (
        <>
            <div id="contact-me" className='my-1 py-8 md:py-22 dark:bg-black shadow-sm dark:shadow-xl shadow-slate-500 dark:shadow-blue-800 '>
                <div className="grid grid-rows-2 justify-center  dark:text-white text-3xl font-semibold">
                    <div>
                        <p>
                            Contact
                        </p>
                    </div>
                    <div className='self-center text-gray-700 dark:text-gray-800 -mt-7 '>
                        <p className='text-sm font-semibold'> -- Get In Touch</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 justify-evenly">
                    {/* the line i eidit again to adjust the details  */}
                    <div className='col-span-3 md:col-span-1 grid sm:justify-normal md:-ms-16'>
                        <div className='pb-2'>
                            <div className="grid grid-cols-10 justify-center">
                                <div className="md:col-span-3 col-span-2 sm:col-span-4 grid sm:justify-end justify-center ">
                                    <div className=" grid justify-center pt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8  dark:text-blue-700 pt-0 md:pt-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="md:col-span-7 sm:col-span-6 col-span-8 text-start md:ps-2 sm:ps-2">
                                    <h2 className=' font-semibold dark:text-white text-xl' >+92-304-1038639</h2>
                                    <p className='text-sm dark:text-white -mt-1'>The <span className='underline text-gray-700 dark:text-blue-800'>What's App</span> is Also Available.</p>
                                </div>
                            </div>
                        </div>
                        <div className='pb-2'>
                            <div className="grid grid-cols-10 md:justify-normal justify-center">
                                <div className="md:col-span-3 col-span-2 sm:col-span-4 grid sm:justify-end justify-center ">
                                    <div className=" grid justify-center pt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 dark:text-blue-700 pt-0 md:pt-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="md:col-span-7 sm:col-span-6 col-span-8 text-start md:ps-2 sm:ps-2">
                                    <h2 className=' font-semibold dark:text-white text-xl' >Sialkot, Punjab</h2>
                                    <p className='text-sm dark:text-white -mt-1'>I am Currently Living in College Road <span className='underline text-gray-700 dark:text-blue-800'>Daska</span>.</p>
                                </div>
                            </div>
                        </div>
                        <div className='pb-2'>
                            <div className="grid grid-cols-10 md:justify-normal justify-center">
                                <div className="md:col-span-3 col-span-2 sm:col-span-4 grid sm:justify-end justify-center ">
                                    <div className=" grid justify-center pt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8  dark:text-blue-700 pt-0 md:pt-1 ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="md:col-span-7 sm:col-span-6 col-span-8 text-start md:ps-2 sm:ps-2 md:pt-1">
                                    <h2 className=' font-semibold dark:text-white text-xl md:text-sm xl:text-xl' >isekaianime48@gmail.com</h2>
                                    <p className='text-sm dark:text-white -mt-1'>You Can Also Contact Me on This <span className='underline text-gray-700 dark:text-blue-800'>Email Address</span>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-2 grid justify--center ps-5 md:ps-3 px-4">
                        <form action="https://formsubmit.co/3c5612bc90f70e6ab6349c544b489b2c" method="POST" >
                            <div className="grid grid-cols-2 gap-2">
                                <div className='col-span-2 md:col-span-1'>
                                    <h2 className='grid font-semibold text-2xl justify-start dark:text-white '>
                                        How Can I Help you?</h2>
                                    <div className='grid container'>

                                        <input id='name' name='name' className='block my-1 w-full px-2 py-1 h-8 border-2 border-gray-500 rounded-lg bg-gray-50 focus:ring-black   dark:border-blue-600 dark:placeholder-gray-400  dark:focus:ring-blue-600 dark:focus:border-blue-500' placeholder='FullName' required />
                                        <input id='email' type='email' name='email' className='block my-1 w-full px-2 py-1 h-8 border-2 border-gray-500 rounded-lg bg-gray-50 focus:ring-black  dark:border-blue-600 dark:placeholder-gray-400  dark:focus:ring-blue-600 dark:focus:border-blue-500' placeholder='Email' required />
                                        <input id='subject' name='subject' className='block my-1 w-full px-2 py-1 h-8 border-2 border-gray-500 rounded-lg bg-gray-50 focus:ring-black   dark:border-blue-600 dark:placeholder-gray-500  dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Subject' required />

                                        <button type='submit'
                                            className='text-sm px-4 py-1 text-center font-semibold rounded-lg border-2
                                            bg-white  border-black hover:text-white hover:bg-black
                                            dark:border-white dark:bg-black dark:text-white  dark:hover:text-black  dark:hover:bg-white  hidden md:block md:mt-3 ' >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                                <div className='col-span-2 md:col-span-1 md:mt-8 '>
                                    <div className="grid container">
                                        <textarea id='message' name='message' className='block my-1 w-full px-2 py-1 h-32 md:h-28 border-2 border-gray-500 rounded-lg bg-gray-50 focus:ring-black  dark:border-blue-600 dark:placeholder-gray-500  dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Message' required />

                                        <button type='submit'
                                            className='text-sm px-4 py-1 text-center font-semibold rounded-lg border-2
                                            bg-white  border-black hover:text-white hover:bg-black
                                            dark:border-white dark:bg-black dark:text-white  dark:hover:text-black  dark:hover:bg-white  md:hidden mt-2' >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
}

export default ContacttabView;