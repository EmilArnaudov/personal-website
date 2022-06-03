import styles from './Welcome.module.css';

export default function Welcome() {
    return (
        <div className={styles.container} id="home">
            <p className={styles.hello}>HI THERE! I'M</p>
            <h1 className={styles.myName}><span className={styles.highlight}>EMIL</span> ARNAUDOV</h1>
            <p className={styles.description}><span className={styles.highlight}>A Front-End Web Developer</span> passionate about creating interactive applications and experiences on the web.</p>
            <div className={styles.buttons}>
                <button className={styles.resume}>Resume</button>
                <div className={styles.contactButtons}>
                    <a href='https://github.com/EmilArnaudov' target="_blank" className={styles.contactButton}><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    )
}