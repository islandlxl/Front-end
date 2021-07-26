import React from "react";
import styles from "./tic-tac-toe.css";

export default class Square extends React.Component{

    
    render(){
        return(
            <button  onClick={()=>this.props.onClick()} >
                {this.props.value}
            </button>
        );
    }
}