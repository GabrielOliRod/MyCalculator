import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.left}>
                <ul>
                    <li>
                        <a href='https://github.com/GabrielOliRod' target='_blank' rel="noreferrer">
                            <img src='/assets/gh.png' alt='Logo do GitHub' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/@GabrielOliRod' target='_blank' rel="noreferrer">
                            <img src='/assets/yt.png' alt='Logo do YouTube' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/gabrielolirod/' target='_blank' rel="noreferrer">
                            <img src='/assets/ld.png' alt='Logo do Linkedin' />
                        </a>
                    </li>
                </ul>
            </section>
            <section className={styles.right}>
                <h1>Developed by Gabriel de Oliveira Rodrigues ©</h1>
            </section>
        </footer>
    )
}

export default Footer