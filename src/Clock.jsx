import React from 'react';
export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date: new Date()
       };
    }

    componentDidMount() {
      this.timeId=setInterval(
          ()=>this.trick() ,1000
      )

    }
  
    trick(){
        this.setState({
            date:new Date(),
        });
    }
    componentWillUnmount() {
        clearInterval(this.timeId);
    
    }
  
  
    render(){
      //  const temp ='this is a temp var';
        return(
            <div>
                <p>now time is {this.state.date.toLocaleTimeString()}</p>         
            </div>
        );
    }


}