import React from 'react';

function Each_name_and_color({ name, color, col_span = "col-span-1" }) {
    let clas_names = `text-sm px-4 py-1 text-center font-semibold rounded-lg border-2
    border-black hover:text-white
    dark:border-white dark:text-white  dark:hover:text-black `;
    function add_space_to_class() {
        clas_names += " ";
    };
    add_space_to_class();
    clas_names += color;
    add_space_to_class();
    clas_names += col_span;
    return (
        <div className={clas_names}>
            {name}
        </div>
    );
}

export default Each_name_and_color;