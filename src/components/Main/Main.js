import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import SimpleSlider from '../Slider/Slider';
import './Main.css';

function Main(props) {
  return (
    <div className="main">
        <SimpleSlider />
        <About />
        <Contacts 
          setPopupOpen={props.setPopupOpen}
        />
    </div>
  );
}

export default Main;