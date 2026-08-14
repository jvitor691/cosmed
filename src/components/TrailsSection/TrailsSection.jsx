import { trails } from "../../data/trails";
import "./trailsSection.css";

const TrailsSection = () => {
    return (
        <section id="trilhas" className="trails-section section-light">
            <div className="container">

                {/* CABEÇALHO */}
                <div className="section-heading trails-heading">

                    <h2>
                        Um só cronograma não funciona para todo mundo.
                    </h2>

                </div>


                {/* DOR / CONTEXTO */}
                <div className="pain-highlight">

                    <strong>
                        Se a sensação é de que ficou tarde,
                        o objetivo não é recuperar tudo de uma vez.
                    </strong>
                </div>


                {/* TRILHAS */}
                <div className="trails-grid">

                    {trails.map((trail) => (
                        <article
                            key={trail.id}
                            className={trail.className}
                        >
                            <span className="trail-label">
                                {trail.label}
                            </span>

                            <h3>
                                {trail.title}
                            </h3>

                            <p>
                                {trail.description}
                            </p>
                        </article>
                    ))}

                </div>


            </div>
        </section>
    );
};

export default TrailsSection;
