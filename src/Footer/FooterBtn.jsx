import './FooterBtn.css';

function FooterBtn ({content, padding_left, padding_right}) {
    return (
        <>
            <button 
            className="footer-btn"><span className="footer-hvr-anim">{content}</span></button>
        </>
    )
}

export default FooterBtn;