import React from 'react';
import FooterBtn from './FooterBtn';
import './Footer.css';

const footer_btn_arr = ["COMPANY", "CONTACT US", "CAREERS", "PRIVACY POLICY", "TERMS"];

function Footer () {
    const footer_btns = footer_btn_arr.map((footer_btn, index) => {
        return (
            <React.StrictMode key={index}>
                <FooterBtn
                content={footer_btn}/>
            </React.StrictMode>
        )
    })
    return (
        <>
            <section className="footer main-grid">
                <img className="footer-logo" src="./imgs/logo-green-1x.png" alt="" />
                <div className="footer-buttons-wrapper footer-line-above">
                    <div className="footer-buttons">
                        {footer_btns}
                    </div>
                </div>
                <div className="footer-copyright-div footer-line-above">
                    <p className="footer-copyright-div-content">
                        Built by <span className="footer-hvr-anim">JONAS SCHMEDTMANN</span> for his online course <span className="footer-hvr-anim">ADVANCED CSS AND SASS</span> . Copyright © by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schmedtmann, is of course highly appreciated!
                    </p>
                </div>
            </section>
        </>
    )
}

export default Footer;