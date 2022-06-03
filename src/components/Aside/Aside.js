import styles from './Aside.module.css';

import { HashLink } from 'react-router-hash-link';

export default function Aside({
    showAside
}) {
    let asideClasses = showAside ? [styles.aside, styles.asideShow] : [styles.aside]

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <aside  className={asideClasses.join(' ')}>
            <nav className={styles.nav}>
                <p className={styles.logo}>EA</p>
                <ul className={styles.navItems}>
                    <li className={styles.welcomeNav}>
                        <HashLink to="#home" scroll={el => scrollWithOffset(el)} className={styles.navItem}><i className={['fa-solid', 'fa-house', styles.icon].join(' ')}></i><span className={styles.navText}>HOME</span></HashLink>
                    </li>
                    <li className={styles.aboutNav}>
                        <HashLink to="#about" scroll={el => scrollWithOffset(el)} className={styles.navItem}><i className={['fa-solid', 'fa-user', styles.icon].join(' ')}></i><span className={styles.navText}>ABOUT</span></HashLink>
                    </li>
                    <li className={styles.skillsNav}>
                        <HashLink to="#skills" scroll={el => scrollWithOffset(el)} className={styles.navItem}><i className={['fa-solid', 'fa-code', styles.icon].join(' ')}></i><span className={styles.navText}>SKILLS</span></HashLink>
                    </li>
                    <li className={styles.projectsNav}>
                        <HashLink to="#projects" scroll={el => scrollWithOffset(el)} className={styles.navItem}><i className={['fa-solid', 'fa-desktop', styles.icon].join(' ')}></i><span className={styles.navText}>PROJECTS</span></HashLink>
                    </li>
                    <li className={styles.contactNav}>
                        <HashLink to="#contact" scroll={el => scrollWithOffset(el)} className={styles.navItem}><i className={['fa-solid', 'fa-phone', styles.icon].join(' ')}></i><span className={styles.navText}>CONTACT</span></HashLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}