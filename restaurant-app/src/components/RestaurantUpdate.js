import React, { Component } from 'react'
import NavbarMenu from './NavbarMenu';
class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            rating:null,
            address:null,
            id:null
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/restaurant/'+ this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                this.setState({ 
                    name:result.name,
                    email:result.email,
                    rating:result.rating,
                    address:result.address,
                    id:result.id
                })
            })
        })
    }

    update(){
        fetch("http://localhost:3000/restaurant/" + this.state.id , {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp)=> {
                alert("Restaurant has been updated")
            })
        })
    }
 
    render() {
        
        
        return (
            <div>
                   <NavbarMenu/>
                <h1>Restaurant Update</h1>
                <div>
                <input onChange={(event) =>{this.setState({name:event.target.value})}}
                 placeholder="Restaurant Name" value={this.state.name}/>
                <br/><br/>
                <input onChange={(event) =>{this.setState({email:event.target.value})}} 
                placeholder="Restaurant Email"  value={this.state.email}/>
                <br/><br/>
                <input onChange={(event) =>{this.setState({rating:event.target.value})}} 
                placeholder="Restaurant Rating"  value={this.state.rating}/>
                <br/><br/>
                <input onChange={(event) =>{this.setState({address:event.target.value})}} 
                placeholder="Restaurant Address"  value={this.state.address}/>
                <br/><br/>
                <button onClick={() =>{this.update()}}>Update Restaurant</button>
            </div>
            </div>
        )
    }
}

export default RestaurantUpdate
