import styles from "./RedigimBreadcrumb.module.css";

export default function RedigimBreadcrumb({ page=0, onChange=()=>{}}) {
  const current = page;
  return (
   <nav className={styles.breadcrumb}>
        <ol>
            <li className={`${styles.item} ${current === 0 ? styles.current : ''}`}>
                <button 
                    onClick={()=>{
                        onChange(0);
                    }}
                >
                    Imaginaries
                </button>
            </li>
            <li className={`${styles.item} ${current === 1 ? styles.current : ''}`}>
                <button
                    onClick={()=>{
                        onChange(1);
                    }}
                >
                    A Mixed Economy
                </button>
            </li>
            <li className={`${styles.item} ${current === 2 ? styles.current : ''}`}>
                <button
                    onClick={()=>{
                        onChange(2);
                    }}
                >
                    Digital Platforms
                </button>
            </li>
            <li className={`${styles.item} ${current === 3 ? styles.current : ''}`}>
                <button
                    onClick={()=>{
                        onChange(3);
                    }}
                >
                    Alternative imaginaries
                </button>
            </li>
        </ol>
    </nav>
  );
}
