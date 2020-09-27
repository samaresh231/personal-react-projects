import React from 'react';
import './Loader.css';

class Loader extends React.Component {
    render(){
        return(
            <div className="Loader-container">
                <div className="Loader"></div>
            </div>
        );
    }
}

export default Loader;