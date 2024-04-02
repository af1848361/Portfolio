import React from 'react';

function AbouttabView(props) {
    return (
        <>

            <div id="about" className='my-1 dark:bg-black py-8 md:py-22 shadow-sm dark:shadow-xl shadow-slate-500 dark:shadow-blue-800 px-4 md:px-12'>
                <div className=" dark:text-white text-3xl font-semibold">About Me</div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <div className="flex pt-12 font-semibold dark:text-white gap-3">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-2xl">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>
                            </div>
                            <div>
                                <h1 className='text-2xl dark:text-white '>
                                    Education
                                </h1>
                            </div>
                        </div>
                        <div>
                            <div className=' py-6 px-8 dark:text-white'>
                                <ul className='list-outside list-disc'>
                                    <li className='font-semibold text-xl'>
                                        <div className="grid grid-col-2">
                                            <p>
                                                BBIT
                                            </p>
                                            <p className='text-right -mt-7 font-thin md:font-normal'>
                                                Started in 2023
                                            </p>
                                        </div>
                                        <p className='font-light text-left text-'>Currently Doing BBIT From VU (Vuirtal University)...</p>
                                        <div className='grid grid-cols-2 gap-6'>
                                            <p className='font-semibold text-left text-gray-800 dark:text-slate-400 text-xl'>1st Semester</p>
                                            <p className='font-semibold text-left text-gray-800 dark:text-slate-400 text-xl'>3.10/4.0 GPA</p>
                                        </div>

                                    </li>
                                    <li className='font-semibold text-xl'>
                                        <div className="grid grid-col-2">
                                            <p>
                                                FSC
                                            </p>
                                            <p className='text-right -mt-7 font-thin md:font-normal'>
                                                September 2020
                                            </p>
                                        </div>

                                        <p className='dark:text-white font-light  text-left'>Board of Intermediate Gujranwala</p>
                                        <p className='font-semibold text-left text-gray-800 dark:text-slate-400 text-sm'>Grade D</p>
                                    </li>
                                    <li className='font-semibold text-xl'>
                                        <div className="grid grid-col-2">
                                            <p>
                                                (SSC Matric)
                                            </p>
                                            <p className='text-right -mt-7 font-thin md:font-normal'>
                                                July 2015
                                            </p>
                                        </div>
                                        <p className='dark:text-white font-light  text-left'>Board of Intermediate Gujranwala</p>
                                        <p className='font-semibold text-left text-gray-800 dark:text-slate-400 text-sm'>Grade D</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!--This Section is for the Certificates--> */}
                    <div>
                        <div className="flex pt-12 font-semibold dark:text-white gap-3">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                            </div>
                            <div>
                                <h1 className='text-2xl dark:text-white '>
                                    Certificates & Experience
                                </h1>
                            </div>
                        </div>
                        <div>
                            <div className=' py-6 px-8 dark:text-white'>
                                <ul className='list-outside list-disc'>
                                    <li className='font-semibold text-xl'>
                                        <div className="grid grid-col-2  sm:gap-0 md:gap-4 xl:gap-0">
                                            <p>
                                                Kalifa Real Estate(U.A.E)
                                            </p>
                                            <p className='text-right pt-2 sm:-mt-7 font-thin md:font-normal'>
                                                Jan 2022
                                            </p>
                                        </div>
                                        <p className='dark:text-white font-light  text-left'>
                                            <span className='font-medium'>Job Title: </span>
                                            Receptionist</p>
                                        <p className='font-semibold text-left text-gray-800 dark:text-slate-400 text-sm'>Attending the Calls of the Customer, Set the meeting between Broker And Customer.</p>
                                    </li>
                                    <li className='font-semibold text-xl'>
                                        <div className="grid grid-col-2  sm:gap-0 md:gap-4 xl:gap-0">
                                            <p>
                                                IELTS:UKVI (Academic)
                                            </p>
                                            <p className='text-right md:pt-2 sm:-mt-7 font-thin md:font-normal'>
                                                November 2020
                                            </p>
                                        </div>
                                        <p className=' font-light text-left text-gray-500 dark:text-slate-500'>Speaking:6.0,Listening:5.5,
                                            <br className='xl:hidden' />Reading:5.5,Writing:5.5..</p>
                                    </li>
                                    <li className='font-semibold text-xl'>
                                        <div className="grid grid-col-2">
                                            <p>
                                                Turning Machinist
                                            </p>
                                            <p className='text-right -mt-7 font-thin md:font-normal'>
                                                2017
                                            </p>
                                        </div>
                                        <p className='dark:text-white font-light  text-left'>Gujranwala Tools, Dies and Moulds Center (GTDMC)</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AbouttabView;