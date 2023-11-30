import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <Link to={'/'} className="navbar-brand" href="#">Киноман</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to={'/'} className="nav-link" href="#">Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/search'} className="nav-link" href="#">Поиск</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
