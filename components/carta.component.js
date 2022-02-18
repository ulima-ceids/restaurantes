const Carta = (props) => {
    return <div className='card mb-2'>
        <div className='card-body'>
            <ul className="nav nav-pills justify-content-center mb-2">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Marina</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Criolla</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Postres</a>
                </li>
            </ul>
            <div className='row'>
                {
                    props.platos.map((plato) => {
                        return <div key={ plato.id } className='col-md-4'>
                            <div className='card'>
                                <img className="card-img-top" src={ plato.url } />
                                <div className='card-body text-center'>
                                    <p className="card-text">{ plato.nombre }</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    </div>
}

export default Carta