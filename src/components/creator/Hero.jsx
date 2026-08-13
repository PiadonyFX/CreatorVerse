import { useState } from "react";
import { Link } from "react-router-dom";

import Container from "../layout/Container";
import "../../styles/components/hero.css";

import HeroIllustration from "./HeroIllustration";
import AboutButton from "../ui/AboutButton";
import AboutModal from "../ui/AboutModal";

function Hero() {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <section className="hero">

      <div className="hero-about">
        <AboutButton
          onClick={() => setShowAbout(true)}
        />
      </div>

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
      {showAbout && (
        <AboutModal
          onClose={() => setShowAbout(false)}
        />
      )}
    </section>
  );
}

export default Hero;