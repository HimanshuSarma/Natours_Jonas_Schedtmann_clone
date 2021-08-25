import FeaturesCard from './FeaturesCard';
import './Features.css';

function Features ()
 {
    return (
        <>
            <section className="features main-grid">
                <div className="features-card-container">
                    <FeaturesCard icon="icon-basic-world"
                     heading="EXPLORE THE WORLD"
                     desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
                     className="features-card-container-card-1">H</FeaturesCard>
                    <FeaturesCard icon="icon-basic-compass"
                      heading="MEET NATURE"
                      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
                     className="features-card-container-card-2">G</FeaturesCard>
                    <FeaturesCard icon="icon-basic-map"
                      heading="FIND YOUR WAY"
                      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
                     className="features-card-container-card-3">M</FeaturesCard>
                    <FeaturesCard icon="icon-basic-heart"
                      heading="LIVE A HEALTHIER LIFE"
                      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
                     className="features-card-container-card-4">N</FeaturesCard>
               </div>
            </section>
        </>
    )
 }

 export default Features;













 
