import React, { Component } from "react";
import "./form.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FacebookFilled, InstagramFilled, LinkedinFilled, SkypeFilled } from "@ant-design/icons";
<link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"

/>

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", password: "", file: null };
    }
    submit = () => {
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            file: this.state.file

        }
        // console.log(this.state.name,this.state.email,this.state.password,);
        this.props.history.push("/detail", data)
    }
    submitimage = (event) => {
        this.setState({ file: URL.createObjectURL(event.target.files[0]) })

    }
    render() {

        return (

            <div className="back pb-5">

                <div class="text-center pb-5 col-md-12 col-sm-12">
                    <h1 class="pt-5">Sign up to pushLeopard!</h1><br />
                    <img src="../logo.jpeg" width="200px" height="70px" />
                    <div class="container"><br />
                        <div class="row">
                            <div class="col-sm-7 col-lg-6 col-md-6 offset-lg-3 offset-sm-2 offset-md- " style={{ textAlign: "left" }}>
                                <label>User Name</label><br />
                                <input type="text" onChange={event => this.setState({ name: event.target.value })} pattern="[A-Za-z]" maxLength="15" class="a form-control" name="Name" placeholder="Enter your name" style={{ borderRadius: "32px", border: "1px solid white", }} />
                                <p>{this.state.name}</p>
                                <br />  <label>Email Address</label><br />
                                <input type="email" class="a form-control" onChange={event => this.setState({ email: event.target.value })} maxLength="15" name="Email" placeholder="Enter your Email Address" style={{ borderRadius: "32px", border: "1px solid white", }} />
                                <p>{this.state.email}</p>
                                <br /> <label>Password</label><br />
                                <input type="password" class="a form-control" onChange={event => this.setState({ password: event.target.value })} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" maxLength="15" name="password" placeholder="Enter your password" style={{ borderRadius: "32px", border: "1px solid white", }} /><br />
                                <p>{this.state.password}</p>

                                <div className="row">

                                    <div className="col-lg-6 col-sm-12  offset-lg-3  pt-3 pl-5">
                                        <input type="file" onChange={this.submitimage} /><br />
                                        <br /><input type="checkbox" checked="checked" /><label >I accept the policy and terms</label><br />
                                        <Link to='./Login' style={{ textDecoration: "none", color: "black" }}>Login here</Link><br />
                                        <br />  <button style={{ backgroundColor: "black", borderRadius: "10px", color: "white" }} className="ml-5 p-3" onClick={this.submit}>Sign Up</button><br />

                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link to="/"><FacebookFilled className="Facebook" /></Link>
                                    <Link to="/"><LinkedinFilled className="Facebook" /></Link>
                                    <Link to="/"> <SkypeFilled className="Skype" /></Link>
                                    <Link to="/"> <InstagramFilled className="Insta" /></Link>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        );
    }

}


export default Form;