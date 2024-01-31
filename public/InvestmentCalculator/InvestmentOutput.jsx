import {calculateInvestmentResults,formatter} from './Investments.js';

export default function InvestmentOutput({userInput}){
    var resultDta=calculateInvestmentResults(userInput);
    const initialInvestment=resultDta[0].valueEndOfYear-resultDta[0].interest-resultDta[0].annualInvestment;
    console.log(resultDta);
    return(<table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Investment (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>

            </tr>
        </thead>
        <tbody>
            {resultDta.map((result)=>{
                const totalIntValue=result.valueEndOfYear-result.annualInvestment*result.year-initialInvestment;
                const totalAmountInvested=result.valueEndOfYear-totalIntValue;
                return <tr key={result.year}>
                    <td>{result.year}</td>
                    <td>{formatter.format(result.valueEndOfYear)}</td>
                    <td>{formatter.format(result.interest)}</td>
                    <td>{formatter.format(totalIntValue)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>)
}