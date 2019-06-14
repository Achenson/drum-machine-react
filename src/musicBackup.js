import React from 'react';

import './App.css';
import Mp3 from './basicrock.mp3';

class App extends React.Component {


  render() {

  let audio = new Audio(Mp3);

  return (
    <div className="App">
     <p className="text-center">test</p>
     <button onClick={() => audio.play()}>button text</button>
    </div>
  );
}
}


export default App;
