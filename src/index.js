import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

 
class DrumButtons extends Component {
constructor(props) {
  super(props);
}
  
  handleKey = (e) => {
      let key = document.querySelector(`.drum-pad[data-key = "${e.keyCode}"]`).dataset.letter;
      let audio = document.getElementById(key);
      if ( !audio ) return;
      audio.play();
      audio.currentTime = 0;
      let name = document.querySelector(`.drum-pad[data-key = "${e.keyCode}"]`).id;
      console.log(name)
      document.getElementById('name').textContent = name;
  }
  
  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKey)
  }
  

  handleClick = (e) => {
    let key = e.target.dataset.letter;
    let audio = document.getElementById(key);

    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
    let name = e.target.id;
    document.getElementById('name').textContent = name;
  }
  
  render() {
    const { drums } = this.props;
    
      return(
<div>
<div id="display" className="row">
      <div className="col s10 m6 offset-s1 offset-m3">
      <h3 id="name" className="white-text center-align display"></h3>
      </div>    
    </div>
    <div className="row keyRow">
    { drums && drums.map(drum => {
        return (
          <button className="col drum-pad purple lighten-5 border letter grey-text text-darken-3 center-align" 
            key={drum.letter} 
            data-key={drum.key} 
            id={drum.name}
            data-letter={drum.letter}
            onClick={this.handleClick}
            onKeyDown={this.handleKey}>

                {drum.letter}
                <audio className="clip" id={drum.letter} src={drum.src}></audio>
           </button>
        )
    })
    } 
    </div>
</div>
      )
    }
  }
  
  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        value: '',
        drumKeys:  
        [{
          letter: "Q",
          key: 81,
          name: "clap",
          src: "https://raw.githubusercontent.com/rockstarcreativestudio/Javascript30/6502501c23a90ab8f821183ad5d9a642b41f0086/Drum-Kit/sounds/clap.wav"
        },
        {
          letter: "W",
          key: 87,
          name: "hihat",
          src: "https://raw.githubusercontent.com/rockstarcreativestudio/Javascript30/6502501c23a90ab8f821183ad5d9a642b41f0086/Drum-Kit/sounds/hihat.wav"
        },
        {
          letter: "E",
          key: 69,
          name: "kick",
          src: "https://raw.githubusercontent.com/rockstarcreativestudio/Javascript30/6502501c23a90ab8f821183ad5d9a642b41f0086/Drum-Kit/sounds/kick.wav"
        },
        {
          letter: "A",
          key: 65,
          name: "openhat",
          src: "https://raw.githubusercontent.com/rockstarcreativestudio/Javascript30/6502501c23a90ab8f821183ad5d9a642b41f0086/Drum-Kit/sounds/openhat.wav"
        },
        {
          letter: "S",
          key: 83,
          name: "boom",
          src: "https://raw.githubusercontent.com/rockstarcreativestudio/Javascript30/6502501c23a90ab8f821183ad5d9a642b41f0086/Drum-Kit/sounds/boom.wav"
        },
        {
          letter: "D",
          key: 68,
          name: "ride",
          src: "https://raw.githubusercontent.com/rockstarcreativestudio/Javascript30/6502501c23a90ab8f821183ad5d9a642b41f0086/Drum-Kit/sounds/ride.wav"
        },
        {
          letter: "Z",
          key: 90,
          name: "snare",
          src: "https://raw.githubusercontent.com/rockstarcreativestudio/Javascript30/6502501c23a90ab8f821183ad5d9a642b41f0086/Drum-Kit/sounds/snare.wav"
        },
        {
          letter: "X",
          key: 88,
          name: "tom",
          src: "https://raw.githubusercontent.com/rockstarcreativestudio/Javascript30/6502501c23a90ab8f821183ad5d9a642b41f0086/Drum-Kit/sounds/tom.wav"
        },
        {
          letter: "C",
          key: 67,
          name: "cowbell",
          src: "https://raw.githubusercontent.com/rockstarcreativestudio/Javascript30/6502501c23a90ab8f821183ad5d9a642b41f0086/Drum-Kit/sounds/hicowbel.wav"
        }]
      }
    }
    
    render() {
      return (
      <div>
      <div id="drum-machine" className="container">
    
        <div className="row">
          <div className="col s12">
          <h1 className="center-align yellow-text text-darken-1 title">Press the key. Play some drums</h1>
          </div>
        </div>
        <DrumButtons drums={this.state.drumKeys} />
      </div>
   </div>
      );
    }
  };
  
  
  ReactDOM.render(
    <App />, 
    document.getElementById('root')
  );
