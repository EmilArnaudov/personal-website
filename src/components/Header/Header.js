import { useState } from 'react'
import styles from './Header.module.css'

export default function Header({
    burgerMenuClick
}) {

    let [menuActive, setMenuActive] = useState(false);

    let hamburgerMenuStyles = menuActive ? [styles.hamburger, styles.active] : [styles.hamburger]

    function handleClick() {
        setMenuActive((oldState) => {
            return !oldState
        })
        burgerMenuClick()
    }
 
    return (
        <header className={styles.header}>
            <span onClick={handleClick} className={hamburgerMenuStyles.join(' ')}><i class="fa-solid fa-bars"></i></span>
        </header>
    )
}