import './PlansPopup.css';
import {useRef, useEffect, useState} from 'react';

function PlansPopup ({bookClickedStatus, clickHandler}) {
    const plans_popup = useRef();
    const plans_popup_container = useRef();

    const plans_popup_show_handler = () => {
        if(bookClickedStatus) {

            if(!plans_popup.current.classList.contains('plans-popup-anim'))
                plans_popup.current.classList.add('plans-popup-anim');

            if(!plans_popup_container.current.classList.contains('plans-popup-container-anim'))
                plans_popup_container.current.classList.add('plans-popup-container-anim');

            if(plans_popup.current.classList.contains('plans-popup-close-anim'))
                plans_popup.current.classList.remove('plans-popup-close-anim');
            
        }
        else {      
            
            plans_popup.current.classList.add('plans-popup-close-anim');
            plans_popup_container.current.classList.add('plans-popup-container-close-anim');

            if(plans_popup.current.classList.contains('plans-popup-anim'))
                plans_popup.current.classList.remove('plans-popup-anim');
            if(plans_popup_container.current.classList.contains('plans-popup-container-anim'))
                plans_popup_container.current.classList.remove('plans-popup-container-anim');
        }
    } 

    const closePopupHandler = () => {   
        clickHandler(!bookClickedStatus);
    }

    useEffect(() => {
        plans_popup_show_handler();
    })
    
    return (
        <>
            <div ref={plans_popup} className="plans-popup">
                <div ref={plans_popup_container} 
                className="plans-popup-container">
                    <div className="plans-popup-container-img-container">
                        <img src="./imgs/nat-8.jpg" alt="" />
                        <img src="./imgs/nat-9.jpg" alt="" />
                    </div>
                    <div className="plans-popup-container-text-container">
                        <div className="general-primary-title-div 
                        plans-popup-primary-title-div">
                            <h2 className="general-primary-title 
                            plans-popup-primary-title">START BOOKING NOW</h2>
                        </div>
                        <h3>IMPORTANT – PLEASE READ THESE TERMS BEFORE BOOKING</h3>

                        <div className="plans-popup-container-text-container-textbox">
                            <p className="first-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. </p>
                            <p className="second-para">Proin fermentum leo vel orci porta non pulvinar neque laoreet. Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed euismod nisi porta.</p>
                        </div>

                        <button className="btn-animation green-btn 
                        popup-book-btn">BOOK NOW</button>
                    </div>

                    <button onClick={closePopupHandler} className="popup-close-btn">&#10005;</button>
                </div>
            </div>
        </>
    )
}

export default PlansPopup;