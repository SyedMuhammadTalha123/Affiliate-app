import React from 'react'
import footer from './Footer'
import { Link } from "react-router-dom";
import Navigation from "./Navigation"
import Footer from "./Footer";
import { Modal, Button } from 'react-bootstrap';
import { Carousel } from 'antd';
import { ShoppingCartOutlined, HomeOutlined, UsergroupAddOutlined, MoneyCollectOutlined, LayoutOutlined, BankOutlined } from '@ant-design/icons';
import Item from 'antd/lib/list/Item';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
const contentStyle = {
    width: '15%',
    height: '100px',
    color: 'white',
};
class consumer extends React.Component {
    render() {
        return (
            <div>
                 <body className="width">
                <Navigation />
               
                    <div className="container-fluid mt-5 pt-5 ">
                        <div className="row pt-5 mt-5">
                            <div className="col-sm-8 col-lg-8 offset-lg-3 text-center">
                                <h1 style={{ color: '#4B0082' }}>Actionable Insights for International Growth </h1>

                            </div>
                            <div className="col-sm-12 col-lg-7 text-center offset-lg-3">
                                <p style={{ textAlign: "justify", fontSize: "20px", textAlign: "center" }}>Whether you’re trying to identify expansion opportunities or better understand the US market, our Consumer Insights go beyond traditional analytics to help you truly understand how to keep your business competitive and growing.</p>
                            </div>


                        </div>
                        <div className="row mt-5 pt-5">
                            <div className="col-sm-5 col-lg-5 offset-lg-1 mt-5 pt-5">
                                <h1 style={{ color: '#4B0082' }}>Rakuten Intelligence Measures the Pulse of E-commerce.</h1>
                                <p style={{ textAlign: "justify", fontSize: "20px" }}>We give global advertisers an advantageous view into consumer behaviour and commerce trends across the United States. We combine the largest, most representative e-commerce panel in the world with superior research methodology to reveal insights for those looking to launch or expand in the region.
Our data and expertise extend across retail, travel, financial services, and fulfillment and logistics.</p>

                            </div>
                            <div className="col-sm-5 col-lg-5 offset-lg-1 pt-5 mt-5">
                                <img src="../sl.jpg" width="550px" height="450px" alt="Responsive image" />
                            </div>
                        </div>
                        <div className="row mt-5 pt-5">
                            <div className="col-sm-8 col-lg-8 offset-lg-2 text-center mt-5 pt-5">
                                <h1 style={{ color: '#4B0082' }} >Turn Big Data Sets Into Actionable Insights</h1>

                            </div>
                            <div className="col-sm-12 col-lg-6 text-center offset-lg-3">
                                <p style={{ textAlign: "justify", fontSize: "20px" }}>Our proprietary consumer data is captured through passive tracking of e-commerce sales, shipment receipts and historical anonymised purchase data.</p>
                                <p style={{ textAlign: "justify", fontSize: "20px" }} className="offset-sm-2">From our panel of 1 million+ shoppers, we can tell you:</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="mt-5 col-sm-3 offset-sm-1 pt-5 ">
                                <ShoppingCartOutlined className="icon offset-sm-2" />
                                <h2 className="mt-5 "><b>What Was Bought</b></h2>
                            </div>

                            <div className="mt-5 col-sm-3 offset-sm-1 pt-5 ">
                                <BankOutlined className="icon offset-sm-3 text-center" style={{ fontWeight: "normal" }} />
                                <h2 className="mt-5 "><b>Where It Was Bought</b></h2>
                            </div>
                            <div className="mt-5 col-sm-3 offset-sm-1 pt-5 ">
                                <UsergroupAddOutlined className="icon offset-sm-3 text-center" />
                                <h2 className="mt-5"><b>Who Bought It</b></h2>
                            </div>

                        </div>
                        <div className="row mt-5 ">
                            <div className="mt-5  col-sm-3 offset-sm-1 pt-5 ">
                                <MoneyCollectOutlined className="icon offset-sm-3 text-center" />
                                <h2 className="mt-5"><b>Who Bought It</b></h2>
                            </div>
                            <div className="mt-5 col-sm-3 offset-sm-1 pt-5 ">
                                <LayoutOutlined className="icon offset-sm-3  text-center" />
                                <h2 className="mt-5"><b>How It Was Shipped</b></h2>
                            </div>
                            <div className="mt-5 col-sm-3 offset-sm-1 pt-5 ">
                                <HomeOutlined className="icon offset-sm-3 text-center" />
                                <h2 className="mt-5 "><b>Where It  Delivered</b></h2>
                            </div>

                        </div>
                        <div className="row mt-5 pt-5">
                            <div className="col-sm-8 col-lg-8 offset-lg-2 text-center">
                                <h1 style={{ color: '#4B0082' }} className="ml-5">Make Smarter Decisions for Your Business</h1>

                            </div>
                            <div className="col-sm-12 col-lg-6 text-center offset-lg-3">
                                <p style={{ textAlign: "justify", fontSize: "20px", textAlign: "center" }}>With data on more than 900 US merchants, we measure trends and deliver insights that keep you in the know and ahead of your competition. Make informed decisions across critical business areas, including: Share of Wallet, Fulfillment & Logistics and Consumer Demographics.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-6 offset-lg-3 text-center">
                                <img src="../ph.jfif" width="400px" height="400px" alt="Responsive image" />
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-sm-4 offset-sm-4 pt-5">
                                <button type="submit" className="btn btn-primary " style={{ backgroundColor: "#4B0082", fontSize: "20px", borderRadius: "30px", width: "140px", height: "70px" }}><b>Get Started</b></button>
                            </div>
                        </div>

                        <div className="col-sm-5 col-lg-6 offset-lg-3 mt-5 pt-5 text-center">
                            <h1 style={{ color: '#4B0082' }}>Rakuten Intelligence Data in Action</h1>
                        </div>
                        <div className="row mt-5" >
                            <div className="col-sm-6 bal " style={{ height: "500px" }}>

                            </div>
                            <div className="ml-5  col-sm-5 " style={{ position: "absolute" }}>
                                <h1 style={{ color: "#cc0000" }} >Rakuten Intelligence & Camp Chef</h1>
                                <p style={{ fontSize: "20px" }}>Camp Chef is an industry-leading manufacturer of outdoor cooking equipment. In April 2020, the company set their sights on reaching and converting new audiences on social media platforms.</p>
                                <p style={{ fontSize: "20px" }}>Rakuten Advertising created scale and discovered relevant audiences by using Rakuten Intelligence’s proprietary purchase data. Our optimisation experts built seed audiences that targeted consumers who look very similar to Camp Chef’s profile customer based on past purchases and other consumer behaviours, leading to impressive campaign results.</p>
                                <ul>
                                    <li>
                                        <p style={{ fontSize: "20px" }}>75% more purchases using Rakuten Intelligence data compared to only pixel data</p>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-sm-6 nal ">

                            </div>


                        </div>
                        <div className="container pt-5 mt-5">
                            <div className=" col-lg-5 offset-lg-4">
                                <h1 style={{ color: "#4B0082" }} >Our Client Partners</h1>
                            </div>
                        </div>
                        <Carousel autoplay style={{ justifyItems: "center", display: "inline", justifyContent: "center" }}>

                            <div className="carousel-item offset-sm-5 pb-5 mb-5">

                                <img src="../whistles.png" style={{ contentStyle }} />


                                <div className="carousel-caption " style={{ color: "white", fontSize: "20px" }}>

                                    <p>Affiliate marketing is a way for companies to incentivize word of mouth marketing or referrals.</p>
                                </div>
                            </div>
                            <div className="carousel-item offset-sm-5  pb-5 mb-5">

                                <img src="https://rakutenadvertising.com/wp-content/uploads/sites/2/2020/06/river-island-logo-062420.png" style={contentStyle} />

                                <div className="carousel-caption">

                                    <p>We love the Big Apple!</p>
                                </div>

                            </div>
                            <div className="carousel-item offset-sm-5  pb-5 mb-5" >

                                <img src="../hunter.png" style={contentStyle} />
                                <div className="carousel-caption " style={{ color: "white" }}>

                                    <p>We love the Big Apple!</p>
                                </div>
                            </div>
                            <div className="carousel-item offset-sm-5 pb-5 mb-5">

                                <img src="../spartan.png" style={contentStyle} />
                                <div class="carousel-caption" style={{ color: "white" }}>
                                    <p>We love the Big Apple!</p>
                                </div>
                            </div>
                            <div className="carousel-item offset-sm-5  pb-5 mb-5">

                                <img src="../bally.jpg" style={contentStyle} />
                                <div class="carousel-caption" style={{ color: "white" }}>
                                    <p>We love the Big Apple!</p>
                                </div>
                            </div>

                        </Carousel>
                    </div>
                    <Footer />
                </body>
            </div>
        );
    }

}
export default consumer;