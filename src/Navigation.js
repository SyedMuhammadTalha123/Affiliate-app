import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { addTodo } from "./actions/action";
import Loginform from './Loginform'
import { Navbar, Button, FormControl, NavDropdown, Nav, Form } from 'react-bootstrap';
import "./form.css";
import Aboutus from "./"
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import 'antd/dist/antd.css';
import { FacebookFilled, InstagramFilled, LinkedinFilled, AimOutlined, QqOutlined, SkypeFilled, PlayCircleOutlined, HomeOutlined, MenuUnfoldOutlined, PhoneOutlined } from "@ant-design/icons";

<link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"

/>

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>



                <Navbar collapseOnSelect expand="lg" fixed="top" style={{ backgroundColor: "white", boxShadow: "5px 10px 8px #888888" }} >
                    <Navbar.Brand href="/" style={{ color: "white", fontSize: "30px", fontFamily: "arial" }}><img src="https://rakutenadvertising.com/wp-content/uploads/sites/2/2020/11/v2-rad-logo-110320-1.svg" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto offset-sm-1">
                            <Nav.Link href="/detail"className="hyper nav-link "style={{ color: "#4B0082"}} >  <HomeOutlined style={{ color: "#4B0082",fontSize:"21px"}} /><b>Home</b></Nav.Link>
                            <Nav.Link href="/Contact"className="hyper nav-link " style={{ color: "#4B0082" }}> <PhoneOutlined style={{ color: "#4B0082",fontSize:"21px" }}  /><b>Contactus</b></Nav.Link>
                            <Nav.Link href="/Consumer"className="hyper nav-link " style={{ color: "#4B0082"}}> <MenuUnfoldOutlined style={{ color: "#4B0082",fontSize:"21px" }}/><b>Consumer Insight</b></Nav.Link>
                            <Nav.Link href="/Media"className="hyper nav-link " style={{ color: "#4B0082"}}>  <PlayCircleOutlined style={{ color: "#4B0082",fontSize:"21px" }}/><b>Media</b></Nav.Link>
                            <Nav.Link href="/Aboutus"className="hyper nav-link " style={{ color: "#4B0082" }}> <QqOutlined style={{ color: "#4B0082",fontSize:"21px" }}  /><b>Aboutus</b></Nav.Link>
                            
                        </Nav>
                        <div className="dropdown ">
                                <span>
                                    <img src={this.props.login.file} style={{ height: "70px", width: "70px", borderRadius: "100px",marginRight:"30px",marginLeft: "100px"}} />
                                </span>
                                <div class="dropdown-content ">
                                    <p> <b>Username:</b>{this.props.login.uservalue}</p>
                                    <p><b>Userpassword:</b>{this.props.login.userpassword}</p>

                                </div>
                            </div>
                        
                    </Navbar.Collapse>
                   
                </Navbar>

                
            </div >
        );
    }

}
const mapStateToProps = (state) => ({
    login: state.user.login
})
export default connect(mapStateToProps, { addTodo })(Navigation);
