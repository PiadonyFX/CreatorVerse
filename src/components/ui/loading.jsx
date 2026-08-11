import "../../styles/components/loading.css";

function Loading() {
    return (
        <div className="loading-screen">
            <div className="loading-spinner"></div>

            <p>Chargement...</p>
        </div>
    );
}

export default Loading;