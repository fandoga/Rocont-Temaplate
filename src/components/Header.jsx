import { useEffect, useState } from "react";

const Header = () => {

    const [isDropdownOpen, setDropdown] = useState(false)


    const tabletMediaQuery = window.matchMedia('(min-width: 480px)')


    return (
        <header className="header">
            <div className="header-top">
                <div className="header-logo">
                    <img src="/img/logo.svg" alt="logo" />
                </div>
                <button onClick={() => { setDropdown(prev => !prev) }} className="dropdown-button">
                    <img src="/img/dropdown__icon.svg" alt="dropdown" />
                </button>

            </div>
            <div className="header-nav">
                <div className="dropdown-wrapper">
                    <nav className={`dropdown-content ${isDropdownOpen ? "open" : isDropdownOpen}`}>
                        <ul>
                            <li><a className="dropdown-link hover_anim" href="">О средстве</a></li>
                            <li><a className="dropdown-link hover_anim" href="">Состав</a></li>
                            <li><a className="dropdown-link hover_anim" href="">Вопросы</a></li>
                            <li><a className="dropdown-link hover_anim" href="">Отзывы</a></li>
                            <li><a className="dropdown-link active hover_anim" href="">Попробовать</a></li>
                            <li><a className="dropdown-link hover_anim" href="">Для своих</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="nav-menu">
                    <nav>
                        <ul className="menu-links">
                            <li><a className="nav-link hover_anim" href="">О средстве</a></li>
                            <li><a className="nav-link hover_anim" href="">Состав</a></li>
                            <li><a className="nav-link hover_anim" href="">Вопросы</a></li>
                            <li><a className="nav-link hover_anim" href="">Отзывы</a></li>
                            <li><a className="nav-link active" href="">Попробовать</a></li>
                            <li><a className="nav-link hover_anim" href="">Для своих</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;