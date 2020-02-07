import React from 'react';
import './App.css';

class login extends React.Component {
    constructor(props){
      super(props);

      if(localStorage.getItem("id") && localStorage.getItem("pwd"))
      this.props.history.push('/home'); 
        this.state={
            id:'',
            pwd:''
        }
      }
      
  getInput = (e) =>{
    this.setState({[e.target.name]:e.target.value});
  }

  storeTOLocal = () =>{
    const {id,pwd}=this.state
    localStorage.setItem('id',id);
    localStorage.setItem('pwd',pwd);
    this.props.history.push('/home'); 
  }
  
  render(){
    return (
    <div className="App">
      <div className="fadeIn first">
      <h2>LogIn</h2>
      </div>
      <form>      
      <input type="text" className="fadeIn second" name="id" onChange={this.getInput}/><br/>
      <input type="text" className="fadeIn third" name="pwd" onChange={this.getInput}/><br/>
      <input type="button" className="fadeIn fourth" value="Log In" onClick={this.storeTOLocal}/>
      </form>
    </div>
  );}
}

export default login;
