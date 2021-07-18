import React from 'react';
import PropsUsageComponent from './PropsUsageComponent';
import Home from './Home';
import StateComponent from './StateComponent';
class App extends React.Component{
    
    render(){
       const nav=['wq','eqw'];
        return (<div>
            <h1>hello  react,now time is </h1>
            <PropsUsageComponent nav= {nav} />
            <Home nav={nav} title='导航'/>
            <StateComponent />
        </div>)
    };
}
export default App;