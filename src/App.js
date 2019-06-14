import React, {Component} from 'react';

import './App.css';

import smirk1 from './smirk1.mp3';
import smirk2 from './smirk2.mp3';
import giggle from './giggle.mp3';

import laughter from './crowdlaugh.mp3';
import groan from './groans.mp3';
import hiccup from './hiccup.mp3';

import sneeze from './sneeze.mp3';
import snore from './snore.mp3';
import slurp from './slurp.mp3';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        display: 'click or press a corresponding key',

      }

      this.handleClick= this.handleClick.bind(this);
      this.handleKeyPress= this.handleKeyPress.bind(this);
      this.play= this.play.bind(this);
      
      this.audio01 = new Audio(smirk1);
      this.audio02 = new Audio(smirk2);
      this.audio03 = new Audio(giggle);
      this.audio04 = new Audio(laughter);
      this.audio05 = new Audio(groan);
      this.audio06 = new Audio(hiccup);
      this.audio07 = new Audio(sneeze);
      this.audio08 = new Audio(snore);
      this.audio09 = new Audio(slurp);

    }

    componentWillMount(){
      document.addEventListener('keypress', this.handleKeyPress)
      }


    play(audioVar) {
      audioVar.play()
    }



    handleClick(display) {

      const disp = ['smirk one [Q]', 'smirk two [W]', 'giggle [E]', 'crowd laughing [A]', 'groan [S]', 'hiccup [D]', 'sneeze [Z]', 'snore [X]', 'slurp [C]'];

      this.setState(
       {display: display}
      )

      switch(display) {
        case disp[0]:
          this.audio01.play();
          break;
        case disp[1]:
          this.audio02.play();
          break;   
        case disp[2]:
          this.audio03.play();
          break;
        case disp[3]:
          this.audio04.play();
          break;      
        case disp[4]:
          this.audio05.play();
          break;
        case disp[5]:
          this.audio06.play();
          break;   
        case disp[6]:
          this.audio07.play();
          break;
        case disp[7]:
          this.audio08.play();
          break;
        case disp[8]:
          this.audio09.play();
          break;
        default:
          console.log('No value');    
        
      }

   }


   handleKeyPress (event) {

    const disp = ['smirk one [Q]', 'smirk two [W]', 'giggle [E]', 'crowd laughing [A]', 'groan [S]', 'hiccup [D]', 'sneeze [Z]', 'snore [X]', 'slurp [C]'];

    switch(event.key) {
      case "q":
        this.setState({display:  disp[0] })
        this.play(this.audio01);
        break;
      case "w":
        this.setState({display:  disp[1]})
        this.play(this.audio02);
        break;
      case "e":
        this.setState({display:  disp[2]})
        this.play(this.audio03);
        break;
      case "a":
        this.setState({display:   disp[3]})
        this.play(this.audio04);
        break;
      case "s":
        this.setState({display:  disp[4]})
        this.play(this.audio05);
        break;
      case "d":
        this.setState({display:  disp[5]})
        this.play(this.audio06);
        break;
      case "z":
        this.setState({display:  disp[6]})
        this.play(this.audio07);
        break;
      case "x":
        this.setState({display:  disp[7]})
        this.play(this.audio08);
        break;
      case "c":
        this.setState({display:  disp[8]})
        this.play(this.audio09);
        break; 
      default:
        console.log('No value');
    }

  }


    render() {
      return (
        <div className="App container-fluid" onKeyDown={this.handleKeyPress}>
          <div className="d-flex align-items-center" style={{height: '100vh', marginLeft: '-15px', marginRight: '-15px', backgroundColor: '#FFE8DC' }}>
            <Display display={this.state.display} handleClick={this.handleClick}  playAudio={this.play} />
          </div>
        </div>
      )
    }
  }




 function Display (props) {

    const disp = ['smirk one [Q]', 'smirk two [W]', 'giggle [E]', 'crowd laughing [A]', 'groan [S]', 'hiccup [D]', 'sneeze [Z]', 'snore [X]', 'slurp [C]'];

    return (

      <div id="drum-machine" className="mx-auto text-center" style={{width: '270px', height: '295px', minWidth: '270px', borderRadius: '5px', backgroundColor: '#FFE8DC'}}>
        <button  onClick={() => props.handleClick(disp[0])} className="btn  m-1" id={disp[0]} key='1'>Q</button>
        <button onClick={() => props.handleClick(disp[1])} className="btn  m-1" id={disp[1]} key='2'>W</button>
        <button onClick={() => props.handleClick(disp[2])} className="btn  m-1" id={disp[2]}  key='3'>E</button>
        <div className="w-100"></div>
        <button onClick={() => props.handleClick(disp[3])} className="btn  m-1" id={disp[3]}  key='4'>A</button>
        <button onClick={() => props.handleClick(disp[4])} className="btn  m-1" id={disp[4]}  key='5'>S</button>
        <button onClick={() => props.handleClick(disp[5])} className="btn  m-1" id={disp[5]}  key='6'>D</button>
        <div className="w-100"></div>
        <button onClick={() => props.handleClick(disp[6])} className="btn  m-1" id={disp[6]}  key='7'>Z</button>
        <button onClick={() => props.handleClick(disp[7])} className="btn  m-1" id={disp[7]}  key='8'>X</button>
        <button onClick={() => props.handleClick(disp[8])} className="btn  m-1" id={disp[8]}  key='9'>C</button>
       
        <div className="mx-auto" style={{width: '256px', backgroundColor: '#FE9F6D'}}>
         <p className="mx-auto text-center drum-pad">{props.display}</p>
        
        </div>

      </div>
      
    )

 } 




export default App;

