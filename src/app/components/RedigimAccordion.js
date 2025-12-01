import { ControlledAccordion, AccordionItem, useAccordionProvider } from '@szhsin/react-accordion';
import styles from "./RedigimAccordion.module.css";
import { useEffect, useState } from 'react';


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

export function RedigimAccordion( { children, loc } ) {
  console.log(loc);
  const [location, setLocation] = useState(loc);
  const providerValue = useAccordionProvider({
    allowMultiple: false,
    transition: true,
    transitionTimeout: 350
  });

  useEffect(() => {
    setLocation(loc);
    providerValue.toggleAll( false );
  }, [loc])

  return <>
    <ControlledAccordion 
      providerValue={providerValue}
      className={styles.accordion}
    >
      {children}
    </ControlledAccordion>
  </>
}
