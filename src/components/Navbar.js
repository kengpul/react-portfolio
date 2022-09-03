import logo from '../images/brand_logo.jpg';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <img src={logo} alt="brand_logo" width="30" height="24" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="projects" className="nav-link">PROJECTS</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
