import React from "react"
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Navigation from "./Navigation"
import Footer from "./Footer";
import { Modal, Button } from 'react-bootstrap';
var president = {
    file: "../chief.png",
    heading: 'Tony Zito',
    paragraph: 'Day-to-day As President of Rakuten Advertising and Chief Strategy Officer of Rakuten’s Global Ad Division, Tony leads the strategic direction and global expansion of the company’s media business. By unifying and amplifying Rakuten’s premium media inventory, Tony’s organisation allows brands, agencies and partners to reach Rakuten’s global audience of billions of engaged consumers.',
}

var ceo = {
    file: "../ceo.png",
    heading: "Nick Stamos",
    paragraph: "Day-to-day Nick is responsible for Rakuten Advertising’s day-to-day operations and provides strategic guidance to ensure the company is accelerating its speed of innovation and corporate growth. An experienced operator and corporate strategist, Nick is focused on leveraging proprietary data, advanced data science, and real-time technology to drive growth for brands and create new opportunities across Rakuten Group."
}

var cheif = {
    file: "../president.png",
    heading: "Vincent Karachira",
    paragraph: "Vincent leads Global operations for Rakuten Advertising, designing the company’s innovative roadmap to keep pace with the swiftly evolving industry. With a team of more than 250 specialists across the business, Vincent oversees Publisher Development, Ad Operations, Analytics, Business Operations, Product Management, Product Adoption and Corporate Strategy. Underscoring everything he does is a commitment to making things happen and creating new avenues for growth for both Rakuten Advertising and its clients An entrepreneur at heart, Vincent has nearly 20 years of experience scaling software businesses through product innovation. Vincent joined Rakuten Advertising as CEO and Founder of Nextperf, the AI-based retargeting business that Rakuten Advertising acquired in 2016. He oversaw the integration of the company’s programmatic assets, and laid the foundational platform its display business is built on today. Prior to NextPerf, Vincent ran IT services and software companies, and invested in start-ups across the entertainment, marketing/advertising and retail sectors."
}




class Aboutus extends React.Component {
    

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            president: '',
            cheif: '',
            paragraph: '',

        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow(ceo) {

        this.setState({ president: ceo.heading, paragraph: ceo.paragraph, cheif: ceo.file });


    }
    handleshow1 = (id) => {
        if (id === 1) {
            this.handleShow(ceo)
            setTimeout(() => { this.setState({ show: true }) }, 1000);
        }
        else if (id === 2) {
            this.handleShow(president)
            setTimeout(() => { this.setState({ show: true }) }, 1000);
        }
        else if (id === 3) {
            this.handleShow(cheif)
            setTimeout(() => { this.setState({ show: true }) }, 1000);
        }


    }
    

    render() {

        return (
            <div>

                <Navigation />
                
                
                    <div className="container-fluid pt-5 mt-5" style={{justifyContent:"center"}}>

                        <div className="row pt-5 mt-5">
                            <div className="text-center col-sm-12 col-lg-8 offset-lg-2 " style={{ fontSize: "20px", textAlign: "justify" }}>
                                <h1 style={{ fontSize: "60px", color: '#4B0082'}}>Our Mission</h1><br />
                                <p style={{ textAlign: "justify", fontFamily: "lft-etica,sans-serif" }}>We believe the best way deliver a great user experience is by deeply understanding
                                what people want and love.Then deliver the features,messages,and content that are
                                most helpful and relevant.Which makes users happy and great experience.
                                We want our customers to be happy.Our main mission is to make
                                internet a better place that brings relevance, value, and enjoyment to everyone involved publishers,
                            and consumers alike.How do we do it?By never slowing down and regularly innovating</p>


                            </div>

                        </div>
                        <div className="row">
                            <div className="offset-lg-4 offset-sm-4 pl-5">
                                <img src="/col.jpg" width="40%" height="300px" />
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <h1 style={{ fontSize: "60px",color: '#4B0082'}} >Our Leadership</h1><br />
                        </div>
                        <div className="row mt-5 ">

                            <div className="col-sm-3 col-lg-3 offset-lg-2 offset-sm-1 mb-sm-5 pb-sm-5">

                                <div className="zoomin">
                                    <img src="../ceo.png" className="image-fluid ml-3" width="150px" height="150px" style={{ borderRadius: "80px" }} />
                                    <div className=" link">
                                        <Link onClick={() => this.handleshow1(1)} className="ml-3 pt-3"style={{color:"#585858"}} ><b>Nick Stamos</b></Link>
                                    </div>
                                    <p className="" style={{ fontSize: "20px" }}>Chief Executive Officer</p>
                                </div>

                            </div>

                            <div className="col-sm-3 col-lg-3 mb-sm-5 pb-sm-5 offset-sm-1 zoomin">
                                <div className=" ">
                                    <img src="../chief.png" className="image-fluid ml-1" width="150px" height="150px" style={{ borderRadius: "80px" }} />
                                    <div className="link">
                                        <Link onClick={() => this.handleshow1(2)} className="ml-4 pt-5" style={{color:"#585858"}}><b>Tony Zito</b></Link>
                                    </div>
                                    <p className="  ml-5" style={{ fontSize: "20px" }}>President</p>
                                </div>

                            </div>

                            <div className="col-sm-3 col-lg-3 mb-sm-5 offset-sm-1 pb-sm-5">
                                <div className="zoomin">
                                    <img src="../president.png" width="150px" height="150px" className="ml-4" style={{ borderRadius: "80px" }} />
                                    <div className="link">
                                        <Link onClick={() => this.handleshow1(3)} className=" pt-3"style={{color:"#585858"}} ><b>Vincent Karachira</b></Link>
                                    </div>
                                    <p className=" ml-2" style={{ fontSize: "20px" }}>Chief Operating Officer</p>
                                </div><br />


                            </div>

                        </div>
                        <div className="col-sm-2 text-center ">
                        <Modal show={this.state.show} onHide={this.handleClose}>

                            <Modal.Header closeButton>
                                <h1 style={{ color: '#4B0082' }} className="ml-5 pl-5" ><img src={this.state.cheif} width="180px" height="180px" className="ml-5" style={{ borderRadius: "80px" }} /><br /></h1>

                            </Modal.Header>
                            <Modal.Title className="ml-5 pl-5 pt-3"><h3 className="ml-5 pl-3" style={{ textAlign: "justify" }}>{this.state.president}</h3></Modal.Title>
                            <Modal.Body style={{ fontSize: "15px", textAlign: "justify" }}> {this.state.paragraph}</Modal.Body>
                            <Modal.Footer>

                                <Button variant="secondary" style={{ backgroundColor: "#4B0082", }} className="mr-5" onClick={this.handleClose}>
                                    Close
                           </Button>
                            </Modal.Footer>
                        </Modal>
                        </div>
                    </div>
             
                <Footer />
            </div>

        );
    }
}
export default Aboutus;