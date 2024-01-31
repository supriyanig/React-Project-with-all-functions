import logo from '../../assets/investment.png';

export default function Header(){
    return(<header id="header">
        <img src={logo} alt="Investment img"/>
        <h1>Investment Calculator</h1>
    </header>)
}