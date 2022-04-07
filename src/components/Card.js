import React from 'react';
import './Card.css';
const profileLogo = 'https://avatars.githubusercontent.com/u/36723858?s=400&u=4e600b2bf9546360e62ed6adcd288721eaf7fe90&v=4';


export default function Card() {
    
    return (  
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                        <img src={ profileLogo } alt='' height={100} width={100} />
                 </div>
             </div>
             <div className='lower-container'>
                <h3>SpyroHB</h3>
                <h4>Web Developer</h4>
                <h5>About me : </h5>
                <p>I'm a Self-Taught Programmer,I use Python & JavaScript to make cool stuff. Currently im learning ReactJS & Django</p>
                <button class="fa fa-facebook"></button>
                <button   class="fa fa-twitter"></button>
                <button class="fa fa-github"></button>
              </div>
              <div className='contact'>
                <button >Email me !</button>
               </div>
         </div>
     );
     
}

