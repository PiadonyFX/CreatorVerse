import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../client";
import Card from "../components/creator/Card";
import Hero from "../components/creator/Hero";
import CreatorList from "../components/creator/CreatorList";
import Container from "../components/layout/Container";
import Loading from "../components/ui/loading";

// ShowCreators.jsx
import "../styles/pages/showCreators.css";

function ShowCreators() {
    const [creators, setCreators] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCreators() {
            const { data, error } = await supabase
                .from("creatorVerse")
                .select("*");

            if (error) {
                console.error(error);
            } else {
                setCreators(data);
            }
            setLoading(false);
        }

        fetchCreators();
    }, []);

    if (loading) {
        return <Loading/>;
    }

    return (
        <>
            <Hero />
            <section className="creators-section">
                <Container>
                    <CreatorList />
                </Container>
            </section>
        </>
    );
}

export default ShowCreators;
