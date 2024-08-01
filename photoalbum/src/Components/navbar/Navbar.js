import styles from "./Navbar.module.css";
export default function Navbar() {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navLogo}>
                    <img src="https://mellow-seahorse-fc9268.netlify.app/assets/logo.png" alt="logo" />
                    <h3>PhotoFolio</h3>
                </div>
            </div>
        </>
    )
}