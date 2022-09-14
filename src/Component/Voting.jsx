import React, { Component } from 'react'

export default class Voting extends Component {
    state = {
        count:0
    }

    handleadd = ()=>{
        this.setState({count:this.state.count+1})
    }

  render() {
    return (
      <div>

        <h1>{this.props.lang}</h1>
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.handleadd}>Add</button>



      </div>
    )
    
  }
}
