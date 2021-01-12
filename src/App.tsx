import React from 'react';
import { Header } from './Components/Header/Header';
import { Game } from './Components/Games/Game';
import SnapshotOne from './Assets/snapshot1.jpg';
import ChopItOne from './Assets/chopit1.jpg'
import { ReverseGame } from './Components/Games/ReverseGame';
import Collapsible from 'react-collapsible';
import styles from './App.module.css'
import Ticker from 'react-ticker';
import { Wrapper } from './App.styles';
import { Links } from './Components/Links/Links';

const App: React.FC = () => {
  return <Wrapper>
    <Header />
    <Links />
  </Wrapper>
}

export default App;
