import React from 'react';


export default class StateComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:100
        } 
        this.increment=this.increment.bind(this);
        this.decresment=this.decresment.bind(this);
    }

    increment(){
       let countF =this.state.count;
        this.setState({
            count:countF+=1
        });
    }
    
    decresment(){
        let countF =this.state.count;
        this.setState({
            count:countF-=1
        });
      
    }
    

    


    render(){
    
        return (
            <div>
               <h1>hello  i am StateComponent component</h1>
               <h3>当前score显示 {this.state.count}</h3>
                <button onClick={this.increment}>增加</button>
                <button onClick={this.decresment}>减少</button>
                
            </div>
        ) ;
    }
}