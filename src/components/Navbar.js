import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="navbar-brand" href="#">Home</a>
                        </li> */}
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive, isPending }) => ({
                                    color: isActive ? 'red' : 'inherit',
                                })}
                                className={({ isActive, isPending }) =>
                                    `nav-link ${isActive ? 'active' : isPending ? 'pending' : ''}`
                                }
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive, isPending }) => ({
                                    color: isActive ? 'red' : 'inherit',
                                })}
                                className={({ isActive, isPending }) =>
                                    `nav-link ${isActive ? 'active' : isPending ? 'pending' : ''}`
                                }
                                aria-current="page"
                                to="/about"
                            >
                                {props.aboutLink}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive, isPending }) => ({
                                    color: isActive ? 'red' : 'inherit',
                                })}
                                className={({ isActive, isPending }) =>
                                    `nav-link ${isActive ? 'active' : isPending ? 'pending' : ''}`
                                }
                                aria-current="page"
                                to="/user/username"
                            >
                                User
                            </NavLink>
                        </li>

                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

Navbar.propTypes = {
    title: PropTypes.string.isRequired, //required is like html required 
    aboutLink: PropTypes.string
}

//default proptypes
// Navbar.defaultProps = {
//     title: 'Navbar',
//     aboutLink: 'About'
// }


