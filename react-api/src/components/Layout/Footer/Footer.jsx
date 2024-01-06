import styles from './footer.module.css'

const Footer = () =>{
    return (
        <div className={styles.footer}>
            <div className={styles.logos}>
                <div><p>N</p></div>
                <span>WP-Notes</span>
            </div>

            <div className={styles.contact}>
                <p>Holo theme by <span> VitaThemes </span>|<span> Privacy</span></p>
                <div>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">Facebook</a>
                </div>
            </div>
        </div>


    )
}

export default Footer;