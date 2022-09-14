import React, { Component } from "react";
import { Button,Card,CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap';
import logo from "./logo512.png"

import Dog from "./images.jfif"


export default class Form extends Component {
  state = {
    fname: "",
    lname: "",
    Age: "",
    submit:false,
    password:"",
    confirmpassword:""
  };

  handle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlesubmit = () => {

    if(this.state.password===this.state.confirmpassword){


    this.setState({submit:true})}
    else{
      alert('password should')
    }
  };

  // handlel=(e)=>{
  //     this.setState({lname:e.target.value})
  // }
  // handleage=(e)=>{
  //     this.setState({Age:e.target.value})
  // }

  render() {
    return (
      <div>

        {!this.state.submit && <div>
        <h1>StudentForm</h1>
        <label>FirstName</label>
        <input name="fname" onChange={this.handle} value={this.state.fname} />
        <br></br>
        <label>LastName</label>
        <input name="lname" onChange={this.handle} value={this.state.lname} />
        <br></br>
        <label>Age</label>
        <input
          type="number"
          name="Age"
          onChange={this.handle}
          value={this.state.Age}
        />
        <br/>
<label>Password</label>
        <input type='password' name="password" onChange={this.handle}  value={this.state.password}/>

<br></br>
<label>Confirm password</label>
<input type="password" name="confirmpassword" onChange={this.handle} value={this.state.confirmpassword}/>
<input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>


        <button className="btn btn-primary" onClick={this.handlesubmit}>Submit</button> </div>}

        {this.state.password}
        {this.state.confirmpassword}

        {this.state.submit && <div>


        <h1>my firstname::{this.state.fname}</h1>
        <h1>my last name::{this.state.lname}</h1>
        <h1>my age is:{this.state.Age}</h1>
        
        </div>
        }

<Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src={logo}
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>

<img src={Dog}/>

      </div>
    );
  }
}
