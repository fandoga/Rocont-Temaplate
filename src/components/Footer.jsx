import { forwardRef } from "react"

const Footer = () => {
    return (
        <footer className="footer center">
            <div className="nav">
                <div className="img-wrapper-mobile">
                    <img src="/img/logo.svg" alt="" />
                </div>
                <nav className="nav-content">
                    <ul className="nav-content-links">
                        <li>
                            <a className="nav-content-link hover_anim" href="#">О системе</a>
                        </li>
                        <li>
                            <a className="nav-content-link hover_anim" href="">Архитектура</a>
                        </li>
                        <li>
                            <a className="nav-content-link hover_anim" href="#">Вопросы</a>
                        </li>
                        <li>
                            <a className="nav-content-link hover_anim" href="#">Отзывы</a>
                        </li>
                        <li>
                            <a className="nav-content-link hover_anim" href="#">Для своих</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="footer-late">
                <div className="footer-late-content">
                    <p className="footer-text">Коллаген © 2025</p>
                    <p className="footer-text">Политика обработки чего-то личного</p>
                </div>
                <div className="img-wrapper-desktop">
                    <img src="/img/logo.svg" alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;