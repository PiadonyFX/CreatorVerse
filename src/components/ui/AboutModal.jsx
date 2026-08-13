function AboutModal({ onClose }) {
    return (
        <div
            className="about-modal-overlay"
            onClick={onClose}
        >
            <section
                className="about-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="about-modal-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="about-modal-close"
                    onClick={onClose}
                    aria-label="Fermer"
                >
                    ×
                </button>

                <span className="about-modal-badge">
                    ✨ CreatorVerse
                </span>

                <h2 id="about-modal-title">
                    À propos de CreatorVerse
                </h2>

                <p>
                    CreatorVerse est une plateforme pensée pour
                    découvrir, explorer et retrouver facilement
                    les créateurs qui vous inspirent.
                </p>

                <p>
                    Ajoutez vos créateurs préférés à votre collection
                    et consultez leurs informations en quelques clics.
                </p>

                <button
                    type="button"
                    className="btn btn-primary about-modal-button"
                    onClick={onClose}
                >
                    Compris
                </button>
            </section>
        </div>
    );
}

export default AboutModal;