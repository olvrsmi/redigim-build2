import styles from "./RedigimButton.module.css";

export default function RedigimButton( { title, className='', onClick=()=>{}, href=false, newTab=false } ) {
    return <>
        {(href) 
            ? 
                <a 
                    className={`${styles.button} ${className}`}
                    href={href}
                    target={(newTab) ? '_blank' : '_self'}
                >
                    {title}
                </a>
            :
                <button 
                    className={`${styles.button} ${className}`}
                    onClick={onClick}
                >
                    {title}
                </button>
        }
    </>
}