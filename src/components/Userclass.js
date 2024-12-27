import React from "react";

class Userclass extends React.Component {

    constructor(props){
        super(props)
    }
    render(){

        const {name} = this.props
        return(
            <div>
            <h1>Name: {name} </h1>
            <h2>Location : Gaur</h2>
            <h2>District : Rautahat</h2>
          </div> 
        )
    }
}


export default Userclass;