import './Testimonials.css';


function Testimonials () {
    return (
        <>
            <section className="testimonials main-grid">
                
                <video className="testimonials-background-video" 
                src="./imgs/video.mp4" autoPlay muted loop></video>

                <div className="general-primary-title-div 
                testimonials-primary-title-div">
                    <h2 className="general-primary-title">WE MAKE PEOPLE GENUINELY HAPPY</h2>
                </div>

                <div className="testimonials-container testimonials-container-1">
                    <div className="testimonials-container-wrapper-img-container">
                        <img className="testimonials-container-wrapper-img" src="./imgs/nat-8.jpg" alt="" />
                        <figcaption className="testimonials-container-wrapper-img-caption">
                        MARY SMITH
                        </figcaption>
                    </div>
                    <div className="testimonials-container-text-wrapper">
                        <div className="testimonials-container-text-wrapper-header">
                            I HAD THE BEST WEEK EVER WITH MY FAMILY
                        </div>
                        <p className="testimonials-container-text-wrapper-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                        </p>
                    </div>
                </div>

                <div className="testimonials-container testimonials-container-2">
                    <div className="testimonials-container-wrapper-img-container">
                        <img className="testimonials-container-wrapper-img" src="./imgs/nat-9.jpg" alt="" />
                        <figcaption className="testimonials-container-wrapper-img-caption">
                        JACK WILSON
                        </figcaption>
                    </div>
                    <div className="testimonials-container-text-wrapper">
                        <div className="testimonials-container-text-wrapper-header">
                             WOW! MY LIFE IS COMPLETELY DIFFERENT NOW
                        </div>
                        <p className="testimonials-container-text-wrapper-text">
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. 
                        </p>
                    </div>
                </div>

                <button className="green-background-btn read-stories-btn">Read all stories &rarr;</button>
            </section>
        </>
    )
}

export default Testimonials;