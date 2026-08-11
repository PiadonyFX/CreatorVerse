import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../client";
import "../styles/pages/addCreator.css";
import Loading from "../components/ui/loading";
import Toast from "../components/ui/Toast";
import BackButton from "../components/ui/BackButton";

function EditCreator() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [toast, setToast] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        url: "",
        description: "",
        imageUrl: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from("creatorVerse")
                .select("*")
                .eq("id", id)
                .single();

            if (error) {
                console.error(error);
                setToast({
                    message: "Erreur lors de la modification.",
                    type: "error",
                });
                navigate("/");
                return;
            }

            setFormData({
                name: data.name || "",
                url: data.url || "",
                description: data.description || "",
                imageUrl: data.imageUrl || "",
            });

            setLoading(false);
        };

        fetchCreator();
    }, [id, navigate]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error } = await supabase
            .from("creatorVerse")
            .update(formData)
            .eq("id", id);

        if (error) {
            console.error(error);
            setToast({
                message: "Erreur lors de la modification.",
                type: "error",
            });
            return;
        }
        sessionStorage.removeItem("creators");

        setToast({
            message: "Créateur modifié avec succès !",
            type: "success",
        });

        setTimeout(() => {
            navigate(`/creator/${id}`);
        }, 1200);
    };

    if (loading) {
        return (
            <loading />
        );
    }

    return (
        <main className="form-page">

            <div className="form-page-header">
                <BackButton />
            </div>

            <section className="form-container">

                <div className="form-info">

                    <span className="form-badge">
                        ✨ CreatorVerse
                    </span>

                    <h1>Modifier le créateur</h1>

                    <p>
                        Modifiez les informations de ce créateur
                        et gardez votre collection à jour.
                    </p>

                </div>

                <form
                    className="creator-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">

                        <label htmlFor="name">
                            Nom du créateur
                        </label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ex : MrBeast"
                        />

                    </div>


                    <div className="form-group">

                        <label htmlFor="description">
                            Description
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Décrivez ce créateur..."
                            rows={4}
                        />

                    </div>


                    <div className="form-group">

                        <label htmlFor="url">
                            URL
                        </label>

                        <input
                            type="url"
                            id="url"
                            name="url"
                            value={formData.url}
                            onChange={handleChange}
                            placeholder="https://..."
                        />

                    </div>


                    <div className="form-group">

                        <label htmlFor="imageUrl">
                            Image URL
                        </label>

                        <input
                            type="url"
                            id="imageUrl"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            placeholder="https://..."
                        />

                    </div>


                    {formData.imageUrl && (
                        <div className="image-preview">

                            <img
                                src={formData.imageUrl}
                                alt="Aperçu du créateur"
                            />

                        </div>
                    )}


                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Enregistrer les modifications
                    </button>

                </form>

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

export default EditCreator;