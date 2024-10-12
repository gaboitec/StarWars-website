import imagen from '../assets/images/isBlanco.png';
import {Link} from 'react-router-dom';

export const Navbar = () => {

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
            <div className="container-fluid">
                {/* Logo de Star Wars */}
                <a className="navbar-brand" href="#" style={{ width: "50px", height: "50px" }}>
                    <img
                    src={imagen}
                    alt="Star Wars Logo"
                    style={{ maxHeight: "100%" }}
                    />
                </a>

                {/* Toggle para móvil */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Opciones del Navbar */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                        Home
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        Listas
                        </a>
                        <ul className="dropdown-menu">
                        <li>
                            <Link className="dropdown-item" to="/people">Personajes</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/planets">Planetas</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/films">Películas</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/starships">Naves Espaciales</Link>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link">
                        Login
                        </Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}