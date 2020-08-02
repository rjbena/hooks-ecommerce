import React from 'react';
import {Link} from 'react-router-dom';
import '../css/PageNotFound.css';
export const PageNotFound = () => {
    return (
        <div id="notfound">
            <div className="notfound-bg">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Page Not Found</h2>
                <p>The page you are looking could not be found</p>
                <Link to='/'>return Home</Link>
            </div>
            {/* <!-- This templates was made by Colorlib (https://colorlib.com) --> */}
        </div>

    )
}
