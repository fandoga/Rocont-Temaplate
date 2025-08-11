const Form = () => {
    return (
        <div className="form center">
            <div className="form-content">
                <div className="form-info">
                    <h2 className="form-info-title">Если вы <br /> тоже решили «а почему бы и нет»</h2>
                    <div className="form-info-features">
                        <div className="form-info-feature">
                            <img className="form-info-feature-icon" src="/img/arrow__icon.svg" alt="" />
                            <span className="form-info-feature-text">Можно заказать много</span>
                        </div>
                        <div className="form-info-feature">
                            <img className="form-info-feature-icon" src="/img/arrow__icon.svg" alt="" />
                            <span className="form-info-feature-text">Доступ возможен через северный интерфейс</span>
                        </div>
                        <div className="form-info-feature">
                            <img className="form-info-feature-icon" src="/img/arrow__icon.svg" alt="" />
                            <span className="form-info-feature-text">Можно просто поболтать</span>
                        </div>
                    </div>
                </div>
                <div className="form-data">
                    <input className="form-data-input" type="text" placeholder="Имя" />
                    <input className="form-data-input" type="tel" placeholder="Телефон" />
                    <div className="subtitle">
                        <img src="/img/sber__icon.svg" alt="" />
                        <span>{"Согласен(-на) на обработку чего угодно — лишь бы форма работала"}</span>
                    </div>
                    <button className="form-data-button">
                        <span>Отправить</span>
                        <img src="/img/arrow__icon-big.green.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form;