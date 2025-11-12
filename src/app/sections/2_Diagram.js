import { useState } from "react";

import { RedigimPanels, RedigimPanelsPanel } from "../components/RedigimPanels";

import RedigimDiagramImaginaries from "../components/RedigimDiagramImaginaries";


export const SectionDiagramType = 'diagram';

export const SectionDiagramButtonText = 'View Digitalisation';

export function SectionDiagramInfo(){
    return <>
        <h2>A Mixed Economy</h2>
        <p>
            These dominant redistributive imaginaries provide different visions of the mixed economy of welfare. The majority emphasize the relative contribution of civil society actors – often working in partnership with market actors – over those of the state.
        </p> 
    </>
}

const Panels = {
    'communityempowerment': <RedigimPanelsPanel title="Community Empowerment">
            <blockquote>
                <p>"People are generally more inclined to donate if they recognize someone from their own town […] because we tend to feel connected within our local communities."</p>
                <cite>Voluntary initiative representative</cite>
            </blockquote>
        </RedigimPanelsPanel>,
    'pragmaticcompetition': <RedigimPanelsPanel title="Pragmatic Competition">
            <blockquote>
                <p>"The financial situation in the country affects us directly and it also affects us through the continuously increasing competitiveness of fundraising. And we have plans, different kinds of thoughts about how to increase our visibility."</p>
                <cite>Voluntary sector organization representative</cite>
            </blockquote>
        </RedigimPanelsPanel>,
    'welfarecomplementarity': <RedigimPanelsPanel title="Welfare Complementarity">
            <blockquote>
                <p>"If institutions aren’t functioning properly, then let’s step in temporarily, do our part, and create cohesion between us. We should support each other."</p>
                <cite>Voluntary sector organization representative</cite>
            </blockquote>
        </RedigimPanelsPanel>,
    'welfareconsumerism': <RedigimPanelsPanel title="Welfare Consumerism">
            <blockquote>
                <p>"I believe we are moving toward a public-private combination model where our taxes cover a certain extent […] However, to go a little further, the private sector comes into play, allowing us to choose where we want our money to go. And that, too, is something very beautiful."</p>
                <cite>Non-profit platform representative</cite>
            </blockquote>
        </RedigimPanelsPanel>,
    'welfaresolutionism': <RedigimPanelsPanel title="Welfare Solutionism">
            <blockquote>
                <p>"‘A lot of effort has been put into getting people to donate, […] and of course there were very big hurdles to actually trigger a donation. And we believe that […] we are doing something good in the NGO world, that these hurdles are being reduced and that market failure is being reduced."</p>
                <cite>For profit platform representative</cite>
            </blockquote>
        </RedigimPanelsPanel>,
    'welfarestateenhancement': <RedigimPanelsPanel title="Welfare State Enhancement">
            <blockquote>
                <p>"But for me, of course, the public sector should cover a lot more than it does now. I think we should have certain things guaranteed. I’m very much in favour of paying taxes and making sure they’re well distributed."</p>
                <cite>Non-profit platform representative</cite>
            </blockquote>
        </RedigimPanelsPanel>,
    'welfaretransnationalism': <RedigimPanelsPanel title="Welfare Transnationalism">
            <blockquote>
                <p>"People have always moved around and have the right to do so. We invented nation states and borders. And who gives us the right to exclude others from an area just because we were born here?"</p>
                <cite>Voluntary initiative representative</cite>
            </blockquote>
        </RedigimPanelsPanel>
};


export function SectionDiagramMain() {
    const [currentPanel, setCurrentpanel] = useState(false);
    return <>
        <RedigimDiagramImaginaries onSelect={( which )=>{
            if( Panels[which] ){
                setCurrentpanel(Panels[which])
            } else {
                setCurrentpanel( false );
            }
        }} />
        <RedigimPanels>
            { currentPanel ? currentPanel : <></> }
        </RedigimPanels>
  </>
}


