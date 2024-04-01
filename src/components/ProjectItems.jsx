import React from 'react';

function ProjectItems({ name_of_project, number_of_project, describtion_of_project, clicking }) {
    return (
        <>
            <div className="cursor-default py-2">
                <div className=' bg-white rounded-2xl border-2 border-gray-500 py-2  hover:bg-slate-700 hover:text-white dark:hover:bg-slate-800' onClick={clicking}>
                    <div className=''>
                        <div className='px-4'>
                            <div className='grid grid-cols-2' >
                                <p className='font-semibold text-left'>{name_of_project}</p>
                                <div className=' bg-blue-800 w-6 rounded-full text-center place-self-end'>
                                    <span className='rounded-full self-center text-white'>{number_of_project}</span>
                                </div>
                            </div>
                            {/* <p className='truncate font-thin hover:whitespace-normal '>{describtion_of_project}</p> */}
                            <p className='font-thin'>{describtion_of_project}</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectItems;