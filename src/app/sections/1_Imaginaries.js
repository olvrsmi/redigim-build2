import { useState } from "react";
import {RedigimAccordion, AccordionSection} from "../components/RedigimAccordion";

export const SectionImaginariesType = 'accordion';

export const SectionImaginariesButtonText = 'A Mixed Economy';

export function SectionImaginariesInfo(){
    return <>
        <h2>Imaginaries</h2>
        <p>
            Redistributive imaginaries are collective, common-sense understandings of redistribution. These imaginaries provide different ways of making sense of welfare provision and the role of digital platforms. Through fieldwork in civil society in five European countries, we identified seven dominant imaginaries.
        </p> 
    </>
}

export function SectionImaginariesMain() {
    const [basicState, setBasicState] = useState();
  return (
   <>
    <RedigimAccordion>       
         <AccordionSection title="Community Empowerment">
            <p>
              People are naturally inclined to help, and they want to donate to causes that will improve the lives of people in their communities. Voluntary giving helps to reinforce social bonds, creating more resilient communities. Digital innovation unlocks latent potential by activating communities and helping them to get going.
            </p>
        </AccordionSection>
        <AccordionSection title="Pragmatic Competition">
            <p>
                It’s a tough and competitive world. Public resources are limited, and social initiatives must compete for the attention of potential donors and funders. Digital platforms enable small initiatives to raise their public profile, but survival in this cause marketplace takes significant effort and expertise.
            </p>
        </AccordionSection>
        <AccordionSection title="Welfare Complementarity">
            <p>
                Market and civil society actors play an essential role in the mixed economy of welfare, working alongside state actors to ensure that social needs are met. Digital platforms and tools provide an infrastructure that helps actors in the mixed economy of welfare to achieve complementarity.
            </p>
        </AccordionSection>
        <AccordionSection title="Welfare Consumerism">
            <p>
                Citizens pay taxes, but they also want to choose where their money goes and donate to the causes they care about. Charitable giving enables individuals to participate in important decisions about how social need should be met. Digital tools and platforms make it easier for people to express their preferences.
            </p>
        </AccordionSection>
        <AccordionSection title="Welfare Solutionism">
            <p>
                We should take a problem-solving approach to social issues. There is enough money to go around, but support is not always calibrated to those who really need it. An evidence-based approach will optimize the resources available. Digital technological innovation helps us to overcome obstacles to positive social intervention.
            </p>
        </AccordionSection>
        <AccordionSection title="Welfare State Enhancement">
            <p>
              In an ideal world, charities wouldn’t exist. Social needs aren’t being met, and charities are forced to provide temporary relief. But it isn’t enough – only the state has the capacity to deal with problems of this scale. Tax reform could provide the funds to deliver better welfare provision for everyone. 
            </p>
        </AccordionSection>
        <AccordionSection title="Welfare Transnationalism">
            <p>
                The distribution of wealth is globally unequal, and prosperity in rich nations is conditional on poverty and extraction in the global South. Nation states are an obstacle to the fair redistribution of resources. Digital tools and platforms make it possible for support to cross borders. 
            </p>
        </AccordionSection>        
    </RedigimAccordion>
   </>
  );
}
