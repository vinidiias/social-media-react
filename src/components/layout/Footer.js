import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Developed by <span>Vinícius Dias</span> with <span>React</span> &copy; 2024</p>
        </footer>
    )
}

export default Footer