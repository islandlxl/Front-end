import React from "react";

export default class SetStateComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }
    //异步问题  回调函数处理同步问题
    // increment=()=>{
    //     this.setState({
    //         count:this.state.count+1
    //     },()=>console.log(this.state.count));
    
    // }
    /**
     * 使用async 和 await 还有Promise处理同步和异常问题
     */ 
    async increment(){
     await  this.setStateAsync({count:this.state.count+1}); 
      console.log(this.state.count);
    }

     setStateAsync(state){
        new Promise((resolve)=>this.setState(state,resolve));
    }



    decrement=()=>{
        this.setState({
            count:this.state.count-1
        });
        console.log(this.state.count);
    }



    render(){
        return(
            <div>
                <h3>setState测试组件{this.state.count}</h3>
                <button onClick={this.increment}>增加</button>
                <button onClick={this.decrement}>减少</button>

            </div>
        );
    }
}