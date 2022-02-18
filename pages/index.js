import Head from 'next/head'
import Image from 'next/image'
import Carta from '../components/carta.component'
import Footer from '../components/footer.component'
import MenuNavegacion from '../components/menu_navegacion.component'
import styles from '../styles/Home.module.css'

export default function Home() {
    const menus = [
        "Login", "Registro", "Sobre nosotros"
    ]

    const platos = [
        {
            id : 1,
            nombre : "Sopa Seca",
            categoria : "Marina",
            url : "https://comidasperuanas.net/wp-content/uploads/2020/10/Sopa-Seca.webp"
        }, 
        {
            id : 2,
            nombre : "Cebiche",
            categoria : "Marina",
            url : "https://e.rpp-noticias.io/normal/2017/08/02/4568662-lomo-saltadojpg.jpg"
        },
        {
            id : 3,
            nombre : "Chicharron de pescado",
            categoria : "Marina",
            url : "https://unareceta.com/wp-content/uploads/2017/09/Receta-de-chicharro%CC%81n-de-pescado-ecuatoriano-640x427.jpg"
        }
    ]

    // JSX
    return <div>
        <MenuNavegacion menus={menus}/>
        <Carta platos={ platos }/>
        <Footer />
    </div>
}
