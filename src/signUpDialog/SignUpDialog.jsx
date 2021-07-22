import React from "react";
import Dialog from "./Dialog";

export default class SignUpDialog extends React.Component{


    constructor(props){
        super(props);
        this.state={
            login:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSignUp=this.handleSignUp.bind(this);
    }
    handleChange(event){
        this.setState({
            login:event.target.value
        });
    }
    handleSignUp(){
        
        console.log(this.state.login);
        alert(`WELCOME aboard,!`+this.state.login);
    }

    render(){
       
        return (
            <Dialog title="Mars Exploration Program" message="How should we refer to you?">
                <input value={this.state.value}
                   onChange={this.handleChange}
                  />
                 <button onClick={this.handleSignUp}>
                     Sign me up
                 </button>

             </Dialog>
        );
    }
}