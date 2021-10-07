import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink exact to="/" className="nav-item nav-link">Inicio</NavLink>
                <NavLink to="/users" className="nav-item nav-link">Usuarios</NavLink>
            </div>
        </nav>
    );
}

export { Nav };