import React from 'react';

import Each_name_and_color from './Each_name_and_color';

function KnowComponent({ Container_name, list_of_things }) {


    return (
        <>
            <div className="border-2 border-gray-600 text-center rounded-xl py-2 grid justify-items-center place-content-center md:h-36">
                <h1 className='font-semibold text-2xl dark:text-white'>{Container_name}</h1>
                <div className="grid grid-cols-3 gap-2 py-3 justify-center w-fit  px-2 md:px-1 ">
                    {list_of_things.map((each_item, index) =>
                        <Each_name_and_color key={index} name={each_item.name} color={each_item.color} col_span={each_item.col_span} />
                    )}
                </div>
            </div >
        </>
    );
}

export default KnowComponent;