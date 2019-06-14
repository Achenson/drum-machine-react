import React, {Component} from 'react';

import './App.css';




class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        display: 'test3'
      }

      this.handleClick= this.handleClick.bind(this);

    }

    handleClick() {
     this.setState(
       {display: 'test4'}
     )
   }




    render() {
      return (
        <div className="App container-fluid">

       

          <div className="d-flex align-items-center" style={{height: '100vh', marginLeft: '-15px', marginRight: '-15px', backgroundColor: 'lightgray' }}>
        
          <div id="drum-machine" className="mx-auto text-center bg-light" style={{width: '400px', height: '400px', minWidth: '400px', borderRadius: '5px'}}>
            
            <Button onClick={this.handleClick} id="1" name={'Q'}/>
            <Button id="2" name={'W'}/>
            <Button id="3" name={'E'}/>
            <div className="w-100"></div>
            <Button id="4" name={'A'}/>
            <Button id="5" name={'S'}/>
            <Button id="6" name={'D'}/>
            <div className="w-100"></div>
            <Button id="7" name={'Z'}/>
            <Button id="8" name={'X'}/>
            <Button id="9" name={'C'}/>
            <div>
            <p className="mx-auto text-center drum-pad">{this.state.display}</p>
          </div>

          </div>
          
         
       
              
          </div>

          
        </div>


      )
    }

  }

 function Button (props) {



    return (
      <button onClick={props.onClick} className="btn bg-info m-1" style={{width: '80px', height: '80px'}}>{props.name}</button>
    )

 } 




export default App;
