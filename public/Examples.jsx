import TabButtons from './TabButtons.jsx';
import Tabs from './Tabs.jsx';
import Section from './Section.jsx';
import {EXAMPLES} from '../data1.js';
import { useState } from 'react';

export default function Examples(){
    const [tabContent,setTabContent]=useState();

    function handleSelect(selectedbtn){
      setTabContent(selectedbtn)
      // console.log('selcted',tabContent);
  } 
    return(
        <Section title="Examples" id="examples">
        {/* <h2></h2> */}
        <Tabs buttons={<>
            {(Object.keys(EXAMPLES)).map((tabName)=>(
        // <TabButtons key={tabName} isSelected={tabContent===tabName} onSelect={()=>handleSelect(tabName)}>{tabName.toUpperCase()} </TabButtons>
        <TabButtons key={tabName} isSelected={tabContent===tabName} onClick={()=>handleSelect(tabName)}>{tabName.toUpperCase()} </TabButtons>

        ))}</>} buttonContainer="menu">
            { 
            <div id="tab-content">
                {!tabContent?<p>Please select a tab</p>: <div>
                <div>Current Tab : {tabContent}</div>
                <p>{EXAMPLES[tabContent].title}</p>
                <p>{EXAMPLES[tabContent].description}</p>
                <pre>
                    <code>{EXAMPLES[tabContent].code}</code>
                </pre>
                </div>}   
            </div>
            }
        </Tabs>
          

        {/* <menu> */}
       
        {/* <TabButtons isSelected={tabContent==='components'} onSelect={()=>handleSelect('components')}>Components </TabButtons>
        <TabButtons isSelected={tabContent==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX </TabButtons>
        <TabButtons isSelected={tabContent==='props'} onSelect={()=>handleSelect('props')}>Props </TabButtons>
        <TabButtons isSelected={tabContent==='state'} onSelect={()=>handleSelect('state')}>State </TabButtons> */}

        {/* </menu> */}
       
        </Section>
      
    )
}