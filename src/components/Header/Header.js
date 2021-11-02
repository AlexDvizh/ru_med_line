import './Header.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.png';
import { useLocation } from 'react-router-dom';

function Headers() {
  const location = useLocation().pathname;
  const main = (location === "/") ? true : false;

  return (
    <div>
    <Navigation /> 
    {main ? ( 
      <section className="header">
        <div className="header-content">
            <div className="content-text">
                <img className="content-logo" src={logo} alt="ООО «РУМЕДЛАЙН»"></img>
                <h2 className="content-title">Официальный дистрибьютор производителя «DEMAX»</h2>
                <a href="#teg-contacts">
                  <button className="add-contacts-button">Контакты</button>
                </a>
            </div>
        </div>
      </section>
      ) : (
        <></>
      )
      } 
    </div>
  );
}

export default Headers;
