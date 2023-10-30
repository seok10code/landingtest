import React from 'react';
// import bricks from '/home/seok10code/anaconda3/envs/dongwon_start/dongwon-starting-web/src/assets/db-img1@2x.png';





const Button1 = () => {


    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const handleClick1 = () =>{
        const newWindow = window.open("https://adb-5558582637407295.15.azuredatabricks.net/onboarding?o=5558582637407295#",'dbrick', `width=${screenWidth}, height=${screenHeight}`)
        newWindow.open()
    };
    return(

        <button className='App-button' onClick={handleClick1}>
            <img src={require('./assets/db-img1@2x.png')} className="App-logo" alt="bricks" onClick={handleClick1}/>
        </button>
    );
};

export default Button1;