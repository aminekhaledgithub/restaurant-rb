import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <header id="resto-header">
            <div className="container">

                <nav className="navbar navbar-expand-lg  navbar-dark fixed-top" id="main-nav">
                    <div className="container">
                        <a href="#" className="navbar-brand">Restaurant</a>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarcollapse">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item mr-1 ">
                                    <a href="#resto-header" className="nav-link active">Acceuil</a>
                                </li>
                                <li className="nav-item mr-1">
                                    <a href="#resto-menu" className="nav-link">Menu</a>
                                </li>
                                <li className="nav-item mr-1">
                                    <a href="#resto-concept" className="nav-link">Concept</a>
                                </li>
                                <li className="nav-item mr-1">
                                    <a href="#resto-equipe" className="nav-link">Equipe</a>
                                </li>
                                <li className="nav-item mr-1">
                                    <a href="#resto-contact" className="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="resto-intro">
                    <p className="text-center">
                        Vos papilles en extase
                    </p>
                    <h1>Visiter Notre restaurant</h1>
                    <div className="fleche">
                        <FontAwesomeIcon icon={faChevronDown} size="2xl" shake={true} border={true} />
                    </div>
                </div>
            </div>
        </header>
    )
}
