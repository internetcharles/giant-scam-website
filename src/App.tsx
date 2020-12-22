import React from 'react';
import { Header } from './Components/Header/Header';
import { Game } from './Components/Games/Game';
import SnapshotOne from './Assets/snapshot1.jpg';
import ChopItOne from './Assets/chopit1.jpg'
import { ReverseGame } from './Components/Games/ReverseGame';

const App: React.FC = () => {
  return <div>
    <Header />
    <Game title="Snapshot" imageURL={SnapshotOne} info="TESTESTESTSETSETSETSETSETSET" />
    <ReverseGame title="Chop It!" imageURL={ChopItOne} info="TESTSETESTSETSETSETSETSETSETSETSETES" />"
  </div>
}

export default App;
