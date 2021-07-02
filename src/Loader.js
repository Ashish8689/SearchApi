import React from 'react'
import './App.css';

function Loader() {
    return (
        <div className="loader">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader
