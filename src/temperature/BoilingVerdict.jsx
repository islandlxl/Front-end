import React from "react";


export class BoilingVerdict extends React.Component{

    render(){
       const celsius =this.props.celsius;
       if (celsius>100) {
        return(<p> The water would boil.</p>);    
       }else{
        return(<p> The water is being boil.</p>);  

       }       
    }
}