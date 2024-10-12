import '../assets/css/Home.css';
import {Link} from 'react-router-dom';

export const Home = () => {
    return(
    <div className="home-page">
        {/* Fondo con imagen completa */}
        <div className="background-image">
            <div className="center-content">
            <h1 className="logo">STAR WARS</h1>
            <p className="subtitle">The Force Awakens</p>
            </div>
            {/* Menú Lateral */}
            <nav className="side-menu">
            <ul>
                <li><Link className='side-li' to="/">Home</Link></li>
                <li><Link className='side-li' to="/people">People</Link></li>
                <li><Link className='side-li' to="/planets">Planets</Link></li>
                <li><Link className='side-li' to="/films">Films</Link></li>
                <li><Link className='side-li' to="/starships">Starships</Link></li>
            </ul>
            </nav>
            {/* Indicador de Scroll */}
            <p className="scroll-indicator">Scroll to Explore</p>
        </div>
    </div>
    )
}