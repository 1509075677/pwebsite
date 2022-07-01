import React from 'react';
import './App.css';

function App() {
  function toinstagram(){
    window.location="https://www.instagram.com/jasxv9/";
  }
  function tolinkedin(){
    window.location="https://www.linkedin.com/in/jason-chen-395523221/";
  }
  function togithub(){
    window.location="https://github.com/1509075677";
  }
  return (
    <div class="App">
      
      <div class="landingpfp"><img src={require('./images/landing/landingpfp.svg').default}/></div>
      <div class="landingquoteup"><img src={require('./images/landing/landingquoteup.svg').default}/></div>
      <div class="landingquotedown"><img src={require('./images/landing/landingquotedown.svg').default}/></div>
      <div class="landingline"><img src={require('./images/landing/landingline.svg').default}/></div>
      
      <div class='directory'>
        <div class="elements"><img src={require('./images/landing/landingabout.svg').default}/></div>
        <div class="elements"><img src={require('./images/landing/landingresume.svg').default}/></div>
        <div class="elements"><img src={require('./images/landing/landingcontact.svg').default}/></div>
        <div class="pelements"><img src={require('./images/landing/landingprojects.svg').default}/></div>
      </div>
      <div class='icon'>
      <div class="iconp" onClick={togithub}><img src={require('./images/landing/landinggithub.svg').default}/></div>
      <div class="iconp" onClick={toinstagram}><img src={require('./images/landing/landinginstagram.svg').default}/></div>
      <div class="iconp" onClick={tolinkedin}><img src={require('./images/landing/landinglinkedin.svg').default}/></div>
      </div>
    </div>
  );
}

export default App;
