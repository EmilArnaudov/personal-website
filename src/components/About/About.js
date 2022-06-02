import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.subheading}>
                <div className={styles.horizontalLine}></div>
                <p className={styles.greeting}>NICE TO MEET YOU</p>
            </div>
            <h2 className={styles.aboutHeading}>ABOUT ME</h2>
            <p className={styles.aboutMe}>I'm a front-end web developer with a <span className={styles.highlight}>keen interest in programming and web technologies</span>. I really enjoy learning new things and becoming better at what I do, every single day. I am currently a student at <span className={styles.highlight}>SoftUni Coding Academy</span>. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn from them!</p>
        </div>
    )
}