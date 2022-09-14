import React, { Component } from 'react'

export default class Acoordchild extends Component {

    state= {
        showinfo:false
    }


toggle = () =>{
    this.setState({showinfo:!this.state.showinfo})
}


  render() {
    return (
      <div>



           <div>
            <h3>{this.props.title}</h3>
            <button onClick={this.toggle}>{this.state.showinfo?'-':'+'}</button>
''
{
         this.state.showinfo &&    <p>{this.props.info}</p>


  }


            </div>
      </div>
    )
  }
}
