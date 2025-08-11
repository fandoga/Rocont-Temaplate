import Header from "./Header";

const Top = () => {
    return (
        <div className="top center">
            <Header></Header>
            <div className="info">
                <div className="info-img">
                    <picture>
                        <source media="(min-width: 960px)" srcSet="/img/background__top-desktop.png" />
                        <source media="(min-width: 480px)" srcSet="/img/background__top-tablet-2.png" />
                        <img src="/img/background__top-mobile.png" alt="" />
                    </picture>
                </div>
                <div className="info-content">
                    <h1 className="info-title">Просто потому что можем
                    </h1>
                    <p className="info-text">
                        Мы сделали это средство не ради прибыли, а из любви к красивым словам. Один стик в день — и вы
                        чувствуете, что делаете что-то важное. Что именно — решать вам.
                    </p>
                    <div className="info-footer">
                        <button className="info-button">
                            <span>Попробовать просто так</span>
                            <img src="/img/arrow__icon-big.svg" alt="" />
                        </button>
                        <p className="info-span">Сертификат есть. Но это не точно. СГР №AM.01.01 .01.003.R.00 o47 4.06.24</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;