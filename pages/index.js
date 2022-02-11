import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

    const variable = parseInt("2")

    // JSX
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Restaurantes!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Registro</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className='card'>
            <div className='card-body'>
                <ul className="nav nav-pills justify-content-center">
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
                    <div className='col-md-4'>
                        <div className='card'>
                            <img className="card-img-top" src='https://comidasperuanas.net/wp-content/uploads/2020/10/Sopa-Seca.webp' />
                            <div className='card-body text-center'>
                                <p className="card-text">Sopa Seca</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='card'>
                            <img className="card-img-top" src='https://comidasperuanas.net/wp-content/uploads/2020/10/Sopa-Seca.webp' />
                            <div className='card-body text-center'>
                                <p className="card-text">Sopa Seca</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='card'>
                            <img className="card-img-top" src='https://comidasperuanas.net/wp-content/uploads/2020/10/Sopa-Seca.webp' />
                            <div className='card-body text-center'>
                                <p className="card-text">Sopa Seca</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className='card'>
            <div className='card-body'>
                CEIDS - Universidad de Lima
            </div>
        </div>
    </div>
}
