import "../../styles/components/heroIllustration.css";

function HeroIllustration({ className = "" }) {
    return (
        <div className={`hero-illustration ${className}`}>

            <div className="floating-card card-one">
                <img
                    src="https://picsum.photos/120"
                    alt="Creator"
                />

                <h3>MrBeast</h3>

                <span>YouTube</span>
            </div>

            <div className="floating-card card-two">
                <img
                    src="https://picsum.photos/121"
                    alt="Creator"
                />

                <h3>MKBHD</h3>

                <span>Tech</span>
            </div>

            <div className="floating-card card-three">
                <img
                    src="https://picsum.photos/122"
                    alt="Creator"
                />

                <h3>Emma</h3>

                <span>Lifestyle</span>
            </div>

        </div>
    );
}

export default HeroIllustration;