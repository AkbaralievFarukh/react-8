import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <header className={"header p-3 sticky-top"}>

            <nav className="navbar navbar-dark ">
                <div className="container-fluid justify-content-around">
                    <div className={'links'}>
                        <Link to={'/'}  className='navbar-brand'>Home</Link>
                    </div>
                    <div className={'search-link'}>
                        <Link to={'/search'} className='navbar-brand'>Seacrh</Link>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;