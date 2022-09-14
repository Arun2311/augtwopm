import React, { Component } from "react";

class Sachin extends Component{
    state = {
        age:45,
        Bounderis:600
    }
    render(){
        return(
            <div> 

                <h1>Sachin</h1>
                <h3>A:{this.state.age}</h3>
                <h4>six:{this.state.Bounderis}</h4>




            </div>
        )
    }
} 

export default Sachin