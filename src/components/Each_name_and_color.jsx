import React from 'react';

function Each_name_and_color({ name, color, col_span = "col-span-1" }) {
    let clas_names = "border text-center px-4 py-1 rounded-xl font-semibold text-white shadow grid place-content-center";
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