import reactImg from "../../assets/images/react.svg"
import viteImg from "../../assets/images/vite.svg"
import nodeJSImg from "../../assets/images/nodejs.svg"
import electronImg from "../../assets/images/Electron.png"
import genexusImg from "../../assets/images/genexus.png"
import postmanImg from "../../assets/images/postman.png"
import lessImg from "../../assets/images/less.png"
import sassImg from "../../assets/images/sass.png"
import htmlImg from "../../assets/images/html.png"
import JavaScriptImg from "../../assets/images/JavaScript.png"
import cssImg from "../../assets/images/css.png"
import canvasImg from "../../assets/images/canvas.png"
import npmImg from "../../assets/images/npm.png"
import insomniaImg from "../../assets/images/Insomnia.png"

type TechnologyImage = {
    src: string,
    description: string
}

export const images : TechnologyImage[] = [
    { src: htmlImg, description: "HTML logo"},
    { src: cssImg, description: "CSS logo"},
    { src: JavaScriptImg, description: "JavaScript logo"},
    { src: reactImg, description: "React logo"},
    { src: nodeJSImg, description: "NodeJS logo"},
    { src: electronImg, description: "Electron logo"},
    { src: canvasImg, description: "canvas logo"},
    { src: insomniaImg, description: "Insomnia logo"},
    { src: postmanImg, description: "Postman logo"},
    { src: viteImg, description: "Vite logo"},
    { src: genexusImg, description: "Genexus logo"},
    { src: sassImg, description: "Sass logo"},
    { src: lessImg, description: "Less logo"},
    { src: npmImg, description: "NPM logo"},
]