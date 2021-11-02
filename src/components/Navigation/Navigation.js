import './Navigation.css';
import { useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation().pathname;
  const main = (location === "/") ? true : false;

  return (
    <section className="nav">
      <div className="nav-wrap">
        <div>
          <p className="nav-contacts">8 (495) 408-31-21</p>
          <p className="nav-contacts">info@rumedline.ru</p>
        </div>
        { main ? (
            <ul className="nav-list">
              <a href="/"><li className="nav-item">Главная</li></a>
              <a href="#teg-about"><li className="nav-item">О компании</li></a>
              <a href="#teg-slider"><li className="nav-item">Продукция</li></a>
              <a href="#teg-contacts"><li className="nav-item">Контакты</li></a>
            </ul>
          ) : (
            <ul className="nav-list">
              <a href="/"><li className="nav-item">Вернуться на главную</li></a>
            </ul>
          )
        }  
      </div>  
    </section>
  );
}

export default Navigation;