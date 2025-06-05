import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className="color-palette">
                        <span
                            className={`color-swatch${props.primaryColor === "#6366f1" ? " selected" : ""}`}
                            style={{ background: "#6366f1" }}
                            title="#6366f1"
                            onClick={() => props.onColorChange("#6366f1")}
                        ></span>
                        <span
                            className={`color-swatch${props.primaryColor === "#f59e42" ? " selected" : ""}`}
                            style={{ background: "#f59e42" }}
                            title="#f59e42"
                            onClick={() => props.onColorChange("#f59e42")}
                        ></span>
                        <span
                            className={`color-swatch${props.primaryColor === "#FF9898" ? " selected" : ""}`}
                            style={{ background: "#FF9898" }}
                            title="#FF9898"
                            onClick={() => props.onColorChange("#FF9898")}
                        ></span>
                        <span
                            className={`color-swatch${props.primaryColor === "#23272b" ? " selected" : ""}`}
                            style={{ background: "#23272b" }}
                            title="#23272b"
                            onClick={() => props.onColorChange("#23272b")}
                        ></span>
                        <span
                            className={`color-swatch${props.primaryColor === "#0065F8" ? " selected" : ""}`}
                            style={{ background: "#0065F8" }}
                            title="#0065F8"
                            onClick={() => props.onColorChange("#0065F8")}
                        ></span>
                        <span
                            className={`color-swatch${props.primaryColor === "#00B74A" ? " selected" : ""}`}
                            style={{ background: "#00B74A" }}
                            title="#00B74A"
                            onClick={() => props.onColorChange("#00B74A")}
                        ></span>
                        <span
                            className={`color-swatch${props.primaryColor === "#F93154" ? " selected" : ""}`}
                            style={{ background: "#F93154" }}
                            title="#F93154"
                            onClick={() => props.onColorChange("#F93154")}
                        ></span>
                        
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
};