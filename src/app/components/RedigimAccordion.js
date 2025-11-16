import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import styles from "./RedigimAccordion.module.css";


export function AccordionSection( {title, children}){
    return <>
      <AccordionItem 
          headingTag={'header'}
          className={styles.section} 
          header={
            <h3>
              {title}
            </h3>
          }
          buttonProps={{
            className: ({ isEnter }) =>
              `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
          }}
          headingProps={{className: styles.header }}
          contentProps={{ className: styles.content }}
          panelProps={{ className: styles.panel }}
      >
          {children}
      </AccordionItem>
    </>
}

export function RedigimAccordion( { children } ) {
  return <>
    <Accordion 
      className={styles.accordion}
      transition 
      transitionTimeout={250}
    >
      {children}
    </Accordion>
  </>
}
