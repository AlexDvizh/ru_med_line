import './Form.css';

function Form() {
  return (
    <form className="form">
        <label>
            <input 
                className="form-input"
                required
                placeholder="Имя"
                type="text"
                name="name"
                minLength="2"
                maxLength="40"
            ></input>
            <span></span>
        </label>
        <label>
            <input
                className="form-input"
                required
                placeholder="Телефон"
                type="tel"
                name="phone"
                minLength="9"
                maxLength="40"
            ></input>
            <span></span>
        </label>
        <label>
            <input
                className="form-input"
                placeholder="E-mail"
                type="email"
                name="mail"
                minLength="2"
                maxLength="40"
            ></input>
            <span></span>
        </label>
        <label>
            <textarea
                className="form-input form-input_text"
                placeholder="Сообщение"
                type="text"
                name="text"
                maxLength="1000"
            ></textarea>
            <span></span>
        </label>
        <button type="submit" className="form-submit-button form-submit-button_disabled">Отправить</button>
    </form>
  );
}

export default Form;