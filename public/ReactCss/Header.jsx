import logo from '../../assets/art-logo.png';
import style from './Header.module.css';
export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* <p style={{
        color:'red',
        textAlign:'left'
      }}>A community of artists and art-lovers.</p> */}
       <p className={style.para}>A community of artists and art-lovers.</p>
    </header>
  );
}
