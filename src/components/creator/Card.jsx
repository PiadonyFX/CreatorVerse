import { Link } from "react-router-dom";
import "../../styles/components/card.css";

function Card({
    creator, 
    isDetail = false,
    onDelete,
}) {

    return (
        <article className={`creator-card ${isDetail ? "detail-card" : ""}`}>

            <div className="creator-image-wrapper">
                <img
                    src={creator.imageUrl}
                    alt={creator.name}
                    className="creator-image"
                />
            </div>

            <div className="creator-content">

                <h2>{creator.name}</h2>

                <p>{creator.description}</p>

                <a
                    href={creator.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="creator-channel"
                >
                    🌐 Voir la chaîne
                </a>

                <div className="creator-actions">

                    {!isDetail ? (

                        <Link
                            to={`/creator/${creator.id}`}
                            className="btn btn-primary"
                        >
                            Voir les détails
                        </Link>

                    ) : (

                        <>
                        <div className="btn-btn">
                            <Link
                                to={`/edit/${creator.id}`}
                                className="btn btn-primary"
                            >
                                Modifier
                            </Link>

                            <button
                                className="btn btn-danger"
                                onClick={onDelete}
                            >
                                Supprimer
                            </button>
                            </div>
                        </>

                    )}

                </div>

            </div>

        </article>
    );
}

export default Card;