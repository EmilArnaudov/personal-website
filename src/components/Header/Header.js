import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <span className={styles.hamburger}><i class="fa-solid fa-bars"></i></span>
        </header>
    )
}