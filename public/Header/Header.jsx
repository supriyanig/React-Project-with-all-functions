import logo from '../../logo.svg';
import './Header.css';
const desc=["Fundamental", "Core","Crucial"]
function getRandom(max){
  return Math.floor(Math.random()*(max+1))
}
function Header(){
    const getDesc=desc[getRandom(2)];
    return(
      <header>
      <img src={logo} width="100" height="100" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {getDesc} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
    )
  }
  export default Header;