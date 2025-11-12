import styles from "./RedigimDiagram.module.css";

export default function RedigimDiagramWrap( {children} ){
    return <figure className={styles.wrap}>
        {children}
    </figure>
}