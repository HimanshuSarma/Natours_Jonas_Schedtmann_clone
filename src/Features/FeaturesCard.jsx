import './FeaturesCard.css';

function FeaturesCard ({icon, heading, desc}) {
    return (
        <>
            <div className="features-card">
                <i className={icon + " icon"}></i>
                <h3 className="features-card-heading">
                    {heading}
                </h3>
                <p className="features-card-description">{desc}</p>
            </div>
        </>
    )
}

export default FeaturesCard;