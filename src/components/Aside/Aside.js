import styles from './Aside.module.css';


export default function Aside({
    showAside
}) {
    let asideClasses = showAside ? [styles.aside, styles.asideShow] : [styles.aside]

    return (
        <aside  className={asideClasses.join(' ')}>
            <nav className={styles.nav}>
                <p className={styles.logo}>EA</p>
                <ul className={styles.navItems}>
                    <li className={styles.welcomeNav}>
                        <a className={styles.navItem} href=""><i className={['fa-solid', 'fa-house', styles.icon].join(' ')}></i><span className={styles.navText}>HOME</span></a>
                    </li>
                    <li className={styles.aboutNav}>
                        <a className={styles.navItem} href=""><i className={['fa-solid', 'fa-user', styles.icon].join(' ')}></i><span className={styles.navText}>ABOUT</span></a>
                    </li>
                    <li className={styles.skillsNav}>
                        <a className={styles.navItem} href=""><i className={['fa-solid', 'fa-code', styles.icon].join(' ')}></i><span className={styles.navText}>SKILLS</span></a>
                    </li>
                    <li className={styles.projectsNav}>
                        <a className={styles.navItem} href=""><i className={['fa-solid', 'fa-desktop', styles.icon].join(' ')}></i><span className={styles.navText}>PROJECTS</span></a>
                    </li>
                    <li className={styles.contactNav}>
                        <a className={styles.navItem} href=""><i className={['fa-solid', 'fa-phone', styles.icon].join(' ')}></i><span className={styles.navText}>CONTACT</span></a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}