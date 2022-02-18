const MenuNavegacion = (props) => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Restaurantes!</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {
                        props.menus.map((menu) => {
                            return <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{ menu }</a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    </nav>
}

export default MenuNavegacion