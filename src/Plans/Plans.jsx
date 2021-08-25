import './Plans.css';
import PlanComp from './PlanComp';
import PlansPopup from '../PlansPopup/PlansPopup';

import img1 from './nat-5.jpg';
import img2 from './nat-6.jpg';
import img3 from './nat-7.jpg';
import { useState } from 'react';

function Plans () {
    const [bookBtnStatus, setBookBtnStatus] = useState(false);

    const bookClickHandler = (bookClickStatus) => {
        setBookBtnStatus(bookClickStatus)
    }

    return (
        <>
            <section className="plans main-grid">
                <div className="plans-primary-title-div">
                    <h2 className="plans-primary-title">MOST POPULAR TOURS</h2>
                </div>
                <div className="plans-container">
                    <PlanComp backSrc={img1} 
                    gradientFrom='255,185,0' 
                    gradientTo='255,119,48' heading="THE SEA EXPLORER"
                    price="$297" clickHandler={bookClickHandler} 
                    />
                    <PlanComp backSrc={img2} 
                    gradientFrom='126,213,111' 
                    gradientTo='40,180,133' heading="THE FOREST HIKER"
                    price="$497" clickHandler={bookClickHandler} 
                    />
                    <PlanComp backSrc={img3} 
                    gradientFrom='41,152,255' 
                    gradientTo='86,67,250' heading="THE SNOW ADVENTURER"
                    price="$897" clickHandler={bookClickHandler} 
                    />
                </div>
                <button className="btn-animation green-btn">DISCOVER ALL TOURS!</button>

                 <PlansPopup bookClickedStatus={bookBtnStatus} 
                clickHandler={bookClickHandler}/>
                
            </section>
        </>
    )
}

export default Plans;