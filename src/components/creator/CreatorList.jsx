import { useEffect, useState } from "react";
import supabase from "../../client";
import Card from "./Card";
import Loading from "../ui/loading";
import "../../styles/components/creatorList.css";

function CreatorList() {
    const [creators, setCreators] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCreators();
    }, []);

    async function fetchCreators() {
        const cachedCreators = sessionStorage.getItem("creators");

        if (cachedCreators) {
            setCreators(JSON.parse(cachedCreators));
            setLoading(false);
            return;
        }

        const { data, error } = await supabase
            .from("creatorVerse")
            .select("*");

        if (error) {
            console.error(error);
        } else {
            setCreators(data);
            sessionStorage.setItem("creators", JSON.stringify(data));
        }

        setLoading(false);
    }
    if (loading) {
        return <Loading />;
    }


    if (creators.length === 0) {
        return (
            <section id="creators">
                <h2>Aucun créateur disponible.</h2>
            </section>
        );
    }

    return (
        <section id="creators">

            <div className="creator-list-header">

                <h2>Tous les créateurs</h2>

                <p>{creators.length} créateur(s)</p>

            </div>

            <div className="creator-grid">

                {creators.map((creator) => (
                    <Card
                        key={creator.id}
                        creator={creator}
                    />
                ))}

            </div>

        </section>
    )
}

export default CreatorList;