import styles from './Main.module.css'

import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import imgProfile from '../img/eu.jpg'

function Main() {

    return (
        <div className={styles.main_container}>
            <Container>
                <img src={imgProfile} alt="Foto de perfil" />
                <div className={styles.name}>
                    <h1>Vinícius Dias</h1>
                    <p>Foz do Iguaçu, PR, Brasil</p>
                </div>
                <p>"Front-end developer"</p>
                <div className={styles.links}>
                    <LinkButton to="https://github.com/vinidiias" text="GitHub"/>
                    <LinkButton to="https://www.linkedin.com/in/vinícius-dias-322070264/" text="LinkedIn" />
                    <LinkButton to="https://www.threads.net/@viniciusdiias_" text="Threads" />
                    <LinkButton to="https://www.instagram.com/viniciusdiias_/" text="Instagram" />
                    <LinkButton to="https://wa.me/5545991330882" text="Contact Me" />
                </div>
            </Container>
        </div>
        
    )
}

export default Main