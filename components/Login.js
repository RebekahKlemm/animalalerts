import React from 'react';


export default function Login() {
    return (
        <form id="new-login-form" className="form-group" style={{marginTop: '20px'}}>
            <input
                id = "phone-input"
                className="form-control"
                placeholder="Enter phone number"
                data-touched="false"
            />
            <input
                id = "password"
                className="form-control"
                placeholder="Enter password"
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

