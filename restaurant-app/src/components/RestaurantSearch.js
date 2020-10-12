import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faTrash} from '@fortawesome/free-solid-svg-icons'
import { Table, Form, Container } from "react-bootstrap"

import {
    Link
  } from 'react-router-dom'
  import NavbarMenu from './NavbarMenu';
class RestaurantSearch extends Component {

    constructor(){
        super();
        this.state={
            searchData:null,
            noData:false,
            lastSearch:"",
        }
    }

    search(key){
        //console.log(key)
        this.setState({lastSearch:key})
        fetch("http://localhost:3000/restaurant?q="+key).then((data)=>{
            data.json().then((resp)=>{
                if(resp.length>0){
                    this.setState({searchData:resp, noData:false})
                }else{
                    this.setState({noData:true, searchData:null})
                }
                
            })
        })
    }
    
    delete(id){
        fetch("http://localhost:3000/restaurant/"+ id, {
        method:"DELETE",
      /*   headers:{
            "Content-Type":"application/json"
        },
      */
    }).then((result) => {
        result.json().then((resp)=> {
            alert("Restaurant has been Deleted")
            this.search(this.state.lastSearch);
        })
    })
    }

    render() {
        return (
            <div>
                   <NavbarMenu/>
                <h1>Restaurant Search</h1>
                <Container>
                <Form.Control type="text" onChange={(event)=>this.search(event.target.value)} placeholder="search restaurant" />
                <div>
                    {
                        this.state.searchData?


                        <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Rating</th>
                                <th>Location</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.searchData.map((item) =>
                                <tr key={item.id}>
                                    <td>{item.ids}</td>
                                    <td>{item.name}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} color="orange"/></Link>&nbsp;&nbsp;&nbsp;
                                        <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red"/></span>
                                    </td>
                                </tr>
                               /*  <div className="list-wrpper" key={item.id}>
                                    <span>{item.name}</span>
                                    <span>{item.email}</span>
                                    <span>{item.rating}</span>
                                    <span>{item.address}</span>
                                </div> */
                            )
                        }
                        </tbody>
                    </Table>
                        :""
                    }
                    {
                        this.state.noData?<h3>No Data Found...</h3>:null
                    }
                </div>
                </Container>
            </div>
        )
    }
}

export default RestaurantSearch


