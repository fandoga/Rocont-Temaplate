const Map = () => {
    return (
        <div className="map">
            <div className="map-wrapper">
                <div className="map-api" style={{ position: "relative", overflow: "hidden" }}><a
                    href="https://yandex.ru/maps/org/kafe/96933721092/?utm_medium=mapframe&utm_source=maps"
                    style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Кафе</a><a
                        href="https://yandex.ru/maps/2/saint-petersburg/category/cafe/184106390/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Кафе в Санкт‑Петербурге</a><iframe
                            src="https://yandex.ru/map-widget/v1/?ll=30.438160%2C59.993317&mode=poi&poi%5Bpoint%5D=30.438137%2C59.994248&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D96933721092&z=15.76"
                            width="100%" height="100%"
                            style={{ position: "relative" }}></iframe>
                </div>
            </div>
        </div>
    )
}

export default Map;