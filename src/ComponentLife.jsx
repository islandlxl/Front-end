import React from "react";

export default class ComponentLife extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:10
        }
        this.handChange=this.handChange.bind(this);

    }
    /**
     * 组件的生命周期函数调用： \public\reactComponentLife.png
     */
    componentWillMound(){
        console.log("componentWillMound");
    }
    componentDidMound(){
        console.log("componentDidMound");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }
    componentWillUpdate(){
        console.log("componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("componentDidupdate");
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }
    componentWillUnmount(){
        console.log("componentWillunMount");
    }

   
    handChange(){
        this.setState({
            count: this.state.count+=1
        });

    };

    render(){
        return(
            <div>
                <h2>生命周期函数:{this.state.count}</h2>
                <button onClick={this.handChange}>修改</button>
                <p>{this.props.title}</p>
            </div>
        );
    }
}