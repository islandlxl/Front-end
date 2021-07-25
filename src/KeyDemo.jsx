import React from "react";

export default class KeyDemo extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userInfo:[{
                name:'zhangsan',
                age:20,
                sex:'nan',
                hobby:['aaa','bbb','ccc']
            },
            {
                name:'lisi',
                age:20,
                sex:'nan',
                hobby:['213','232','2131']
            },
            {
                name:'wangwu',
                age:20,
                sex:'nan',
                hobby:['213','232','2131']
            }
           ]
        }
    }
    addELeHandler=()=>{
        this.setState({
            userInfo:this.state.userInfo.concat({
                name:'xueliang',
                age:30,
                sex:'nv',
                hobby:['eat','drink','play']
            })
        });
    }



    render(){
        return(
            
            <div>
               <h3>this is key demo Component</h3>
               <ul>{
                   this.state.userInfo.map((element,index)=>{
                       return <li key={index}>
                           <span>{element.name}</span>
                           <span>{element.age}</span>
                           <span>{element.sex}</span>
                           <div>{element.hobby.map((childEle,childIndex)=>{
                               return (<span key={childIndex}>{childEle}</span>);
                           })}</div>
                       
                       
                       </li>;
                   })
            
                 } </ul>
                 <button onClick={this.addELeHandler}>添加一个元素</button>

            </div>
        );
    }
}