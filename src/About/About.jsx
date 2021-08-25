import './About.css';
import {useEffect} from 'react';

function About () {
    let imgs;
    useEffect ( () => {
        mobileImgHoverLogic()
    })

    const mouseEnterHandler = (index) => {
        for(let j = 0; j < imgs.length; j++) {
            if(index !== j) {
                if(j === 1)
                    imgs[j].classList.add('hoverClassImg2');
                else
                    imgs[j].classList.add('hoverClass');
            }
        }
    }
    

    const mouseLeaveHandler = (index) => {
        for(let j = 0; j < imgs.length; j++) {
            if(index !== j) {
                if(j === 1)
                    imgs[j].classList.remove('hoverClassImg2');
                else
                    imgs[j].classList.remove('hoverClass');
            }
        }
    }

    const mobileImgHoverLogic = () => {
        imgs = document.querySelectorAll('.about-images-container-img');
        for(let i = 0; i < imgs.length; i++) {
            imgs[i].addEventListener('mouseenter', () => {
                mouseEnterHandler(i)
            })
        }

        for(let i = 0; i < imgs.length; i++) {
            imgs[i].addEventListener('mouseleave', () => {
                mouseLeaveHandler(i)
            })
        }
    }

    
    return (
        <>
         <main className="about main-grid">
            <div className="about-primary-title-div">
                <h2 className="about-primary-title">EXCITING TOURS FOR ADVENTUROUS PEOPLE</h2>
            </div>
            <div className="about-description">
                <div className="about-description-container">
                    <h3 className="about-description-title">
                        YOU'RE GOING TO FALL IN LOVE WITH NATURE
                    </h3>
                    <p className="about-description-info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                    </p>
                </div>

                <div className="about-description-container">
                    <h3 className="about-description-title">
                        LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE
                    </h3>
                    <p className="about-description-info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                    </p>
                </div>

                <button className="green-background-btn">Learn more &rarr;</button>
            </div>

            <div className="about-images-container">
                <img className="about-images-container-img about-images-container-img1" src="./imgs/nat-1.jpg" alt="" />
                <img className="about-images-container-img about-images-container-img2" src="./imgs/nat-2.jpg" alt="" />
                <img className="about-images-container-img about-images-container-img3" src="./imgs/nat-3.jpg" alt="" />
            </div>
         </main>
        </>
    )
}

export default About;