import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="container home">
            <div className="row justify-content-center align-items-center">
                <div id="intro" className="col-lg-10 d-flex flex-column justify-content-center align-items-center text-center">
                    <h2 className="display-2">KING PAUL PULGARES</h2>
                    <p className="lead sub">Aspiring Web Developer</p>
                    <Link to='projects'>
                        <button className="btn btn-dark w-100">VIEW PROJECTS</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
