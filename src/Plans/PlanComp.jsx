import './PlanComp.css';
import {useRef, useEffect} from 'react';

function PlanComp(props) {
    const plans_comp_front_img = useRef();
    const plans_comp_frontside = useRef();
    const plans_comp_backside = useRef();
    const plans_comp_heading_background = useRef();
    const plans_comp_front_header = useRef();
    const plans_comp_front_price_container = useRef();
    

    const bookClickHandler = () => {
        props.clickHandler(true);
    }

    useEffect(() => {
        stylesHandler();
    })

    const stylesHandler = () => {
        plans_comp_front_img.current.style.backgroundImage = `linear-gradient(to right bottom, 
        rgba(${props.gradientFrom},1), rgba(${props.gradientTo},1)), 
        url(${props.backSrc})`;
        
        plans_comp_backside.current.style.backgroundImage = `linear-gradient(to right bottom, 
            rgba(${props.gradientFrom},1), rgba(${props.gradientTo},1))`

        plans_comp_heading_background.current.style.backgroundImage = `linear-gradient(to right bottom, 
            rgba(${props.gradientFrom},0.7), rgba(${props.gradientTo},0.7))`;     
            
        plans_comp_front_price_container.current.style.backgroundImage = `linear-gradient(to right bottom, 
            rgba(${props.gradientFrom},1), rgba(${props.gradientTo},1))`;
    }
    return (
        <>
            <div className="plan-comp">
                <div ref={plans_comp_frontside} 
                className="plan-comp-card plan-comp-front">
                    <div ref={plans_comp_front_img} className="plan-comp-front-img-container">
                    </div>

                    <div className="plan-comp-front-features">
                        <h4 ref={plans_comp_front_header} className="plan-comp-front-features-heading">
                            <span ref={plans_comp_heading_background}>
                            {props.heading}</span>
                        </h4>
                        <ul>
                            <li>3 day tour</li>
                            <li>Up to 30 people</li>
                            <li>2 tour guides</li>
                            <li>Sleep in cozy hotels</li>
                            <li>Difficulty:easy</li>
                        </ul>
                    </div>

                    <div ref={plans_comp_front_price_container} className="plan-comp-front-price-container">
                        <div className="plan-comp-front-price-container-content">
                            <p className="plan-comp-front-price-container-content-header 
                            plan-comp-price-container-header">ONLY</p>
                            <p className="plan-comp-front-price-container-content-pricetag 
                            plan-comp-price-container-pricetag">
                            {props.price}</p>
                            <button onClick={() => {
                                bookClickHandler()
                            }} className="plan-comp-front-price-container-content-button 
                            btn-animation">BOOK NOW!</button>
                        </div>
                    </div>
                </div>
                <div ref={plans_comp_backside} className="plan-comp-card plan-comp-back">
                    <div className="plan-comp-price-container" >
                      <div className="plan-comp-price-container-content">
                        <p className="plan-comp-price-container-header">ONLY</p>
                        <p className="plan-comp-price-container-pricetag">
                        {props.price}</p>
                        <button onClick={() => {
                                bookClickHandler()
                            }} className="btn-animation">BOOK NOW!</button>
                      </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default PlanComp;