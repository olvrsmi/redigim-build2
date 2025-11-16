import { useState } from "react";

import styles from "../components/RedigimAccordion.module.css";

import { RedigimPanels, RedigimPanelsPanel } from "../components/RedigimPanels";

import RedigimDiagramImaginaries from "../components/RedigimDiagramImaginaries";


export const SectionDiagramType = 'diagram';

export const SectionDiagramButtonText = 'Next: Digital Platforms';

export function SectionDiagramInfo(){
    return <>
        <h2>A Mixed Economy</h2>
        <p>
            Redistributive imaginaries provide different visions of the mixed economy of welfare. The majority emphasize the relative contribution of civil society actors – often working in partnership with market actors – over those of the state.
        </p> 
    </>
}

export function SectionDiagramMain() {
    const [currentPanel, setCurrentpanel] = useState(false);
    const possiblePanels = [
        'communityempowerment',
        'pragmaticcompetition',
        'welfarecomplementarity',
        'welfareconsumerism',
        'welfaresolutionism',
        'welfarestateenhancement',
        'welfaretransnationalism'
    ];
    return <>
        <RedigimDiagramImaginaries onSelect={( which )=>{            
            if(  possiblePanels.indexOf( which ) > -1 && which !== currentPanel ){
                setCurrentpanel( which )
            } else {
                setCurrentpanel( false );
            }
        }} />
        <RedigimPanels>
            <RedigimPanelsPanel title="Community Empowerment" isOpen={currentPanel==='communityempowerment'} onClose={() => { setCurrentpanel(false) }}>
                <blockquote>
                    <p>‘The role of our platform is to help […] projects to activate their own community.’</p>
                    <cite>For-profit platform representative</cite>
                </blockquote>
            </RedigimPanelsPanel>
            <RedigimPanelsPanel title="Pragmatic Competition" isOpen={currentPanel==='pragmaticcompetition'} onClose={() => { setCurrentpanel(false) }}>
                <blockquote>
                    <p>‘The financial situation in the country affects us directly and it also affects us through the continuously increasing competitiveness of fundraising. And we have plans, different kinds of thoughts about how to increase our visibility.’</p>
                    <cite>Voluntary sector organization representative</cite>
                </blockquote>
            </RedigimPanelsPanel>
            <RedigimPanelsPanel title="Welfare Complementarity" isOpen={currentPanel==='welfarecomplementarity'} onClose={() => { setCurrentpanel(false) }}>
                <blockquote>
                    <p>‘If institutions aren’t functioning properly, then let’s step in temporarily, do our part, and create cohesion between us. We should support each other.’</p>
                    <cite>Voluntary sector organization representative</cite>
                </blockquote>
            </RedigimPanelsPanel>
            <RedigimPanelsPanel title="Welfare Consumerism" isOpen={currentPanel==='welfareconsumerism'} onClose={() => { setCurrentpanel(false) }}>
                <blockquote>
                    <p>‘I believe we are moving toward a public-private combination model where our taxes cover a certain extent […] However, to go a little further, the private sector comes into play, allowing us to choose where we want our money to go. And that, too, is something very beautiful.’</p>
                    <cite>Non-profit platform representative</cite>
                </blockquote>
            </RedigimPanelsPanel>
            <RedigimPanelsPanel title="Welfare Solutionism" isOpen={currentPanel==='welfaresolutionism'} onClose={() => { setCurrentpanel(false) }}>
                <blockquote>
                    <p>‘A lot of effort has been put into getting people to donate, […] and of course there were very big hurdles to actually trigger a donation. And we believe that […] we are doing something good in the NGO world, that these hurdles are being reduced and that market failure is being reduced.’</p>
                    <cite>For profit platform representative</cite>
                </blockquote>
            </RedigimPanelsPanel>
            <RedigimPanelsPanel title="Welfare State Enhancement" isOpen={currentPanel==='welfarestateenhancement'} onClose={() => { setCurrentpanel(false) }}>
                <blockquote>
                    <p>‘But for me, of course, the public sector should cover a lot more than it does now. I think we should have certain things guaranteed. I’m very much in favour of paying taxes and making sure they’re well distributed.’</p>
                    <cite>Non-profit platform representative</cite>
                </blockquote>
            </RedigimPanelsPanel>
            <RedigimPanelsPanel title="Welfare Transnationalism" isOpen={currentPanel==='welfaretransnationalism'} onClose={() => { setCurrentpanel(false) }}>
                <blockquote>
                    <p>‘This is a community that proves to me that the government is failing, and that the world could be better without a system of nation states and governance and domination. I think what we’re doing at the moment is more providing relief to people who have been harmed by the government.’</p>
                    <cite>Voluntary initiative member</cite>
                </blockquote>
            </RedigimPanelsPanel>
        </RedigimPanels>
  </>
}


