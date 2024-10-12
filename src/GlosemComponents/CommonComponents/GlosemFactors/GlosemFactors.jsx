import React from "react";
import "./GlosemFactors.css"
import { Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
const GlosemFactors = () => {

    const GlosemFactors = [
        {
            title: "Driving domestic production",
            description: "Contribute to the government's 'Make in India' initiative and strengthen India's self-sufficiency in the semiconductor sector by reducing reliance on imports andcreating local jobs"
        },
        {
            title: "Advanced SiP Solution",
            description: "Glosem’s SiP solution outperforms its peers by offering superior quality & performance, lower lead times and being cost-efficient"
        },
        {
            title: "Leveraging PLI benefits",
            description: "Glosem is strategically aligned with the PLI scheme, enabling us to capitalize on the government's incentives to expand ouroperations and invest in advanced technologies"
        },
        {
            title: "Lead by visionary team",
            description: "Founded by visionary team who has an extensive combined experience in the varied industries, supported by an experienced advisory board"
        },
        {
            title: "Excellence through technology",
            description: "Glosem continuously monitor industry trends to ensure their offerings remainrelevant and meet their clients’ everchanging needs."
        },
        {
            title: "Risk management expertise",
            description: "Glosem’s experience can contribute to developing robust risk management strategies to help avoid potential downsides"
        }
    ]
    return (
        <>
            <div id="GlosemFactorsContainer">
                <div className="FatorsContainer">
                    <Row>
                        <Col lg={16}>
                            <div className="LeftSideContentContainer">
                                <h1>Strengthen your team in strategy, marketing & operations.</h1>
                                <div className="CommonBtn">
                                    <Link className="BookCallBtn">Book A Call Free</Link>
                                    <div className="LineAnimation">

                                    </div>
                                </div>
                                <div className="GlosemFactorsPoints">
                                    <Row>
                                        {GlosemFactors.map((item, index) => (
                                            <Col key={index} lg={12} md={24} data-aos="fade-up" // Set the AOS animation type
                                            data-aos-delay={index * 200} >
                                                <div className="mainCard">
                                                    <div className="FactorsBoxes">

                                                        <div style={{display:"flex"}}>
                                                            <div className="IconContainer">

                                                            </div>
                                                            <h3>{item.title}</h3>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}

                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="RightSideImageContainer">
                                <img src="https://plus.unsplash.com/premium_photo-1673709635732-c83149ac689d?q=80&w=2425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
        </>
    )
}
export default GlosemFactors