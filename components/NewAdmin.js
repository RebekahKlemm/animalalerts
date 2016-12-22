// import React, { Component } from 'react';
//
// export default function(props) {
//     console.log('**************NewAdmin props', props)
//     return (
//         <div>
//             <h3>Add a New Admin</h3>
//             <div className="dropdown">
//                 <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
//                     <span className="caret"/>
//                 </button>
//                 <ul className="dropdown-menu">
//                     <li><a href="#">HTML</a></li>
//                     <li><a href="#">CSS</a></li>
//                     <li><a href="#">JavaScript</a></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

import React from 'react';

const NewAdmin = (props) => {
    console.log('NewAdmin props----->', props)

    const handleChange = props.handleInputChange;
    const inputValue = props.inputValue;

    return (
        <div>
    <div className="dropdown">
        <select className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
            <span className="caret"/></select>
        <ul className="dropdown-menu">
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
        </ul>
    </div>
        <form className='form-group' style={{marginTop: '20px'}} onSubmit={props.addAdmin}>
            <input
                onChange={handleChange}
                value={inputValue}
                className='form-control'
                placeholder="Enter user name"
            />
            <button type="submit" form="new-admin-form" value="Submit"
                    className="btn btn-primary btn-block">
                <span className="glyphicon glyphicon-plus"/> SUBMIT
            </button>
        </form>
            </div>
    )
};

export default NewAdmin;

