import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { Carousel } from 'antd';
import "./form.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { FacebookFilled, InstagramFilled, LinkedinFilled,AimOutlined, QqOutlined, SkypeFilled, HomeOutlined, MenuUnfoldOutlined, PhoneOutlined } from "@ant-design/icons";
<link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"

/>
const mapStyles = {
    width: '100%',
    height: '80%',

};

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    submit = () => {
        alert("Thankyou for contactus");
    }

    render() {
        return (
            <div>

               <Navigation/>
                <div className="container-fluid pt-5">
                    <div className="row pt-5">

                        <div className=" text-center col-sm-6 col-lg-4 col-md-4 p-5 mt-5 offset-sm-1 offset-lg-1">
                            <h1 className="text-center"style={{color: '#4B0082'}}><b>Get in Touch!</b></h1>
                            <br />  <input type="text" placeholder="Enter your name" className="a form-control" /><br />
                            <br />  <input type="text" placeholder="Enter your Email Address" className="a form-control" /><br />
                            <br />  <textarea type="text" placeholder="Enter your message" className="a form-control" rows="4" cols="60" /> <br />
                            <br /> <button type="submit" className="btn btn-primary ml-1" style={{ backgroundColor: "#4B0082", width: "120px" }} onClick={this.submit}>Submit</button>
                            <span className="data">{this.props.data}</span>


                        </div>
                        <div className="col-sm-5 col-lg-5 pt-5 offset-lg-1">
                            <Map google={this.props.google} zoom={8} style={mapStyles} initialCenter={{ lat: 47.444, lng: -122.176 }} />
                        </div>
                    </div>
                </div>
                  <Footer/>
                 
            </div>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyDNXJ0kJ4RG5jGXXpiX1QpYy1kNtu1TSV0'
})(Contact);

