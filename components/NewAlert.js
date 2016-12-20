import React, { Component } from 'react';
import {Link} from 'react-router';
import InterestOptions from './InterestOptions';


export default function(props) {
    console.log('**************props', props)
    return (
        <form id="new-alert-form" className="form-group" style={{marginTop: '20px'}} onSubmit={e => props.addAlert(e)}>
            <p>Select Interest Categories to receive this alert:</p>
                <InterestOptions allInterests={props.allInterests} handleInputChange={props.handleInputChange}/>
                <p/>
            <input
                id="to-input"
                name="to"
                className="form-control"
                placeholder="Enter recipient phone number without spaces or dashes"
                onChange={e => props.handleInputChange(e)}
                value={props.to}
            />

            {/*<input*/}
                {/*id="from-input"*/}
                {/*name="from"*/}
                {/*className="form-control"*/}
                {/*placeholder="Enter your phone number without spaces or dashes"*/}
                {/*onChange={e => props.handleInputChange(e)}*/}
                {/*value={props.from}*/}
            {/*/>*/}
            <input
                id="body-input"
                name="body"
                className="form-control"
                placeholder="Enter body of alert"
                onChange={e => props.handleInputChange(e)}
                value={props.body}
            />
            <button id="alert-submit" type="submit" form="new-alert-form" value="Submit"
                    className="btn btn-primary btn-block">
                <span className="glyphicon glyphicon-plus"></span> SUBMIT
            </button>
            <div id="alert-warning" hidden="true" className="alert alert-warning">Please enter a valid name</div>
        </form>
    )
}

