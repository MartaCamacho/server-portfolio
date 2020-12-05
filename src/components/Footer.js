import React from 'react'

function Footer() {
    return (
        <div>
        <footer className="footer">
            <a href="mailto:contacto@martacamacho.com" className="footer-link">contacto@martacamacho.com</a>
            <ul className="social-list">
                <li className="social-list-item">
                <a href="https://github.com/MartaCamacho" className="social-list-link">
                <i className="fab fa-github"></i>
                </a>
                </li>
                <li className="social-list-item">
                <a href="https://www.linkedin.com/in/martacamachovargas/" className="social-list-link">
                <i className="fab fa-linkedin"></i>
                </a>
                </li>
            </ul>
        </footer>
        </div>
    )
}

export default Footer;