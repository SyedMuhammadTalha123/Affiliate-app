import React from "react";
import ReactDOM from "react-dom";
import { Dropdown } from "react-bootstrap";
import "./form.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import { FacebookFilled, InstagramFilled, AimOutlined, LinkedinFilled, ContactsOutlined, QqOutlined, SkypeFilled, HomeOutlined, MenuUnfoldOutlined, PhoneOutlined } from "@ant-design/icons";

<link rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"

/>

const contentStyle = {
    width: '100%',
    height: '600px',
    color: 'white',
};
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
class Detail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            uservalue: '',
            userpassword: '',


        };
    }
    submit = () => {
        const data = {
            uservalue: this.state.uservalue,
            userpassword: this.state.userpassword,

        }
        this.props.history.push('/Contact', data)
    }

    render() {
        return (

            <div>


                <Navigation />
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <Carousel autoplay style={{ color: "white" }}>
                            <div className="carousel-item">

                                <img src="../headway-5QgIuuBxKwM-unsplash.jpg" style={contentStyle} alt="Responsive image"/>
                                <div className="carousel-caption " style={{ color: "white", fontSize: "20px" }}>

                                    <p>Affiliate marketing is a way for companies to incentivize word of mouth marketing or referrals.</p>
                                </div>
                            </div>
                            <div className="carousel-item">

                                <img src="../dylan-gillis-KdeqA3aTnBY-unsplash.jpg" style={contentStyle} alt="Responsive image" />

                                <div className="carousel-caption">

                                    <p>We love the Big Apple!</p>
                                </div>

                            </div>
                            <div className="carousel-item" >

                                <img src="../kobu-agency-7okkFhxrxNw-unsplash.jpg" style={contentStyle} alt="Responsive image"/>
                                <div className="carousel-caption " style={{ color: "white" }}>

                                    <p>We love the Big Apple!</p>
                                </div>
                            </div>
                            <div className="carousel-item">

                                <img src="../brooke-cagle-g1Kr4Ozfoac-unsplash.jpg" style={contentStyle} alt="Responsive image" />
                                <div class="carousel-caption" style={{ color: "white" }}>
                                    <p>We love the Big Apple!</p>
                                </div>
                            </div>

                        </Carousel>
                    </div>
                </div>

                <div className="row pt-5">

                    <div className="text-left col-sm-6 col-lg-4 offset-lg-1 pt-5" style={{ textAlign: "justify", fontSize: "20px", fontFamily: "lft-etica,sans-serif" }}>
                        <h1 style={{color:"#4B0082"}}>Performance Drives Our Purpose</h1>
                        <p style={{ textAlign: "justify" }}>With over 20 years of experience in affiliate and performance marketing, we know how to connect consumers with brands and products in ways no one else can. We continue to innovate with our award-winning solution that connects advertisers with valuable audiences and helps publishers monetise their content.
                        Access over 150,000 active publishers worldwide, with a dedicated team of network development specialists who actively identify affiliates and partner opportunities across content, influencer, loyalty and more – specifically for you.
                        </p>
                    </div>
                    <div className="col-xs-12 col-lg-3  offset-lg-1">
                        <img src="../mobile.jpg" width="700px" height="500px" className="img-responsive standard-text-block-image" />
                    </div>
                </div>


                <div className="row pt-5">
                    <div className="col-sm-12 col-lg-3  offset-lg-1" style={{ textAlign: "justify", fontSize: "20px", fontFamily: "lft-etica,sans-serif" }}>
                        <img src="../aff.jpg" width="600px" height="500px" className="img-responsive standard-text-block-image" />

                    </div>
                    <div className="col-sm-12 col-lg-4 offset-sm-1 offset-lg-3 pt-5" style={{ textAlign: "justify", fontSize: "20px", fontFamily: "lft-etica,sans-serif" }}>
                        <h1 style={{color:"#4B0082"}}>For Agencies</h1>
                        <p style={{ textAlign: "justify" }}>You need an affiliate marketing partner with reach and scale. Our team provides unparalleled affiliate marketing support with publisher expansion, campaign optimisation, reporting and more.</p>
                    </div>

                </div>

                <div className="row pt-5">

                    <div className="col-xs-12 col-lg-4  offset-lg-1 pt-5 " style={{ textAlign: "justify", fontSize: "20px", fontFamily: "lft-etica,sans-serif" }}>
                        <h1 style={{color:"#4B0082"}}>For Publisher Partners</h1>
                        <p style={{ textAlign: "justify" }}>Work with the top brands across industries, from fashion to financial services and more. Whether you’re a blogger, influencer, app developer or business, our premier global publisher network has you covered.</p>
                    </div>
                    <div className="col-sm-12 col-lg-3  offset-lg-2">
                        <img src="../sev.jpg" width="500px" height="500px" className="img-responsive standard-text-block-image" />

                    </div>
                </div>

                <div className="row pt-5">

                    <div className="col-sm-12 col-lg-3  offset-lg-1">
                        <img src="../affiliate.jpg" width="600px" height="500px" className="img-responsive standard-text-block-image" />

                    </div>
                    <div className="col-sm-12 col-lg-4  offset-lg-3 pt-5 " style={{ textAlign: "justify", fontSize: "20px", fontFamily: "lft-etica,sans-serif" }}>
                        <h1 style={{ textAlign: "justify" ,color:"#4B0082"}}>For Publisher Partners</h1>
                        <p>Work with the top brands across industries, from fashion to financial services and more. Whether you’re a blogger, influencer, app developer or business, our premier global publisher network has you covered.</p>
                    </div>

                </div>
                <div className="row pt-5">


                    <div className="col-xs-12 col-lg-5  offset-lg-1 pt-5 " style={{ fontSize: "20px", fontFamily: "lft-etica,sans-serif" }}>
                        <h1 style={{color:"#4B0082"}}>5 steps to becoming an affiliate marketer</h1>
                        <p>The following five steps are all it takes to become an affiliate marketer.</p>
                        <p>1.Choose a niche - What are we selling?</p>
                        <p>2.How to generate and grow income - How to select the right program for your niche and understand how commission works?</p>
                        <p>3.Get a website or blog - Let’s create a home for your content.</p>
                        <p>4.Create content - This is often based around reviewing products in your niche through your preferred medium.</p>
                        <p>5.Get rankings and visitors - To connect with your target audience, you need to get some traffic flowing your way.</p>
                    </div>
                    <div className="col-sm-12 col-lg-3 offset-1">
                        <img src="../kl.jpg" width="500px" height="500px" className="img-wrapper" />

                    </div>
                </div>
                <footer className="footer">
                    <h3 style={{ color: "white" }}><AimOutlined />  ADDRESS</h3>
                    <p style={{ fontSize: "20px" }}>121 Rock Sreet, 21 Avenue,New York, NY 92103-900</p>
                    <h3 style={{ color: "white" }}><PhoneOutlined /> CALL US</h3>
                    <p style={{ fontSize: "20px" }}>1 (234) 567-891</p>
                    <p style={{ fontSize: "20px" }}>1 (234) 987-654</p>
                    <Link to="/"><FacebookFilled className="facebook" style={{ color: "white" }} /></Link>
                    <Link to="/"><LinkedinFilled className="facebook" style={{ color: "white" }} /></Link>
                    <Link to="/"> <SkypeFilled className="facebook" style={{ color: "white" }} /></Link>
                    <Link to="/"> <InstagramFilled className="facebook" style={{ color: "white" }} /></Link>
                </footer>
            </div>



        );
    }
}

export default Detail;