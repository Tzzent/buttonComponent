import React from 'react';
import '../stylesheets/Button.css';

function Button({ columns, sub, name, btn_class, left, right }) {

    return (
        <div className={`${columns} container-btn`}>
            <div className='sub'>
                <p>{sub}</p>
            </div>
            <button className={`btn ${btn_class}`}>{left}{name}{right}</button>
        </div>
    );
}


export default Button;