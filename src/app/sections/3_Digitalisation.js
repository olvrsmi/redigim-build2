import { useState } from "react";

import { RedigimPanels, RedigimPanelsPanel } from "../components/RedigimPanels";
import RedigimDiagramDigitalisation from "../components/RedigimDiagramDigitalisation";

export const SectionDigitalisationType = 'diagram';
export const SectionDigitalisationButtonText = 'Other Findings';

export function SectionDigitalisationInfo(){
    return <>
        <h2>Digital Platforms</h2>
        <p>
            Redistributive imaginaries assimilate tech-solutionist ideas into frameworks for understanding redistribution practices in civil society.
        </p> 
    </>
}

const Panels = {
    'democratization': <RedigimPanelsPanel title="Democratization">
            <blockquote>
                <p>"The whole framework and notion of what we’ve done is to create a more democratic solution where people are heard by their wallets."</p>
                <cite>For-profit platform representative</cite>
            </blockquote>
        </RedigimPanelsPanel>,
    'transparency': <RedigimPanelsPanel title="Transparency">
            <blockquote>
                <p>"Because we are all using the same platform and everything is there for people to see, it also helps [us to be] very transparent with how much money we are getting, where it is going, how it is being distributed and things like that."</p>
                <cite>Voluntary initiative member</cite>
            </blockquote>
        </RedigimPanelsPanel>,
    'visibility': <RedigimPanelsPanel title="Visibility">
            <blockquote>
                <p>"Where we should make improvements is our visibility on social media. [Donors] react to ads that they see by chance […] You need to be in the right place at the right time."</p>
                <cite>Voluntary sector organization representative</cite>
            </blockquote>
        </RedigimPanelsPanel>,
    'aggregation': <RedigimPanelsPanel title="Aggregation">
            <blockquote>
                <p>"People often say, 'I alone can't make a difference'. […] But if they only knew how important one euro is – if everyone contributed just that small amount, the impact would be huge."</p>
                <cite>Voluntary sector organization representative</cite>
            </blockquote>
        </RedigimPanelsPanel>
};

export function SectionDigitalisationMain() {
    const [currentPanel, setCurrentpanel] = useState(false);

    return <>
        <RedigimDiagramDigitalisation onSelect={(which)=>{
            if( Panels[ which ] ){
                setCurrentpanel(Panels[which])
            } else {
                setCurrentpanel( false );
            }
        }}/>
        <RedigimPanels>
            { currentPanel ? currentPanel : <></> }
        </RedigimPanels>
    </>
}
