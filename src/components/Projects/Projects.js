import styles from './Projects.module.css';

export default function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.subheading}>
                <div className={styles.horizontalLine}></div>
            <p className={styles.greeting}>TAKE A LOOK AT MY</p>
            </div>

            <h2 className={styles.projectsHeading}>PROJECTS</h2>
            

            <div className={styles.projectContainer}>
                <div className={styles.project}>
                    <div className={styles.projectImageContainer}>
                        <img className={styles.projectImage} src="/images/chatApp.png" alt="" />
                    </div>
                    <div className={styles.projectDetails}>
                        <p className={styles.projectName}>ChatMe</p>
                        <p className={styles.technologiesUsed}>Technologies used: <span className={styles.highlight}>React</span>, <span className={styles.highlight}>HTML</span>, <span className={styles.highlight}>CSS</span>, <span className={styles.highlight}>Firebase</span></p>
                        <ul className={styles.list}>
                        <li>
                            <p className={styles.listDescription}>Users can log in with an existing Google account. Find other users and send instant messages and images.</p>
                        </li>
                        <li >
                            <p className={styles.listDescription}>Uses Firebase Auth for authentication and session management.</p>
                        </li>
                        <li>
                            <p className={styles.listDescription}>Uses firestore as a database which enables the instant updates.</p>
                        </li>
                    </ul>

                    <div className={styles.buttons}>
                        <a className={styles.live} href="">Live</a>
                        <a className={styles.code} href="">Code</a>
                    </div>
                </div>
            </div>

                <div className={styles.project}>
                    <div className={styles.projectImageContainer}>
                        <img className={styles.projectImage} src="/images/weatherApp.png" alt="" />
                    </div>
                    <div className={styles.projectDetails}>
                        <p className={styles.projectName}>ForeWeather</p>
                        <p className={styles.technologiesUsed}>Technologies used: <span className={styles.highlight}>React</span>, <span className={styles.highlight}>HTML</span>, <span className={styles.highlight}>CSS</span></p>
                        <ul className={styles.list}>
                        <li>
                            <p className={styles.listDescription}>Uses the user's location to give accurate weather details for the next 5 days. Other locations can be checked through the search bar.</p>
                        </li>
                        <li >
                            <p className={styles.listDescription}>Uses GoogleMaps API for locations.</p>
                        </li>
                        <li>
                            <p className={styles.listDescription}>Uses OpenWeatherMap API for weather forecast.</p>
                        </li>
                    </ul>

                    <div className={styles.buttons}>
                        <a className={styles.live} href="">Live</a>
                        <a className={styles.code} href="">Code</a>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}