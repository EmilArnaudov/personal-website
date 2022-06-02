import styles from './Aside.module.css';


export default function Aside({
    showAside
}) {
    let asideClasses = showAside ? [styles.aside, styles.asideShow] : [styles.aside]

    return (
        <aside className={asideClasses.join(' ')}>
            <nav className={styles.nav}>
                <p className={styles.logo}>EA</p>
                <ul className={styles.navItems}>
                    <li className={styles.welcomeNav}>
                        <a className={styles.navItem} href=""><i class="fa-solid fa-house"></i>HOME</a>
                    </li>
                    <li className={styles.aboutNav}>
                        <a className={styles.navItem} href=""><i class="fa-solid fa-user"></i>ABOUT</a>
                    </li>
                    <li className={styles.skillsNav}>
                        <a className={styles.navItem} href=""><i class="fa-solid fa-code"></i>SKILLS</a>
                    </li>
                    <li className={styles.projectsNav}>
                        <a className={styles.navItem} href=""><i class="fa-solid fa-desktop"></i>PROJECTS</a>
                    </li>
                    <li className={styles.contactNav}>
                        <a className={styles.navItem} href=""><i class="fa-solid fa-phone"></i>CONTACT</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}