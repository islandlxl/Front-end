import React from 'react';

class ListItems extends React.Component{

    render(){
        
        // return <div>
        //     <ul>{this.props.listNums.map((num,index)=>{
        //      return   <li key={index}>{num}</li>;
        //    })}</ul>

        // </div>;
        const numbers =[1,2,3,4,5];
         return  <li>
             {this.props.valuer}
         </li>;
    }
}

export default ListItems;