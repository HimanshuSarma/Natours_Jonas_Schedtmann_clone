import NavigationBtn from './NavigationBtn';
import './Navigation.css';
import React, {useRef} from 'react';

const navButtons = [
        {content: "ABOUT NATOURS", num: "01"}, {content: "YOUR BENEFITS", num: "02"}, 
        {content: "POPULAR TOURS", num: "03"}, {content: "STORIES", num: "04"}, 
        {content: "BOOK NOW", num: "05"}];

function Navigation () {
    const nav_backside = useRef();
    const nav_frontside_ham = useRef();
    const nav_buttons = useRef();
    let navClickStatus = false;

    const navClickHandler = () => {
        navClickStatus = !navClickStatus;
        if(navClickStatus) {
            nav_backside.current.classList.add('nav-backside-anim');
            if(!nav_buttons.current.classList.contains('nav-buttons-open-anim'))
                nav_buttons.current.classList.add('nav-buttons-open-anim');
            nav_buttons.current.classList.add('nav-buttons-open-anim');
            if(nav_buttons.current.classList.contains('nav-buttons-close-anim'))
                nav_buttons.current.classList.remove('nav-buttons-close-anim');
            
            if(!nav_frontside_ham.current.classList.contains('ham-open-anim'))
                nav_frontside_ham.current.classList.add('ham-open-anim');
            
            if(nav_frontside_ham.current.classList.contains('ham-close-anim'))
                nav_frontside_ham.current.classList.remove('ham-close-anim');

        }
        else {
            nav_backside.current.classList.remove('nav-backside-anim');
            if(nav_buttons.current.classList.contains('nav-buttons-open-anim'))
                nav_buttons.current.classList.remove('nav-buttons-open-anim');
            if(!nav_buttons.current.classList.contains('nav-buttons-close-anim'))
                nav_buttons.current.classList.add('nav-buttons-close-anim');

            if(nav_frontside_ham.current.classList.contains('ham-open-anim'))
                nav_frontside_ham.current.classList.remove('ham-open-anim');
            
            if(!nav_frontside_ham.current.classList.contains('ham-close-anim'))
            nav_frontside_ham.current.classList.add('ham-close-anim');
        }
    }

    const btns = navButtons.map((btn, index) => {
        return (
            <React.StrictMode key={index}>
                <NavigationBtn content={btn.content} num={btn.num}/>
            </React.StrictMode>
        )
    })
    return (
        <>
            <div className="nav-container">
                    <div className="nav">
                        <div ref={nav_backside} 
                        className="nav-backside">

                        </div>

                        
                        <div ref={nav_buttons} className="navigation-buttons">
                            {btns}
                        </div>

                        <div onClick={navClickHandler} className="nav-frontside">
                            <div ref={nav_frontside_ham} className="nav-frontside-ham">

                            </div>
                        </div>
                    </div>
                    
            </div>
            
            
            
        </>
    )
}

export default Navigation;