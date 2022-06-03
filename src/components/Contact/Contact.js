import styles from './Contact.module.css';

export default function Contact() {
    return (
        <div className={styles.container} id="contact">
            <div className={styles.subheading}>
                <div className={styles.horizontalLine}></div>
            <p className={styles.greeting}>SAY HELLO</p>
            </div>

            <h2 className={styles.projectsHeading}>CONTACT</h2>


            <div className={styles.contactContainer}>
                <div className={styles.emailCard}>
                    <span className={styles.emailIconSpan} ><i className={['fa-solid', 'fa-envelope', styles.envelope].join(' ')}></i></span>
                    <p className={styles.email}>emil.arnaudov.ecom@gmail.com</p>
                    <p className={styles.secondary}>Email Me</p>
                </div>


                <form className={styles.form} action="">
                    <h3>Contact Form</h3>
                    <input type="text" placeholder='Email*'/>
                    <input type="text" placeholder='Subject*'/>
                    <textarea type="text" placeholder='Message*'/>

                    <button>SEND</button>
                </form>
            </div>

        </div>
    )
}