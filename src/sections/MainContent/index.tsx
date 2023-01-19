import "./MainContent.css";
import githubImg from "../../assets/images/github.svg"
import platziImg from "../../assets/images/platzi.svg"
import linkedinImg from "../../assets/images/linkedin.svg"
import logo from "../../assets/images/logo.svg"

function MainContent() {
    return (
        <div className="main_content">
            <div className="main_content__element details-about-me__container">
                <p>
                    Disfruto mucho de programar y siempre trato de respetar las
                    buenas prácticas.
                </p>
                <p>
                    También leo sobre las nuevas características de los
                    lenguajes con los que trabajo, debates, consejos de
                    programadores experimentados, tendencias sobre desarrollo,
                    etc.
                </p>
            </div>
            <div className="main_content__element logo__container">
                <img src={logo} alt="logo Santiago Reynoso" />
            </div>
            <div className="main_content__element details-projects__container">
                <p>
                    Estos son algunos proyectos que me han ayudado a practicar
                    lo que aprendo.
                </p>
                <p>A medida que crezcan, irán apareciendo por acá.</p>
                <nav>
                    <a href="#">
                        <img src={githubImg} alt="" />
                    </a>
                    <a href="#">
                        <img src={linkedinImg} alt="" />
                    </a>
                    <a href="#">
                        <img src={platziImg} alt="" />
                    </a>
                </nav>
            </div>
            <div className="main_content__element one">asd</div>
            <div className="main_content__element two">asd</div>
            <div className="main_content__element three">asd</div>
            <div className="main_content__element four">asd</div>
            <div className="main_content__element five">asd</div>
            <div className="main_content__element six">asd</div>
        </div>
    );
}

export default MainContent;
