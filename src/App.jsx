import React from 'react';
import PropsUsageComponent from './PropsUsageComponent';
import Home from './Home';
import StateComponent from './StateComponent';
import Clock  from './Clock';
import Calculator from './temperature/Calculator';
import TemperatureInput from './temperature/TemperatureInput';
import WelcomeDialog from './signUpDialog/WelcomeDialog';
import SignUpDialog from './signUpDialog/SignUpDialog';

class App extends React.Component{
    
    render(){
       let nav=['wq','eqw'];

        return (<div>
            {/* <h1>hello  react i am App Component,now time is </h1> */}
            {/* <PropsUsageComponent nav= {nav} />
            <Home nav={nav} title='导航'/>
            <StateComponent /> */}
            <SignUpDialog  />
        </div>)
    };
}
export default App;