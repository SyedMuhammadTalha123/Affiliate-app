import React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer";
import { Button } from "react-bootstrap";
import './form.css';
import { DesktopOutlined, LineChartOutlined, UsergroupAddOutlined, SafetyCertificateOutlined, LikeOutlined, PropertySafetyOutlined, GlobalOutlined, DeploymentUnitOutlined, SearchOutlined } from "@ant-design/icons";
class Media extends React.Component {
    submit = () => {
        window.location = "/Contact"
    }
    render() {
        return (
            <div>
                <Navigation />
                <div className="container-fluid hal ">
                    <div className="row  ">
                        <img src="../pk.jfif" width="100%" height="500px" alt="Responsive image" />

                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-sm-12 col-lg-6 offset-lg-3 mt-5 pt-5">
                            <h1 style={{ color: '#4B0082' }}>Discover a World of New Customers</h1>
                            <p style={{ fontSize: "20px" }}>Everywhere Rakuten audiences shop, chat, watch or read, Rakuten Advertising is there, with relevant ad experiences that bring your brand to life. Make genuine connections in brand-safe environments through our global network of digital media and commerce properties.</p>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5 ">
                        <div className="mt-5 col-sm-3 col-lg-3 ml-5 pt-5 ">
                            <DesktopOutlined  className="icon offset-sm-4  offset-lg-1 text-center" />
                            <h2  className="mt-3">70+ Digital Media & Commerce Properties</h2>
                        </div>
                        <div className="mt-5 col-sm-3 col-lg-3 offset-lg-1 pt-5 ">
                            <UsergroupAddOutlined  className="icon offset-sm-4  offset-lg-1 text-center" />
                            <h2  className="mt-3">GDPR & CCPA Compliant Audience Data</h2>
                        </div>
                        <div className="mt-5 col-sm-3 col-lg-3 offset-lg-1 pt-5 ">
                            <GlobalOutlined  className="icon offset-sm-4  offset-lg-1 text-center" />
                            <h2 className="mt-3">G30+ Countries & Regions</h2>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5 ">
                        <div className="mt-5 col-sm-3 col-lg-3 ml-5  ">
                            <DeploymentUnitOutlined  className="icon offset-sm-4  offset-lg-1 text-center" />
                            <h2  className="mt-3">Independently Owned & Operated</h2>
                        </div>
                        <div className="mt-5 col-sm-3 col-lg-3 offset-lg-1 pt-2 ">
                            <SearchOutlined  className="icon offset-sm-4  offset-lg-1 text-center" />
                            <h2  className="mt-3">Fully Transparent & Trusted</h2>
                        </div>
                        <div className="mt-5 col-sm-3 col-lg-3 offset-lg-1 pt-2 ">
                            <PropertySafetyOutlined  className="icon offset-sm-4  offset-lg-1 text-center" />
                            <h2  className="mt-3">Fully Transparent & Trusted</h2>
                        </div>

                    </div>
                    <div className="row text-center">
                        <div className="col-sm-4 offset-sm-4 pt-5 mt-5  pb-5">
                            <Button type="submit" onClick={this.submit} style={{ backgroundColor: "#4B0082", fontSize: "20px", borderRadius: "30px", width: "170px", height: "70px" }}><b>Get in Touch</b></Button>
                        </div>
                    </div>

                    <div className="row mt-5 pt-5">
                        <div className="col-sm-3  text-center" >
                            <img src="https://rakutenadvertising.com/wp-content/uploads/sites/2/2020/02/rakuten-fr-logo.png" width="200px" alt="Responsive image" />
                            <p style={{ fontSize: "20px", textAlign: "center"}}>Rakuten France is the leading B2C & C2C marketplace and France's #1 e-commerce membership program</p>
                        </div>

                        <div className="col-sm-3 text-center" >
                            <img src="https://rakutenadvertising.com/wp-content/uploads/sites/2/2020/02/rakuten-tv-logo.png" width="200px" alt="Responsive image" />
                            <p style={{ fontSize: "20px", textAlign: "center" }}>The beauty of television with the brains of digital. A leading video on demand platform in Europe offering a premium home entertainment portal and exclusive, free AVOD services. We're everywhere our users are – connected TV, mobile and web.</p>
                        </div>
                        <div className="col-sm-3 text-center" >
                            <img src="https://rakutenadvertising.com/wp-content/uploads/sites/2/2020/02/rakuten-viber-logo.png" width="200px" alt="Responsive image" />
                            <p style={{ fontSize: "20px", textAlign: "center" }}>
                                Calling all attention seekers: Reach consumers in a highly engaging, one-of-a-kind ad experiences via one of the top-10-most-downloaded apps of all time. Connecting over 1 billion users in over 90 countries with Viber, a cross-platform communications app.</p>
                        </div>
                        <div className="col-sm-3 text-center" >
                            <img src="https://rakutenadvertising.com/wp-content/uploads/sites/2/2020/02/rakuten-viki-logo.png" width="200px" alt="Responsive image" />
                            <p style={{ fontSize: "20px", textAlign: "center" }}>
                                Calling all attention seekers: Reach consumers in a highly engaging, one-of-a-kind ad experiences via one of the top-10-most-downloaded apps of all time. Connecting over 1 billion users in over 90 countries with Viber, a cross-platform communications app.</p>
                        </div>
                    </div>

                    <div className="row mt-5 pt-5 Banner ">
                        <div className=" offset-sm-2 ">
                            <h3 style={{ color: "white", fontSize: "50px" }}><b>Authentic Connections in a Digital World</b></h3>
                        </div>

                        <div className="col-sm-3 offset-sm-1 Manage mb-3">
                            <h3 className="mb-5 pt-5"><b>Be Seen</b></h3>
                            <p style={{ fontSize: "20px" }} className="text-center">Create brand awareness and interest in your brand.</p>

                        </div>
                        <div className="col-sm-3 ml-sm-5  Manage mb-3">
                            <h3 className="mb-5 pt-5"><b>Generate Traffic</b></h3>
                            <p style={{ fontSize: "20px" }} className="text-center">Get people to consider your products or services.</p>

                        </div>
                        <div className="col-sm-3 ml-sm-5 Manage mb-3">
                            <h3 className="mb-5 pt-5"><b>Influence Sales</b></h3>
                            <p style={{ fontSize: "20px" }} className="text-center">Encourage interested people to action.</p>

                        </div>

                    </div>

                    <div className="row mt-5 pt-5">
                        <div className="col-sm-6 offset-sm-3 text-center">
                            <h1 style={{ color: '#4B0082' }}>Advertising Customers Love</h1>
                            <p style={{ fontSize: "20px" }}>Help your clients stand out in a crowded landscape with our advertising experiences that delight audiences and reach customers where they spend most of their time. Our solution delivers unparalleled audience reach, scale and access across video and digital environments.</p>

                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="mt-5 col-sm-3 col-lg-3 ml-5">
                            <LikeOutlined  className="icon offset-sm-4  offset-lg-1 text-center" />
                            <h2  className="mt-5 ml-2">Reach</h2>
                            <p style={{ fontSize: "20px" }}>Gain access to a global network of 1.3+ billion users.</p>
                        </div>
                        <div className="mt-5 col-sm-3 col-lg-3 offset-lg-1">
                            <SafetyCertificateOutlined className="icon offset-sm-4  offset-lg-1 text-center" />
                            <h2  className="mt-5 ml-4">Safety</h2>
                            <p style={{ fontSize: "20px" }}>Connect with consumers in a curated, brand-safe ecosystem.</p>
                        </div>
                        <div className="mt-5 col-sm-3 col-lg-3 offset-lg-1">
                            <LineChartOutlined  className="icon offset-sm-4  offset-lg-1 text-center" />
                            <h2  className="mt-5 ml-4">Performance</h2>
                            <p style={{ fontSize: "20px" }}>Access premium inventory that outperforms the competition.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="mt-5 col-sm-8 col-lg-8 offset-lg-2">

                            <h1 style={{ color: "#4B0082" }} className="mt-5 ml-5">Real-world Results From Rakuten Advertising </h1>

                        </div>

                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-6 bal " style={{ height: "1000px" }}>

                        </div>
                        <div className="ml-5  col-sm-5 pr-5 " style={{ position: "absolute" }}>
                            <h1 style={{ color: "#cc0000", textAlign: "left" }} >Advertising-Video-on-Demand (AVOD): Driving Success for the Automotive Industry</h1>
                            <p style={{ fontSize: "20px", textAlign: "left" }}>Connected TV (CTV) offers a new way for advertisers to engage and reach their audiences outside of linear TV distribution on the biggest screen in the house. The sophisticated targeting capabilities and digital tracking abilities have spurred the automotive industry’s shift of media budgets to CTV.</p>
                            <p style={{ fontSize: "20px", textAlign: "left" }}>Connected TV (CTV) offers a new way for advertisers to engage and reach their audiences outside of linear TV distribution on the biggest screen in the house. The sophisticated targeting capabilities and digital tracking abilities have spurred the automotive industry’s shift of media budgets to CTV.</p>
                            <p style={{ fontSize: "20px", textAlign: "left" }}>Across Europe, the automotive industry is the fourth largest user of CTV. Brands in the automotive vertical are partnering with Rakuten Advertising to drive engagement via the Rakuten TV platform with qualified audiences that have a high index of auto-intenders, within a premium video environment.</p>
                            <ul>

                                <li><p style={{ fontSize: "20px", textAlign: "left" }}>95% completion rate across the automotive industry; the strongest in Europe.</p></li>
                                <li><p style={{ fontSize: "20px", textAlign: "left" }}>98.8% of ads delivered on CTV</p></li>
                                <li><p style={{ fontSize: "20px", textAlign: "left" }}>Over 70% of automotive brands renewed their partnership and increased investment</p></li>

                            </ul>

                        </div>
                        <div className="col-sm-6 nal ">

                        </div>
                    </div>


                </div>

                <Footer />
            </div>
        );


    }
}
export default Media;