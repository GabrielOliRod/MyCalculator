import styles from './AboutMe.module.css'
import organo from './organo.JPG'
import cinetag from './cinetag.JPG'

function AboutMe() {
    return (
        <>
            <div className={styles.about}>
                <h2>Hi there!</h2>
                <p>&nbsp;&nbsp;&nbsp;My name's Gabriel, I'm 20 years old, I have always been passionate about programming and computing, since I was a young the computer feels like my second house, so I decided to study in Instituto Federal, a federal high school that offers a combined high school and IT technical course, there I discovered myself, I fell even more in love about programming, in particular JavaScript is my biggest passion, so now, I'm in college Universidade São Francisco, studying ADS (Analysis and Systems Development).<br />
                    &nbsp;&nbsp;&nbsp;I'm working on other projects, so if you are interested I recommend you to see my <a href='https://github.com/GabrielOliRod' target='_blank' rel='noreferrer'>Github</a>, you can see project like <a href='https://github.com/GabrielOliRod/cinetag' target='_blank' rel='noreferrer'>CineTag</a>(a movie website) and <a href='https://github.com/GabrielOliRod/Organo' target='_blank' rel='noreferrer'>Organo</a>(a project to organize your teams)
                </p>
            </div>
            <div className={styles.projects}>
                <h3>Organo</h3>
                <div className={styles.projectsCont}>
                    <img src={organo} alt='Organo logo' />
                    <p>Organo is a project Developed with HTML, CSS, JS focusing in React.js, the figma was made by the school courses Alura<br />
                        Organo was made with the propose to be a Team organizator, here you can organize your soccer teams, game teams, whatever you want<br />
                        <a href='https://organofinal.vercel.app/' target='_blank' rel='noreferrer'> Try it!</a></p>
                </div>
            </div>

            <div className={styles.projects}>
                <h3>CineTag</h3>
                <div className={styles.projectsCont}>
                    <img src={cinetag} alt='CineTag logo' />
                    <p>Cinetag is a website to watch and store your favorite movies! All movies we got on our website come from youtube, they are attach, so we don't host anyone movie.<br />
                        The figma was made by Alura, a school of courses, inspired by the most famous streaming websites, so we got a page to see the catalogue and you can save on favorites.<br />
                        <a href='https://cinetag-omega-five.vercel.app/' target='_blank' rel='noreferrer'> Try it!</a></p>
                </div>
            </div>
        </>
    )
}

export default AboutMe