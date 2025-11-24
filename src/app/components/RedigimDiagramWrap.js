import styles from "./RedigimDiagram.module.css";

export default function RedigimDiagramWrap( {children, caption=''} ){
    return <figure className={styles.wrap}>
        {children}
        <figcaption>{caption}</figcaption>
    </figure>
}