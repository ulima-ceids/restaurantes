import { useState } from "react"

const Carta = (props) => {

    // Variables de estado
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Marina")
    const [listaPlatos, setListaPlatos] = useState(props.platos.filter((plato) => plato.categoria == "Marina"))

    const categoriaOnClick = (cat) => {
        console.log("Se hizo click: ", cat)
        setCategoriaSeleccionada(cat)
        setListaPlatos(props.platos.filter((plato) => {
            return plato.categoria == cat
        }))
    }

    // ternary operator
    // <EXPRESION_BOOLEANA> ? <RESPUESTA_EXP_TRUE> : <RESPUESTA_EXP_FALSE>

    return <div className='card mb-2'>
        <div className='card-body'>
            <ul className="nav nav-pills justify-content-center mb-2">
                <li className="nav-item">
                    <a className={ categoriaSeleccionada == "Marina" ? "nav-link active" : "nav-link" } 
                        aria-current="page" href="#" 
                        onClick={ () => {
                            categoriaOnClick("Marina")
                        } }>
                        Marina
                    </a>
                </li>
                <li className="nav-item">
                    <a className={ categoriaSeleccionada == "Criolla" ? "nav-link active" : "nav-link" }
                        href="#"
                        onClick={ () => {
                            categoriaOnClick("Criolla")
                        } }>
                        Criolla
                    </a>
                </li>
                <li className="nav-item">
                    <a className={ categoriaSeleccionada == "Postres" ? "nav-link active" : "nav-link" }
                        href="#"
                        onClick={ () => {
                            categoriaOnClick("Postres")
                        } }>
                        Postres
                    </a>
                </li>
            </ul>
            <div className='row'>
                {
                    listaPlatos.map((plato) => {
                        return <div key={ plato.id } className='col-md-4 mt-2'>
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