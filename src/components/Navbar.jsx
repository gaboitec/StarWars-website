export const CardsCarousel = () => {

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
                        <a className="nav-link" href="#">
                        Home
                        </a>
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
                        <li onClick={() => setDataType("people")}>
                            <a className="dropdown-item" href="#">Personajes</a>
                        </li>
                        <li onClick={() => setDataType("planets")}>
                            <a className="dropdown-item" href="#">Planetas</a>
                        </li>
                        <li onClick={() => setDataType("films")}>
                            <a className="dropdown-item" href="#">Películas</a>
                        </li>
                        <li onClick={() => setDataType("starships")}>
                            <a className="dropdown-item" href="#">Naves Espaciales</a>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        Contact
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}