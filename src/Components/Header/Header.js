import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header className={"header p-3 sticky-top"}>
            <nav className="navbar navbar-dark ">
                <div className="container links-wrapper">
                    <Link to={'/'} className='navbar-brand'>
                        <img className='logo' src={`https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png`} alt="" />
                    </Link>
                    <Link to={'/'} className='navbar-brand'>Home</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;