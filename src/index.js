import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



function trick(){

  console.log('this is a trick function');


  ReactDOM.render(
  
    <App />,
    
    document.getElementById('root')
  );
}

setInterval(trick, 1000);
