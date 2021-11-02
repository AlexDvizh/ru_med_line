import './App.css';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router';
import Indeflyator from '../Indeflyator/Indeflyator';
import Main from '../Main/Main';
import IndeflyatorAccessory from '../IndeflyatorAccessory/IndeflyatorAccessory';
import Yconnector from '../Yconnector/Yconnector';
import Shpricz from '../Shpricz/Shpricz';
import Manifold from '../Manifold/Manifold';
import ConnectingLines from '../ConnectingLines/ConnectingLines';
import Popup from '../Popup/Popup';
import { useState } from 'react';

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  function handlePopupOpen() {
    setPopupOpen(true);
  }


  return (
    <div className="app">
      <Header />
      <Route exact path="/">
        <Main 
          setPopupOpen={handlePopupOpen}
        />
      </Route>
      <Route path="/shpricz-indeflyator-did30s-off">
        <Indeflyator />
      </Route>
      <Route path="/shpricz-indeflyator-s-aksessuarom">
        <IndeflyatorAccessory />
      </Route>
      <Route path="/y-konnektor-v-nabore">
        <Yconnector />
      </Route>
      <Route path="/kontrolnyij-shpricz-s-3-kolczami-ds310-ds312">
        <Shpricz />
      </Route>
      <Route path="/manifoldyi-i-kraniki">
        <Manifold />
      </Route>
      <Route path="/linii-soedinitelnyie">
        <ConnectingLines />
      </Route>
      <Popup 
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
      />
    </div>
  );
}

export default App;
