import './Booking.css';

function Booking () {
    return (
        <>
            <section className="booking main-grid">
                <div className="booking-background-img">
                    <form className="booking-form" action="">
                        <div className="general-primary-title-div 
                        booking-primary-title-div">
                            <h1 className="general-primary-title 
                            booking-primary-title">
                                START BOOKING NOW
                            </h1>
                        </div>

                        <div className="booking-form-input-div">
                            <input className="booking-form-input booking-form-first-name" 
                            type="text" placeholder="Full name" id="name" required/>

                            <label className="booking-form-input-label" 
                            htmlFor="name">
                                Full Name
                            </label>
                        </div>

                        <div className="booking-form-input-div">
                            <input className="booking-form-input booking-form-email" 
                            type="email" placeholder="Email" id="email" required/>  

                            <label className="booking-form-input-label" htmlFor="email">
                                Email
                            </label>
                        </div>

                        <div className="booking-form-radio-container">
                            <div className="booking-form-radio-container-div">
                                <input className="booking-form-radio-btn" type="radio" 
                                id="radio1" name="booking-form-radio" required/> 

                                <div className="booking-form-custom-radio-btn-div">
                                    <div className="booking-form-custom-radio-btn-outside">
                                        <div className="booking-form-custom-radio-btn-inside">
                                            
                                        </div>
                                    </div>
                                </div>

                                <label className="booking-form-radio-label" 
                                htmlFor="radio1"><span>Small tour group</span></label>
                            </div>

                            <div className="booking-form-radio-container-div">
                                <input className="booking-form-radio-btn" type="radio" 
                                id="radio2" name="booking-form-radio" required/> 

                                <div className="booking-form-custom-radio-btn-div">
                                    <div className="booking-form-custom-radio-btn-outside">
                                    </div>
                                </div>

                                <label className="booking-form-radio-label" 
                                htmlFor="radio2"><span>Large tour group</span></label>
                            </div>
                        </div>

                        <button className="btn-animation booking-form-submit-btn
                         green-btn">NEXT STEP &rarr;</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Booking;