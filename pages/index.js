import Head from 'next/head'
import Image from 'next/image'
import Carta from '../components/carta.component'
import Footer from '../components/footer.component'
import MenuNavegacion from '../components/menu_navegacion.component'
import styles from '../styles/Home.module.css'

export default function Home() {

    // JSX
    return <div>
        <MenuNavegacion />
        <Carta />
        <Footer />
    </div>
}
