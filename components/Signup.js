import React from 'react';


export default function Signup(props) {
    return (
        <form id="new-signup-form" className="form-group" style={{marginTop: '20px'}} onSubmit={props.handleSubmit}>
            <input
                id = "first-name-input"
                className="form-control"
                placeholder="Enter first name"
                data-touched="false"
            />
            <input
                id = "last-name-input"
                className="form-control"
                placeholder="Enter last name"
                data-touched="false"
            />
            <input
                id = "address-input"
                className="form-control"
                placeholder="Enter address"
                data-touched="false"
            />
            <input
                id = "phone-input"
                className="form-control"
                placeholder="Enter phone number"
                data-touched="false"
            />
            <button id="signup-submit" disabled="true" type="submit" form="new-signup-form" value="Submit"
                    className="btn btn-primary btn-block">
                <span className="glyphicon glyphicon-plus"></span> SUBMIT
            </button>
            <div id="alert-warning" hidden="true" className="alert alert-warning">Please enter a valid name</div>
        </form>
    )
}

