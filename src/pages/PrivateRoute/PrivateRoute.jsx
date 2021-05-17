import React from 'react';
import {Redirect, Route} from "react-router-dom"


function PrivateRoute({children, ...rest}) {
    // const isAuth = JSON.parse(localStorage.getItem('isAuth')) ?? false

    return (
        <Route
            {...rest}
            render={({location}) =>
                true ? (children)
                    : (<Redirect to={{
                        pathname: "/",
                        state: {from: location}
                    }}/>)
            }
        />
    );
}

export default PrivateRoute;