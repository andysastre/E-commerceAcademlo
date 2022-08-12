import React from 'react';
import "../style/loadingScreen.css"
import {Spinner} from "react-bootstrap"


const LoadingScreen = () => {
    return (
        <div className='overlay'>
          Loading...
          <Spinner animation="grow" variant="dark" />
        </div>
    );
};

export default LoadingScreen;