import React, { useState, useEffect } from 'react';
import { Header } from './Components/Header/Header';
import snapshot from './Assets/buy.jpg';
import { Wrapper } from './App.styles';
import { Links } from './Components/Links/Links';
import Intro from './Components/Intro/Intro';
import { Popup } from './Components/Popups/Popup';
import DingSound from './Assets/Ding.mp3';

const App: React.FC = () => {

  const [popupDisplayed, setPopupDisplayed] = useState(false);
  const audio = new Audio(DingSound);
  audio.muted = true;

  useEffect(() => {
    setTimeout(
      () => showWindow(),
      6000
    );
  }, [])

  useEffect(() => {
    setTimeout(
      () => showWindow(),
      12000
    );
  }, [])

  const showWindow = () => {
    setPopupDisplayed(true);
    audio.muted = false;
    audio.play();
  }

  const hideWindow = () => {
    setPopupDisplayed(false);
  }

  return <Wrapper>
    { popupDisplayed ? <Popup hideWindow={hideWindow} url="https://store.steampowered.com/app/1133580/Snapshot_VR/" image={snapshot} /> : null }
    <Header />
    <Links />
    <Intro />
  </Wrapper>
}

export default App;
