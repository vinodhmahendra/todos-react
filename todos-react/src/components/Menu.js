import React from "react";
import { Link } from "react-router-dom";

const Menu = ( { isAuthenticated , getCurrentUser, logout } ) => {
    const isUserAuthenticated = isAuthenticated();
    const username = getCurrentUser();

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        Chushruth
                    </a>

                    {isUserAuthenticated && (
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to={`/welcome/${username}`} className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/todos/${username}`} className="nav-link">
                                    Todos
                                </Link>
                            </li>
                        </ul>
                    )}

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        { !isUserAuthenticated && (
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            </li>
                        )}

                        { isUserAuthenticated && (
                            <li className="nav-item">
                                  <span className="navbar-text me-3">
                                    Welcome, {username}
                                  </span>  
                            </li>
                        )}
                        
                        { isUserAuthenticated && (
                            <li className="nav-item">
                                <button onClick={logout} className="btn btn-outline-light btn-sm">
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </div>

            </nav>
        </header>
    );
};


export default Menu;

