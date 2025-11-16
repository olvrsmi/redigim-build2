import { useState } from "react";

import {RedigimAccordion, AccordionSection} from "../components/RedigimAccordion";

export const SectionOpeningsType = 'accordion';

export const SectionOpeningsButtonText = 'Read the full report';

export function SectionOpeningsInfo(){
    return <>
        <h2>Alternative Imaginaries</h2>
        <p>
            Redistributive imaginaries consolidate an emerging common sense about the role of private and civil sector actors in mixed economies of welfare. Claims about digital platforms tend to align with market-oriented visions of welfare provision.
        </p>
        <p>
            Yet we also found evidence of alternative ways of thinking, nurtured in a diversity of civil society initiatives across Europe.
        </p>
    </>
}

export function SectionOpeningsMain() {
    const [basicState, setBasicState] = useState();
  return (
   <>
    <RedigimAccordion>
        <AccordionSection title="Community Empowerment">
            <blockquote>
                <p>
                    “We live in a capitalist state. […]  We live in a state where inequalities are embedded and inherent in our society. That’s why I believe that building strong communities is a vital complement. Collaboration between the public and private sectors is a key two-way path – not only so that the government, which cannot reach or fund everything, can rely on the support of the community to extend its reach, but also so that these communities can thrive and occupy spaces that the state alone cannot reach.” 
                </p>
                <cite>
                    Non-profit platform representative
                </cite>
            </blockquote> 
        </AccordionSection>
        <AccordionSection title="Welfare State Enhancement">
           <blockquote>
                <p>
                    “We fill gaps because the state is not taking responsibility. I don’t think that’s actually our job. But we can’t wait for the state to organize things, we have to help people now. […] When all these services are no longer needed, then the world will be in order.” 
                </p>
                <cite>
                    Voluntary sector organization representative
                </cite>
            </blockquote> 
        </AccordionSection>
        <AccordionSection title="Welfare Transnationalism">
            <blockquote>
                <p>
                    ‘People should be aware of how structural injustices are at play in our world. And how privileges are distributed in a grossly unfair manner. […] And to become aware of it and actively see oneself as part of it in order to be able to contribute to change. This can also be an expression of solidarity. […] I have a self-expectation of myself to be in solidarity and to promote it.’ 
                </p>
                <cite>
                    Voluntary initiative participant
                </cite>
            </blockquote> 
        </AccordionSection>       
    </RedigimAccordion>
   </>
  );
}
