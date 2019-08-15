import React from 'react'

export default function Default(props) {
    console.log(props)
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title text-uppercase-pt-5">
                    <h1 className="display3">
                        404</h1>
                        <h2>Error</h2>
                        <h3>page not found</h3>
                        <h4>the requested url <span className="text-danger">{props.location.pathname}</span> was not found</h4>
                </div>
            </div>
        </div>
    )
}
