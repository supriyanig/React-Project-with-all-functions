import CoreConcept from './CoreConcept.jsx';
import {CORE_CONCEPTS} from '../data1.js';

export default function CoreConcepts(){
    return(
        <section id="core-concepts-section">
            <ul id='core-concepts'>
                {CORE_CONCEPTS.map((coreConceptItem)=>(
                <CoreConcept key={coreConceptItem.title} {...coreConceptItem}/>
                ))}
            </ul>
        </section>
    )
}