import { useState } from "react";

import { RedigimPanels, RedigimPanelsPanel } from "../components/RedigimPanels";
import RedigimDiagramDigitalisation from "../components/RedigimDiagramDigitalisation";

export const SectionDigitalisationType = 'diagram';
export const SectionDigitalisationButtonText = 'Alternative Imaginaries';

export function SectionDigitalisationInfo(){
    return <>
        <h2>Digital Platforms</h2>
        <p>
            Redistributive imaginaries assimilate ideas about digital tools and platforms into frameworks for understanding redistribution practices.
        </p>
        <p>
            We tracked the incidence of tech-solutionist ideas about the capacity of digital platforms to democratize participation, make money flows more transparent, aggregate micro-donations, and make small initiatives more visible. 
        </p>
    </>
}

export function SectionDigitalisationMain() {
    const [currentPanel, setCurrentpanel] = useState(false);
    const possiblePanels = [
        'democratization',
        'transparency',
        'visibility',
        'aggregation'
    ];
    return <>
        <RedigimDiagramDigitalisation onSelect={(which)=>{
            if(  possiblePanels.indexOf( which ) > -1 && which !== currentPanel ){
                setCurrentpanel( which )
            } else {
                setCurrentpanel( false );
            }
        }}/>
        <RedigimPanels>
            <RedigimPanelsPanel 
                title="Democratization" 
                isOpen={currentPanel==='democratization'}
                onClose={() => { setCurrentpanel(false) }}
            >
                <blockquote>
                    <p>‘The whole framework and notion of what we’ve done is to create a more democratic solution where people are heard by their wallets.’</p>
                    <cite>For-profit platform representative</cite>
                </blockquote>
            </RedigimPanelsPanel>
            <RedigimPanelsPanel 
                title="Transparency" 
                isOpen={currentPanel==='transparency'}
                onClose={() => { setCurrentpanel(false) }}
            >
                <blockquote>
                    <p>‘Because we are all using the same platform and everything is there for people to see, it also helps [us to be] very transparent with how much money we are getting, where it is going, how it is being distributed and things like that.’</p>
                    <cite>Voluntary initiative member</cite>
                </blockquote>
            </RedigimPanelsPanel>
            <RedigimPanelsPanel 
                title="Visibility"
                isOpen={currentPanel==='visibility'}
                onClose={() => { setCurrentpanel(false) }}
            >
                <blockquote>
                    <p>‘Where we should make improvements is our visibility on social media. [Donors] react to ads that they see by chance […] You need to be in the right place at the right time.’</p>
                    <cite>Voluntary sector organization representative</cite>
                </blockquote>
            </RedigimPanelsPanel>
            <RedigimPanelsPanel 
                title="Aggregation" 
                isOpen={currentPanel==='aggregation'}
                onClose={() => { setCurrentpanel(false) }}
            >
                <blockquote>
                    <p>‘People often say, “I alone can't make a difference”. […] But if they only knew how important one euro is – if everyone contributed just that small amount, the impact would be huge.’</p>
                    <cite>Voluntary sector organization representative</cite>
                </blockquote>
            </RedigimPanelsPanel>
        </RedigimPanels>
    </>
}
