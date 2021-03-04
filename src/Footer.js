import React from "react";
import ReactDOM from "react-dom";
import { Dropdown } from "react-bootstrap";
import "./form.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import { FacebookFilled, InstagramFilled, AimOutlined, LinkedinFilled, ContactsOutlined, QqOutlined, SkypeFilled, HomeOutlined, MenuUnfoldOutlined, PhoneOutlined } from "@ant-design/icons";

<link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"

/>
class Footer extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                    <footer className="footer">
                        <h3 style={{ color: "white" }}><AimOutlined />ADDRESS</h3>
                        <p style={{ fontSize: "20px" }}>121 Rock Sreet, 21 Avenue,New York, NY 92103-900</p>
                        <h3 style={{ color: "white" }}><PhoneOutlined />CALL US</h3>
                        <p style={{ fontSize: "20px" }}>1 (234) 567-891</p>
                        <p style={{ fontSize: "20px" }}>1 (234) 987-654</p>
                        <Link to="/"><FacebookFilled className="facebook "style={{ color: "white" }}/></Link>
                        <Link to="/"><LinkedinFilled className="facebook " style={{ color: "white" }}/></Link>
                        <Link to="/"> <SkypeFilled className=" facebook" style={{ color: "white" }} /></Link>
                        <Link to="/"> <InstagramFilled className="facebook"  style={{ color: "white" }} /></Link>
                    </footer>
                </div>
            </div>
        );
    }
}
export default Footer;