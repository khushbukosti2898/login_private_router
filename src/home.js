import React from 'react';
import './App.css';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            pwd:''
        }
      }
    
  logOut = () =>{
          localStorage.removeItem('id');
          localStorage.removeItem('pwd'); 
          this.props.history.push('/login');
        }
  render(){ 
        return <div>
        <h1>home page</h1>
        <input type="button" className="fadeIn fourth" 
            value="Log Out" onClick={this.logOut}/>
      </div>
    }
}
export default Home;
