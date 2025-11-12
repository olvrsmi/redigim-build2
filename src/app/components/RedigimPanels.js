import styles from "./RedigimAccordion.module.css";

export function RedigimPanelsPanel( { title, children } ){
return <div className={styles.panelspanel}>
  <header className={styles.header}>
    <h3>{title}</h3>
  </header>
  <div className={styles.content}>
    <div className={styles.panel}>
      {children}
    </div>
  </div>
</div>
}

export function RedigimPanels( { children } ) {
  return <div className={styles.panels}>
    {children}    
  </div>
}


{/* <div class="info-panel">
    <header class="info-panel--header">
        <h3>Disintermediated Transnationalism</h3>
          <button class="info-panel--toggle">+</button>
    </header>
    <div class="info-panel--content">
        <p>
            We should take a problem-solving approach to social issues, and in particular to the challenge of raising money to address this kind of problem. There is enough money to go around, but the way we've tried to solve these problems in the past has not always been cost-effective, and support has not always been calibrated to those who really need it. There can also be hurdles when it comes to activating donations for social causes. A more data-led, evidence-based approach will optimize the resources available. It's really important that organisations and businesses in the private and third sectors are enabled to make a contribution in this field, because people in these organizations can offer expertise, insights and a unique problem-solving perspective. 
        </p>
    </div>
</div> */}
