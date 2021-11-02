import './SliderItem.css';

function SliderItem(props) {

  return (
    <section className="slider-item">
        <div className="slider-content">
          <a className="slider-link" href={props.adress}>
            <img className="slider-img" src={props.url} alt="Изображение продукции"></img>
          </a>
          <p className="slider-text">{props.name}</p>
        </div>
    </section>
  );
}

export default SliderItem;