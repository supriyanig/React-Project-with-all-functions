import './InvestmnetCalac.css';
import Header from './Header.jsx';
import InvestmentInput from './InvestmentInput.jsx';
import InvestmentOutput from './InvestmentOutput.jsx';
import { useState } from 'react';
export default function InvestmnetCalc(){
    const[userInput,setUserInput]=useState(
        {
            initialInvestment:10000,
            annualInvestment:1200,
            expectedReturn:6,
            duration:10
        }
    );
const inputIsValid=userInput.duration>=1?true:false;
    function handleChange(inputIdentifier,newValue){
        setUserInput((prevInput)=>{
            return{
                ...prevInput,[inputIdentifier]:+newValue
            }
        })
    }
return(<div className="investment-section">
<Header></Header>
<InvestmentInput onChangeInput={handleChange} userInput={userInput}/>

{inputIsValid? <InvestmentOutput  userInput={userInput}/>:<p className='center'>Please enter duration greater than zero.</p>}
</div>)
}