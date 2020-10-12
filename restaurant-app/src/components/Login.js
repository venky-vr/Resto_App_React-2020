import React, { Component } from 'react'
import NavbarMenu from './NavbarMenu';

class Login extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            password:''
        }
    }

    login(){
        console.log(this.state)
        fetch("http://localhost:3000/login?q="+ this.state.name).then((data)=>{
            data.json().then((resp)=>{
               console.log('resp', resp)
               if(resp.length>0){
                    localStorage.setItem('login', JSON.stringify(resp))
               }else{
                   alert("Invalid Credentials")
               }
            })
        })
    }
    render() {
        return (
            <div>
                <NavbarMenu/>
                <input type="text" name="user" placeholder="Enter name" onChange={(event)=>this.setState({name:event.target.value})}/> <br/> <br/>
                <input type="password" name="password" placeholder="Enter password" onChange={(event)=>this.setState({password:event.target.value})}/> <br/> <br/>
                <button onClick={()=>{this.login()}}>Login</button>
            </div>
        )
    }
}

export default Login
