import React from 'react';

import KnowComponent from '../components/KnowComponent';

function WhatiknowtabView(props) {


    let front_end_list = [
        {
            name: "HTML",
            color: " bg-orange-400",
            col_span: "",
        },
        {
            name: "CSS",
            color: " bg-sky-500",
            col_span: "",
        },
        {
            name: "JS",
            color: " bg-yellow-400",
            col_span: "",
        },
        {
            name: "React JS",
            color: " bg-sky-600",
            col_span: "col-span-3 ",
        },

    ];

    let back_end_list = [
        {
            name: "Python",
            color: "bg-gradient-to-r from-blue-500 from-50% to-yellow-400 to-50%",
            col_span: "",
        },
        {
            name: "Flask",
            color: " bg-gradient-to-r from-sky-300 from-50% to-gray-400 to-50% ",
            col_span: "",
        },
        {
            name: "Django",
            color: " bg-green-400",
            col_span: "",
        },

    ];


    let auto_list = [
        {
            name: "Selenium",
            color: " bg-gray-600",
            col_span: "",
        },
        {
            name: "BS4",
            color: "bg-blue-500",
            col_span: "",
        },
        {
            name: "Data Analysis",
            color: "bg-gradient-to-r from-blue-500 via-yellow-400 to-gray-500",
            col_span: "col-span-3 md:col-span-1 ",
        },

    ];
    return (
        <>
            <div id="know" className='my-1 dark:bg-black py-8 md:py-22 shadow-sm dark:shadow-xl shadow-slate-500 dark:shadow-blue-800 px-4 md:px-12'>
                <div className=" dark:text-white text-3xl font-semibold">What I Know</div>
                <div className='my-3'>
                    <div className="grid grid-cols-3 gap-1">
                        <div className='col-span-3 md:col-span-1'>
                            <KnowComponent
                                Container_name={"FrontEnd"}
                                list_of_things={front_end_list}

                            />

                        </div>

                        <div className='col-span-3 md:col-span-1'>
                            <KnowComponent
                                Container_name={"BackEnd"}
                                list_of_things={back_end_list}
                            />
                        </div>

                        <div className='col-span-3 md:col-span-1'>
                            <KnowComponent
                                Container_name={"Automation"}
                                list_of_things={auto_list}

                            />
                        </div>
                    </div>
                </div>


            </div >

        </>
    );
}

export default WhatiknowtabView;