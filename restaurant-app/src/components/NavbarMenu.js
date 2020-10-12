import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser,faHome,faTrash,faList,faPlus, faSearch} from '@fortawesome/free-solid-svg-icons'
import {Nav, Navbar} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
  
class NavbarMenu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Resto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                            <Nav.Link as={Link} to="/list"><FontAwesomeIcon icon={faList} /> List</Nav.Link>
                            <Nav.Link as={Link} to="/create"><FontAwesomeIcon icon={faPlus} /> Create</Nav.Link>
                            <Nav.Link as={Link} to="/search"><FontAwesomeIcon icon={faSearch} /> Search</Nav.Link>
                                {
                                    localStorage.getItem('login')?
                                    <Nav.Link as={Link} to="/logout"><FontAwesomeIcon icon={faUser} /> Logout</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="/login"><FontAwesomeIcon icon={faUser} /> Login</Nav.Link>
                                }           
                            {/*  <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/list">List</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/create">Create</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/search">Search</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/update">Update</Link></Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}


export default NavbarMenu