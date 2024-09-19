import styles from './LinkButton.module.css'

function LinkButton({ to, text, handleClick}) {

    return (
        <a className={styles.btn} href={to} target='_blank'>{text}</a>
    )
}

export default LinkButton