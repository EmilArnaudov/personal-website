import styles from './Skills.module.css';

export default function Skills() {
    return (
        <div className={styles.container}>
            <div className={styles.subheading}>
                <div className={styles.horizontalLine}></div>
                <p className={styles.greeting}>CHECK OUT MY</p>
            </div>
            <h2 className={styles.skillsHeading}>SKILLS</h2>
            <div className={styles.skillsListing}>
                    <div className={styles.skillContainer}>
                        <img className={styles.skillsImage} src="/images/htmlLogo.png" alt="" />
                        <p className={styles.skillName}>HTML</p>
                    </div>
                    <div className={styles.skillContainer}>
                        <img className={styles.skillsImage} src="/images/cssLogo.png" alt="" />
                        <p className={styles.skillName}>CSS</p>
                    </div>
                    <div className={styles.skillContainer}>
                        <img className={styles.skillsImage} src="/images/jsLogo.png" alt="" />
                        <p className={styles.skillName}>Javascript</p>
                    </div>
                    <div className={styles.skillContainer}>
                        <img className={styles.skillsImage} src="/images/reactLogo.png" alt="" />
                        <p className={styles.skillName}>React</p>
                    </div>
                    <div className={styles.skillContainer}>
                        <img className={styles.skillsImage} src="/images/nodeLogo.png" alt="" />
                        <p className={styles.skillName}>Node</p>
                    </div>
                    <div className={styles.skillContainer}>
                        <img className={styles.skillsImage} src="/images/expressLogo.png" alt="" />
                        <p className={styles.skillName}>Express</p>
                    </div>
                    <div className={styles.skillContainer}>
                        <img className={styles.skillsImage} src="/images/mongodbLogo.png" alt="" />
                        <p className={styles.skillName}>MongoDB</p>
                    </div>
                    <div className={styles.skillContainer}>
                        <img className={styles.skillsImage} src="/images/firebaseLogo.png" alt="" />
                        <p className={styles.skillName}>Firebase</p>
                    </div>
            </div>

        </div>
    )
}