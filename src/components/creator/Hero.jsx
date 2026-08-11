import { Link } from "react-router-dom";

import Container from "../layout/Container";
import "../../styles/components/hero.css";

import HeroIllustration from "./HeroIllustration";

function Hero() {
  return (
    <section className="hero">

      <Container>

        <div className="hero-grid">

          <div className="hero-content">

            <span className="hero-badge">
              ✨ CreatorVerse
            </span>

            <h1>
              Discover creators that{" "}
              <span>inspire the world.</span>
            </h1>

            <p>
              Explore talented creators, discover new content,
              and build your own collection of inspiration.
            </p>

            <div className="hero-actions">

              <Link
                to="/new"
                className="btn btn-primary"
              >
                Ajouter un créateur
              </Link>

              <a
                href="#creators"
                className="btn btn-secondary"
              >
                Voir les créateurs
              </a>

            </div>

          </div>


          <div className="hero-visual">

            <HeroIllustration />

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Hero;