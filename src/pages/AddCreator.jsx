import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../client";
import Toast from "../components/ui/Toast";
import "../styles/pages/addCreator.css";
import BackButton from "../components/ui/BackButton";

function AddCreator() {
    const [formData, setFormData] = useState({
        name: "",
        url: "",
        description: "",
        imageUrl: "",
    });

    const [toast, setToast] = useState(null);

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = formData.name.trim();
        const description = formData.description.trim();
        const url = formData.url.trim();
        const imageUrl = formData.imageUrl.trim();

        if (!name || !description || !url || !imageUrl) {
            setToast({
                message: "Veuillez remplir tous les champs.",
                type: "error",
            });

            return;
        }

        const { error } = await supabase
            .from("creatorVerse")
            .insert([
                {
                    name,
                    description,
                    url,
                    imageUrl,
                },
            ]);

        if (error) {
            console.error(error);

            setToast({
                message: "Erreur lors de l'ajout du créateur.",
                type: "error",
            });

            return;
        }

        sessionStorage.removeItem("creators");

        setToast({
            message: "Créateur ajouté avec succès !",
            type: "success",
        });

        setTimeout(() => {
            navigate("/");
        }, 1200);
    };

    return (
        <main className="form-page">

            <div className="form-page-header">
                <BackButton />
            </div>

            <section className="form-container">

                {/* LEFT */}

                <div className="form-info">

                    <span className="form-badge">
                        ✨ CreatorVerse
                    </span>

                    <h1>
                        Ajouter un créateur
                    </h1>

                    <p>
                        Ajoutez vos créateurs préférés afin de construire
                        une collection inspirante.
                    </p>

                </div>


                {/* RIGHT */}

                <form
                    className="creator-form"
                    onSubmit={handleSubmit}
                >

                    {/* NOM */}

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
                            required
                        />

                    </div>


                    {/* DESCRIPTION */}

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
                            required
                        />

                    </div>


                    {/* URL */}

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
                            required
                        />

                    </div>


                    {/* IMAGE URL */}

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
                            required
                        />

                    </div>


                    {/* PREVIEW IMAGE */}

                    {formData.imageUrl && (
                        <div className="image-preview">

                            <img
                                src={formData.imageUrl}
                                alt="Aperçu du créateur"
                            />

                        </div>
                    )}


                    {/* BOUTON */}

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        + Ajouter le créateur
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

export default AddCreator;