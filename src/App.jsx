import React from 'react';
// import PropsUsageComponent from './PropsUsageComponent';
// import Home from './Home';
// import StateComponent from './StateComponent';
// import Clock  from './Clock';
// import Calculator from './temperature/Calculator';
// import TemperatureInput from './temperature/TemperatureInput';
// import WelcomeDialog from './signUpDialog/WelcomeDialog';
// import SignUpDialog from './signUpDialog/SignUpDialog';
import ComponentLife from './ComponentLife';
import KeyDemo from './KeyDemo';
import RefDemo from './RefDemo';
import SetStateComponent from './SetStateComponent';
import StateComponent from './StateComponent';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"文本1"
        }
        this.updateText=this.updateText.bind(this);
    }
    updateText(){
        this.setState({
            title:"文本2"
        });
    }
    render(){
      

        return (<div>
            {/* <h1>hello  react i am App Component,now time is </h1> */}
            {/* <PropsUsageComponent nav= {nav} />
            <Home nav={nav} title='导航'/>
            <StateComponent /> */}
            {/* <ComponentLife title={this.state.title}  />
            <button onClick={this.updateText}>修改文本2</button> */}
            <RefDemo  />
        </div>)
    };
}
export default App;