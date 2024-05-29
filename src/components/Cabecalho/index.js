import styles from './Cabecalho.module.css'
import logo from './logo.jpg'
import CabecalhoLink from 'components/CabecalhoLink'

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <nav>
                <CabecalhoLink>
                    <div className={styles.logos}>
                        <img src={logo} alt='logo' />
                        <h1>My Calculator</h1>
                    </div>
                </CabecalhoLink>
            </nav>
            <nav className={styles.logos}>
                <CabecalhoLink url='./'>
                    Home
                </CabecalhoLink>
                <CabecalhoLink url='./AboutUs'>
                    About me
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho