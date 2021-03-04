import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { addTodo } from "./actions/action";
import Loginform from './Loginform'
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

                <nav className=" navbar-dark navbar navbar-expand-sm fixed-top" style={{ backgroundColor: "white", boxShadow: "5px 10px 8px #888888" }}>
                    <div className="container-fluid">

                        <a className="navbar-brand active pl-5" style={{ color: "white", fontSize: "30px", fontFamily: "arial" }}><img src="https://rakutenadvertising.com/wp-content/uploads/sites/2/2020/11/v2-rad-logo-110320-1.svg" /></a>

                        <button className="navbar navbar-toggler " type="button">
                            <span className="navbar-toggler-icon "></span>

                        </button>

                        <div className="collapse navbar-collapse" id="test" >

                            <ul className="navbar-nav offset-1 ">
                   
                                <Link to="/detail" className="hyper " ><HomeOutlined style={{ color: "#4B0082", display: "inline-block",fontSize:"25px",}} className="nav-item active nav-link" /><b>Home</b></Link>
                                <Link to="/Aboutus" className="hyper" ><QqOutlined style={{ color: "#4B0082",fontFamily:"arial",fontSize:"25px"}} className="nav-item active nav-link" /><b>Aboutus</b></Link>
                                <Link to="/Contact" className="hyper" ><PhoneOutlined style={{ color: "#4B0082",fontSize:"25px"}} className=" active nav-link " /><b>Contactus</b></Link>
                                <Link to="/consumer" className="hyper" ><MenuUnfoldOutlined style={{ color: "#4B0082",fontSize:"25px" }} className="nav-item active nav-link" /><b>Consumer insight</b></Link>
                                <Link to="/Media" className="hyper"><PlayCircleOutlined style={{ color: "#4B0082",fontSize:"25px" }} className="nav-item active nav-link" /><b>Media</b></Link>


                            </ul>

                            <div className="dropdown offset-sm-1">
                                <span>
                                    <img src={this.props.login.file} style={{ height: "70px", width: "70px", borderRadius: "100px", marginLeft: "100px" }} />
                                </span>
                                <div class="dropdown-content">
                                    <p> <b>Username:</b>{this.props.login.uservalue}</p>
                                    <p><b>Userpassword:</b>{this.props.login.userpassword}</p>

                                </div>
                            </div>

                        </div>


                    </div>

                </nav>

            </div>
        );
    }

}
const mapStateToProps = (state) => ({
    login: state.user.login
})
export default connect(mapStateToProps, { addTodo })(Navigation);
