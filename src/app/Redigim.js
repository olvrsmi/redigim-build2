"use client"

import { useState, useRef } from "react";
import { animateScroll, Events as ScrollEvents } from "react-scroll";

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

const LoadingPlaceholder = ()=>{
    const [basicState, setBasicState] = useState();
    return <div style={{height: '100vh'}}></div>
}


export default function Redigim() {
  const [page, setPage] = useState( 0 );
  const [isLoading, setIsloading] = useState( false );

  const pageData = pages[page];

  const runScroll = function(){
    if( document.body.scrollHeight <= document.body.clientHeight || (document.scrollingElement.scrollTop > 85 && document.scrollingElement.scrollTop < 95)){
      return;
    }
    setIsloading(true);

    const scrollToTop = new Promise((resolve,reject) => {
      ScrollEvents.scrollEvent.register('end', () => {
        resolve( true );
        ScrollEvents.scrollEvent.remove('end');
      })
      animateScroll.scrollTo(90);
    })

    scrollToTop.then(() => {
      setIsloading(false);
    })
  }

  return (
    <>
      <RedigimHeader />
      <RedigimBreadcrumb
        id="redigim-breadcrumb"
        page={page}
        onChange={( pageIndex) => {
          if( pageIndex < pages.length ){
            setPage( pageIndex );
            runScroll();
          }
        }}
      />
      <main className={`${styles.main} ${(isLoading)? styles.mainLoading : ''}`}>
        <article className={styles.wrap}>   
          <aside className={[styles.paneInfo, styles.pane].join(' ')}>
            {(!isLoading) ? pageData.info() : ''}
          </aside>
          <section className={[styles.paneMain, styles.pane].join(' ')}>
              {(pageData.type === 'diagram' && !isLoading) ? <RedigimDiagramBase /> : ''}
              {(!isLoading) ? pageData.main() : LoadingPlaceholder()}
          </section>
          <nav className={[styles.paneNav, styles.pane].join(' ')}>
            {((page + 1) < pages.length) ? 
              <RedigimButton 
                title={`${pageData.button}`} 
                onClick={() => {
                  const newPage = (page + 1) < pages.length ? page + 1 : page;
                  setPage( newPage );
                  runScroll();
                }}
              />
              :
              <RedigimButton 
                title={`${pageData.button}`} 
                href="https://redigim.arts.ac.uk/publications/"
                newTab
              />
            }
          </nav>        
        </article>
      </main>
    </>
  );
}
