import "./Technologies.css"
import { images } from "./images";

function Technologies() {

    return (
        <section className="technologies__section">
            <h4>He tenido la oportunidad de trabajar con estas tecnologías</h4>
            <div className="technologies__container">
                {
                    images.map(el => (
                        <div key={el.src} className="technologies__item">
                            <img src={el.src} alt={el.description} />
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Technologies;
