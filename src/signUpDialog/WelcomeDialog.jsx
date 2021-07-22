import React from "react";
import Dialog from "./Dialog";
// 包含关系 WelcomeDialog 包含 FancyBorder
export default class WelcomeDialog extends React.Component{


    render(){
        return(
           <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
        );
    }
}