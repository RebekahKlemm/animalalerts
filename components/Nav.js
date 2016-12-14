import React from 'react';


export default function Nav() {
    return (
            <nav className="navbar navbar-inverse blue">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Brand</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Signup <span className="sr-only">(current)</span></a></li>
                            <li><a href="#/login">Login</a></li>
                            <li><a href="#/user">User</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Link</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}



