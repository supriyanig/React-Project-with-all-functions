// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import TicTac from './components/TicTacToe/TicTac.jsx'
import InvestmentCalc from './components/InvestmentCalculator/InvestmentCalac.jsx';
// import ReactCss from './components/ReactCss/ReactCss.jsx'
import CreateContextProvider from './components/createContextProvider/createContextProvider.jsx';
import SelectPlacesSideEffect from './components/selectPlacesSideEffect/selectPlacesSideEffect.jsx'
import UseReducerEg from './components/useReducerEg/useReducerEg.jsx';
// function CoreConcept(props){
  //object destructuring

function App() {
  // var tabContent="Please click tab";

  return (
    <>
      <Header/>
      <CoreConcepts/>
      <Examples/>
      <TicTac/>
      <InvestmentCalc/>
      {/* <ReactCss/> */}
      <CreateContextProvider/>
      <SelectPlacesSideEffect/>
      <UseReducerEg/>
      
    
      {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
      <CoreConcept {...CORE_CONCEPTS[1]}/>
      <CoreConcept {...CORE_CONCEPTS[2]}/> */}
         
      
    </>
  );
}

export default App;
