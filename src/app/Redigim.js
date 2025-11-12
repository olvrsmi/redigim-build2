"use client"

import { useState } from "react";

import styles from "./page.module.css";

import RedigimHeader from "./components/redigimheader";
import RedigimBreadcrumb from "./components/RedigimBreadcrumb";
import RedigimButton from "./components/RedigimButton";
import RedigimDiagramBase from "./components/RedigimDiagramBase";

import {SectionImaginariesType, SectionImaginariesMain, SectionImaginariesInfo, SectionImaginariesButtonText} from "./sections/1_Imaginaries";
import {SectionDiagramType, SectionDiagramMain, SectionDiagramInfo, SectionDiagramButtonText} from "./sections/2_Diagram";
import {SectionDigitalisationType, SectionDigitalisationMain, SectionDigitalisationInfo, SectionDigitalisationButtonText} from "./sections/3_Digitalisation";
import {SectionOpeningsType, SectionOpeningsMain, SectionOpeningsInfo, SectionOpeningsButtonText} from "./sections/4_Openings";

const pages = [
  {
    type:   SectionImaginariesType,
    info:   SectionImaginariesInfo,
    main:   SectionImaginariesMain,
    button: SectionImaginariesButtonText
  },
  {
    type:   SectionDiagramType,
    info:   SectionDiagramInfo,
    main:   SectionDiagramMain,
    button: SectionDiagramButtonText
  },
  {
    type:   SectionDigitalisationType,
    info:   SectionDigitalisationInfo,
    main:   SectionDigitalisationMain,
    button: SectionDigitalisationButtonText
  },
  {
    type:   SectionOpeningsType,
    info:   SectionOpeningsInfo,
    main:   SectionOpeningsMain,
    button: SectionOpeningsButtonText
  }
]


export default function Redigim() {
  const [page, setPage] = useState( 0 )

  const pageData = pages[page];

  return (
    <>
      <RedigimHeader />
      <RedigimBreadcrumb 
        page={page}
        onChange={( pageIndex) => {
          if( pageIndex < pages.length ){
            setPage( pageIndex );
          }
        }}
      />
      <main className={styles.main}>
        <article className={styles.wrap}>   
          <aside className={styles.paneInfo}>
            {pageData.info()}
          </aside>
          <section className={styles.paneMain}>
              {(pageData.type === 'diagram') ? <RedigimDiagramBase /> : ''}
              {pageData.main()}
          </section>
          <nav className={styles.paneNav}>
            {((page + 1) < pages.length) ? 
              <RedigimButton 
                title={`${pageData.button} (${page})`} 
                onClick={() => {
                  const newPage = (page + 1) < pages.length ? page + 1 : page;
                  setPage( newPage )
                }}
              />
              :
              <RedigimButton 
                title="See the full report"
                href="https://example.com"
                newTab
              />
            }
          </nav>        
        </article>
      </main>
    </>
  );
}
