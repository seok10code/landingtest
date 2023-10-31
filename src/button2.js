import React from 'react';
import chat from './assets/cg-img1@2x.png'




const Button2 = () => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const handleClick2 = () =>{

        const newWindow = window.open("https://dwdp-azapp-chatbot-001.azurewebsites.net/",'dongwon', `location=no, width=${screenWidth}, height=${screenHeight}`)
        newWindow.open()
    }
    const imageStyle = {
        width: '400px',
        height: '400px',


    };

    return (

        
        <button className='App-button' onClick={handleClick2}>
             <img src={chat} className="App-logo" alt='logo' style={imageStyle} onClick={handleClick2}/>
        </button>

    );

};



            
export default Button2;
