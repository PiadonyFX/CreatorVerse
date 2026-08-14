import Hero from "../components/creator/Hero";
import CreatorList from "../components/creator/CreatorList";
import Container from "../components/layout/Container";

// ShowCreators.jsx
import "../styles/pages/showCreators.css";

function ShowCreators() {
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