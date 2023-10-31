import React from 'react';
import bricks from './assets/db-img1@2x.png';





const Button1 = () => {


    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const handleClick1 = () =>{
        const newWindow = window.open("https://adb-5558582637407295.15.azuredatabricks.net/onboarding?o=5558582637407295#",'dbrick', `width=${screenWidth}, height=${screenHeight}`)
        newWindow.open()
    };
    return(

        <button className='App-button' onClick={handleClick1}>
            <img src={bricks} className="App-logo" alt="bricks" style={imageStyle} onClick={handleClick1}/>
        </button>
    );
};

export default Button1;
