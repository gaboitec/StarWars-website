import '../assets/css/Home.css';
import personaje from '../assets/images/soldado.png';

export const Home = () => {
    return(
        <div className="content-box text-white">
            <div className="character-image">
            <img
                src={personaje}
                alt="Stormtrooper"
                className="img-fluid"
            />
            </div>
            
            <div className="character-info mt-3">
            <h2 className="title">Stormtrooper CD:1000343</h2>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            </div>
        </div>
    )
}