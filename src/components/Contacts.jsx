import Map from "./Map";

const Contacts = () => {
    return (
        <div className="contacts center">
            <div className="contacts-content">
                <h2 className="contacts-title">Контакты</h2>
                <div className="contacts-links">
                    <div className="contacts-link">
                        <img src="/img/address__icon.svg" alt="" />
                        <span>Офис, где делают странные, но симпатичные вещи</span>
                    </div>
                    <div className="contacts-link">
                        <img src="/img/time__icon.svg" alt="" />
                        <span>Пн-Пт с 10:00 до 20:00</span>
                    </div>
                    <div className="contacts-phone">
                        <div className="contacts-link">
                            <img src="/img/tel__icon.svg" alt="" />
                            <span>8 (800) 444 44 44</span>
                        </div>
                        <div className="contacts-link">
                            <img src="/img/tel__icon.svg" alt="" />
                            <span>8 (800) 888 88 88</span>
                        </div>
                    </div>
                    <div className="contacts-link">
                        <img src="/img/mail__icon.svg" alt="" />
                        <span>example@mail.ru</span>
                    </div>
                </div>
                <button className="contacts-button">
                    <span>Связаться</span>
                    <img src="/img/arrow__icon-big.svg" alt="" />
                </button>
            </div>
            <Map></Map>
        </div>
    )
}

export default Contacts;