import ComponentWidth from "./comWidth";
import styles from "../styles/footer.module.css";

const Footer = () => {
    return (
        <div className={styles.mainFooter}>
            <ComponentWidth>
                <div className={styles.containerFooter}>
                    <div className={styles.logoContainer}>
                        <div className={styles.logo}><span style={{ fontSize: "1.8vw", padding: "0px 5px" }} >doo</span><p>MOZIS</p> </div>
                        <div className={styles.text}>Osnovano krajem devedesetih, 1996.godine, kao porodično preduzeće. Dugogodišnje iskustvo, predan rad i porodična tradicija satkani su u uspješnost i ime preduzeća.</div>
                    </div>
                    <div className={styles.linksContainer}>
                        <div className={styles.links}>
                            <div className={styles.link}>Početna</div>
                            <div className={styles.link}>O nama</div>
                            <div className={styles.link}>Proizvodi</div>
                            <div className={styles.link}>Galerija</div>
                            <div className={styles.link}>Kontakt</div>

                        </div>
                    </div>
                </div>{" "}
            </ComponentWidth>
        </div>
    );
};

export default Footer;
