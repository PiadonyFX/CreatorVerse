import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();

    return (
        <button
            type="button"
            className="back-button"
            onClick={() => navigate(-1)}
            aria-label="Retour à la page précédente"
        >
            ← Retour
        </button>
    );
}

export default BackButton;