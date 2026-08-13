function AboutButton({ onClick }) {
    return (
        <button
            type="button"
            className="about-button"
            onClick={onClick}
            aria-label="À propos de CreatorVerse"
            title="À propos de CreatorVerse"
        >
            ?
        </button>
    );
}

export default AboutButton;