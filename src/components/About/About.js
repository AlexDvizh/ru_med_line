import './About.css';
import img from '../../images/demax.jpg'

function About() {
  return (
    <section className="about" id="teg-about">
      <div className="about-wrap">
        <div className="about-text">
            <h3 className="about-title">О нас</h3>
            <p className="about-subtitle">Компания ООО «РУМЕДЛАЙН» является официальным дистрибьютором производителя «Beijing Demax Medical Technology Co», основанной в 2004 году, специализирующейся на разработке, производстве и продвижении расходных медицинских инструментов для всех направлений эндоваскулярной хирургии.</p>
        </div>
        <img className="about-img" src={img} alt=""></img>
      </div>
    </section>
  );
}

export default About;