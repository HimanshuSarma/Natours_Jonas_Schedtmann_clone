import './NavigationBtn.css';

function NavigationBtn ({content, num}) {
    return (
        <>
            <button className="navigation-list-btn"><span>{num}</span>{content}</button>
        </>
    )
}

export default NavigationBtn;