import styles from "./RedigimHeader.module.css";

export default function RedigimHeader() {
  return (
    <header className={styles.header}>
        <div className={styles.inner}>
            <a href="https://redigim.arts.ac.uk/" rel="home">
                <img src="https://redigim.arts.ac.uk/wp-content/themes/redigim/dist/images/logo.png" width="223" height="86" alt="Redigim" />
            </a>
            <nav className={styles.mainNav}>
                <a href="https://redigim.arts.ac.uk/">Home</a>
            </nav>
        </div>
    </header>
  );
}
