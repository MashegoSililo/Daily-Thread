import React from 'react';
import {Link} from 'react-router-dom'

const Error =()=> {
    return (<> 
    <div>
        <h3>Error</h3>
        <p>We can't find the page you are looking for, please return to <Link>Home</Link></p>
    </div>
    </>
    )
}

export default Error;