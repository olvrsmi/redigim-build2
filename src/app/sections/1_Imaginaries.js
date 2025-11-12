import { useState } from "react";
import {RedigimAccordion, AccordionSection} from "../components/RedigimAccordion";

export const SectionImaginariesType = 'accordion';

export const SectionImaginariesButtonText = 'View the Diagram';

export function SectionImaginariesInfo(){
    return <>
        <h2>Imaginaries</h2>
        <p>
            Redistributive imaginaries are collective understandings of the relationship between societal contribution, welfare provision, and the affordances of the digital. Through our research in five European countries, we identified seven dominant redistributive imaginaries. 
        </p> 
    </>
}

export function SectionImaginariesMain() {
    const [basicState, setBasicState] = useState();
  return (
   <>
    <RedigimAccordion>
        <AccordionSection title="Welfare Solutionism">
            <p>
                We should take a problem-solving approach to social issues, and in particular to the challenge of raising money to address this kind of problem. There is enough money to go around, but the way we've tried to solve these problems in the past has not always been cost-effective, and support has not always been calibrated to those who really need it. There can also be hurdles when it comes to activating donations for social causes. A more data-led, evidence-based approach will optimize the resources available. It's really important that organisations and businesses in the private and third sectors are enabled to make a contribution in this field, because people in these organizations can offer expertise, insights and a unique problem-solving perspective. 
            </p>
        </AccordionSection>
         <AccordionSection title="Community Empowerment">
            <p>
              People are naturally inclined to help, and they want to donate to causes that will improve the lives of people in their communities. Voluntary giving helps to reinforce social bonds, creating more resilient communities. Digital innovation unlocks latent potential by activating communities and helping them to ‘get going’.
            </p>
        </AccordionSection>
        <AccordionSection title="Pragmatic Competition">
            <p>
                It’s a tough and competitive world. Public resources are limited, and social initiatives must compete for the attention of potential donors and funders. Digital platforms enable small social initiatives to raise their public profile, but survival in this cause marketplace takes significant effort and expertise.
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
        <AccordionSection title="Welfare Solutionsism">
            <p>
                We should take a problem-solving approach to social issues. There is enough money to go around, but support is not always calibrated to those who really need it. An evidence-based approach will optimize the resources available. Digital technological innovation helps us to overcome obstacles to positive social intervention.
            </p>
        </AccordionSection>
        <AccordionSection title="Welfare State Enhancement">
            <p>
              In an ideal world, charities wouldn't exist. Social needs aren't being met, and charities are forced to provide temporary relief. But it isn’t enough – only the state has the capacity to deal with problems of this scale. Tax reform could provide the funds to deliver better welfare provision for everyone. 
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
