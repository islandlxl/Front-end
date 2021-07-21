import React from "react"; 

class Home extends React.Component{

    render(){
        
        return(
            <div>
                <h1>hello i am Home component</h1>
                <h3>{this.props.title}</h3>
                <ul>
                    <li>{this.props.nav.map((element,index)=>{
                        return <li key={index}>{element}</li>;
                      })
                    }</li>
                </ul>

            </div>
        );
    }

} 
export default Home;