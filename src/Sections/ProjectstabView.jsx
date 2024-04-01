
import React, { useEffect, useInsertionEffect, useState } from 'react';

import ProjectItems from '../components/ProjectItems';

function ProjectstabView(props) {

    let list_of_projects_items = [
        {
            'name': "API",
            'number_of_project': 5,
            'describtion': "API's Developed in Flask & Django.",
            "id": "api",
            'non-hidden': true,
        },
        {
            'name': "Selenium Bot",
            'number_of_project': 4,
            'describtion': "Web Scraper & Web Crawler. What's App Automate.",
            'id': 'selenium',
            'non-hidden': false,


        },
        {
            'name': "Desktop Application",
            'number_of_project': 3,
            'describtion': "Application Like Snake Game and also a YouTube Downloader.",
            'id': 'desk',
            'non-hidden': false,
        },


    ];

    function project_details_to_hidden_html_element(name, shown) {
        let titile = document.getElementById(name + '-title');
        titile.hidden = shown;
        let detail = document.getElementById(name + '-detail');
        detail.hidden = shown;
    }

    function remove_and_add_hidden_class(id_name, first_time = false) {
        for (let i of list_of_projects_items) {
            if (i['id'] == id_name) {
                if (i[`non-hidden`] && !first_time) {
                    break
                } else {
                    i['non-hidden'] = !i['non-hidden'];
                    project_details_to_hidden_html_element(i['id'], !i['non-hidden']);
                }
            } else {
                i['non-hidden'] = false;
                project_details_to_hidden_html_element(i['id'], !i['non-hidden']);
            }
        }
    }

    return (
        <>
            <div id="projects" className='my-1 dark:bg-black py-8 md:py-22 shadow-sm dark:shadow-xl shadow-slate-500 dark:shadow-blue-800 px-4 md:px-12'>
                <div className=" dark:text-white text-3xl font-semibold ">Projects</div>
                <div id='divider' className='grid grid-cols-6 gap-4 justify-center' >
                    <div id='project-name-divider' className="col-span-6 md:col-span-2">
                        {list_of_projects_items.map((project_item, index) =>
                            <ProjectItems key={index} name_of_project={project_item.name} number_of_project={project_item.number_of_project} describtion_of_project={project_item.describtion} clicking={() => { remove_and_add_hidden_class(project_item.id) }} />

                        )
                        }
                    </div>
                    <div id='project-detail-divider' className="col-span-6 md:col-span-4 py-2">

                        <div className='border-2 rounded-xl border-gray-700 h-1/2 overflow-y-auto dark:bg-white' style={{
                            height: "405px",
                        }}>
                            <div id='detail' className='px-4'>
                                <h1 id='api-title' className='font-semibold text-2xl'>API</h1>
                                <div id='api-detail' className='py-2'>
                                    <ul className='list-inside list-disc'>
                                        <li className=''>
                                            <h1 className='font-semibold inline-flex'>YouTube Downloader Using Flask.</h1>
                                            <p>
                                                I Use the Flask  Framework of Python to develop API. Which Can Download the YouTube Videos as well as the Hole Playlist.
                                                In this project i use some libraries. Like Yt-dlp  for downloading video from youtube. The Front End of this Project was built on the React js.
                                            </p>
                                            <h1 className='font-semibold'>Video:</h1>
                                            <div className='grid justify-center'>
                                                <iframe className=' rounded-2xl mx-12 md:mx-0 w-auto h-auto' src={"https://drive.google.com/file/d/1me_xe9JYU8NH86ZNoS2xAeAvSfu1QSxK/preview"} type="video/mp4" allowFullScreen />
                                            </div>
                                        </li>
                                        <li className='py-2'>
                                            <h1 className='font-semibold inline-flex' >To Do List</h1>
                                            <p>
                                                A simple to do app where you can add and remove tasks.In this Project I use Flask as Backend Framework. I store the Data in a json File. In This Project there was only HTML and Js in the Place of CSS i used the Bootstrap.
                                            </p>
                                        </li>
                                        <li className='py-2'>
                                            <h1 className='font-semibold inline-flex' >Sharing Files From Laptop to Mobile</h1>
                                            <p>
                                                In This Project the file which is available on the laptop can be Download on the other Devies (like: Mobile or Another laptop). As Long as Both Devieses are Connected with the same Network.
                                            </p>
                                        </li>
                                        <li className='py-2'>
                                            <h1 className='font-semibold inline-flex' >Weekly Schedule</h1>
                                            <p>
                                                I used this Api to make my Weekly Schedule. Moslty or you can say the main functionality was writen in JS. On the Click on the Submit Button the the data will be store in the variable the data type of that variable is dict. After reciving that variable that data will be store in a Json File.
                                            </p>
                                        </li>
                                        <li className='py-2'>
                                            <h1 className='font-semibold inline-flex' >Django</h1>
                                            <p>
                                                In this i just convert my both youtube downloader and to do list project into one project of Django.
                                            </p>
                                        </li>
                                    </ul>

                                </div>
                                <h1 id='selenium-title' className='font-semibold text-2xl'>Selenium Bot</h1>
                                <div id='selenium-detail' className='py-2 '>
                                    <ul className='list-inside list-disc'>
                                        <li className=''>
                                            <h1 className='font-semibold inline-flex'>What's App Bot</h1>
                                            <p>
                                                I Used This Bot to send messages on what's app for Real Estate to reach the client. It is written using Python and Selenium.It can Send messages to selected Range with diffrent Mobile Numbers.The Company Provied me the List and i have to Complete it End of the Weak. I do this work for <span className='font-semibold underline'>Royal Homes Real Estate.</span>
                                            </p>
                                        </li>

                                        <li className='py-2'>
                                            <h1 className='font-semibold inline-flex' >Sending Messages On Sim</h1>
                                            <p>
                                                I used the same method of What's  App Automation and use it on messages which is provieded by Google with this i can send messages on the Sim. The Reason i was able to do That Beacause the Messages have a web interface as well you just have to scan it with your mobile and done. I do this work for <span className='font-semibold underline'>Royal Homes Real Estate.</span>
                                            </p>
                                        </li>
                                        <li className='py-2'>
                                            <h1 className='font-semibold inline-flex' >Collected The Broker Data</h1>
                                            <p>
                                                I did this Project for Fun or You  Can Use It For Learning Purpose. i did web Sraping using Selenium To collect the Broker Data like Phone Number and Profile, How much properties he poston that site, how Many Languages he can Speak,etc..
                                            </p>
                                        </li>
                                        <li className='py-2'>
                                            <h1 className='font-semibold inline-flex' >Web Scraper For Steam</h1>
                                            <p>
                                                I used this bot to collect the data and check it with the list of games names i provieded. if that game is free then it will notify me.
                                            </p>
                                        </li>
                                    </ul>

                                </div>
                                <h1 id='desk-title' className='font-semibold text-2xl'>Desktop Application</h1>
                                <div id='desk-detail' className='py-2 '>
                                    <ul className='list-inside list-disc'>
                                        <li className=''>
                                            <h1 className='font-semibold inline-flex'>YouTube Downloader</h1>
                                            <p>
                                                I use the Same Library YT-DLP to Download the YouTube Videos and Playlist.
                                            </p>
                                        </li>
                                        <li className='py-2'>
                                            <h1 className='font-semibold inline-flex' >Converter Video To Audio</h1>
                                            <p>
                                                I Made this to Convert the songs videos i download  from YouTube in mp3 format.
                                            </p>
                                        </li>
                                        <li className='py-2'>
                                            <h1 className='font-semibold inline-flex' >Games</h1>
                                            <p>
                                                I create A lot of Games like Snake Games, Hange man, Rock paper scissors, tic-tac-toe and much more. A really Long time Ago When i start learing Python.
                                            </p>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>

    );
}

export default ProjectstabView;