import React from "react";

export default class RefDemo extends React.Component{
    constructor(props){
        super(props);
        this.helloH1=React.createRef();
    }

    componentDidMount(){
        //console.log(this.helloH1.current);
        this.helloH1.current.style.color="red"

    }

    render(){
        return(
            <div>
                <h3 ref={this.helloH1}>ref and DOM demo</h3>

            </div>
        );
    }
}