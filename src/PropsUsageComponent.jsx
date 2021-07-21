import React from 'react';

class PropsUsageComponent extends React.Component{
      

    constructor(props){
        super(props);
        this.state={
            count:10
        }

    }
    
    render(){
        const element = (
            <div>
              <h1>Hello,  i am PropsUsageComponent!</h1>
              <h2>It is {new Date().toLocaleTimeString()}.</h2>
              <p>{this.state.count}</p>
              <p>{this.props.nav}</p>
              
            </div>
          );
        return <h1 >this is props component learning!{element}</h1>;
    }

}
export default PropsUsageComponent;