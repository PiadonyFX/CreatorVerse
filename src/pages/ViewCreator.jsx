import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../client";
import Card from "../components/creator/Card";
// ViewCreator.jsx
import Loading from "../components/ui/loading";
import "../styles/pages/viewCreator.css";
import Toast from "../components/ui/Toast";
import BackButton from "../components/ui/BackButton";

function ViewCreator() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [creator, setCreator] = useState(null);
    const [toast, setToast] = useState(null);

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from("creatorVerse")
                .select("*")
                .eq("id", id)
                .single();

            if (error) {
                console.error(error);
                return;
            }

            setCreator(data);
        };

        fetchCreator();
    }, [id]);

    const handleDelete = async () => {
        const confirmation = window.confirm(
            "Êtes-vous sûr de vouloir supprimer ce créateur ?"
        );

        if (!confirmation) {
            return;
        }

        const { error } = await supabase
            .from("creatorVerse")
            .delete()
            .eq("id", id);

        if (error) {
            console.error(error);
            setToast({
                type: "error",
                message: "Erreur lors de la suppression."
            });
            return;
        }
        sessionStorage.removeItem("creators");
        setToast({
            message: "Créateur supprimé avec succès !",
            type: "success",
        });

        setTimeout(() => {
            navigate("/");
        }, 1200);
    };

    if (!creator) {
        return <Loading />;
    }

    return (
        <main className="view-page">

            <div className="view-page-header">
                <BackButton />
            </div>

            <section className="view-container">

                <Card
                    creator={creator}
                    isDetail={true}
                    onDelete={handleDelete}
                />

            </section>

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}

        </main>
    );
}

export default ViewCreator;
