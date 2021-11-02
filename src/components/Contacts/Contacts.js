import Form from '../Form/Form';
import './Contacts.css';

function Contacts(props) {

  return (
    <section className="contacts" id="teg-contacts">
      <div className="contacts-list">
        <h2 className="contacts-list__title">Контакты</h2>
        <div className="contacts-content-wrap">
          <div className="contacts-content">
            <h4 className="contacts-title">Телефон:</h4>
            <p className="contacts-subtitle">8 (495) 408-31-21</p>
          </div>
          <div className="contacts-content">
            <h4 className="contacts-title">Электронная почта:</h4>
            <p className="contacts-subtitle">info@rumedline.ru</p>
          </div>
        </div>
      </div>
      <h2 className="contacts-list__title">Написать нам</h2>
      <Form />
      <div className="privacy-policy">
        <p className="privacy-policy__content">Отправляя данную форму Вы соглашаетесь с</p>
        <button type="button" className="privacy-policy__button" onClick={props.setPopupOpen}>Политикой конфиденциальности</button>
      </div>
    </section>
  );
}

export default Contacts;