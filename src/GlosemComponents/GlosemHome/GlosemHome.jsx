import React,{useEffect} from "react";
import "./GlosemHome.css"
import { Row, Col } from "antd";
import GlosemHomeBack from "../../assets/GlosemHomeBack.jpg"
import GlosemFactors from "../CommonComponents/GlosemFactors/GlosemFactors";
import GlosemProductApplication from "../CommonComponents/GlosemProductApplication";
const GlosemHome = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <section id="GlosemHome">
                <div className="GlosemHomeContainer">
                    <Row>
                        <Col lg={10} md={24}>
                            <div>
                                <h1 data-aos="fade-up"
                                    data-aos-duration="1000">
                                    {/* We have global expertise to grow your organization */}
                                    Leveraging Global Expertise to Elevate Your Semiconductor Solutions and Drive Innovation
                                    </h1>
                            </div>
                        </Col>
                        <Col lg={14} md={24}>
                            <div>
                           
                            </div>
                        </Col>
                    </Row>
                    <div className="HomeAnimatedContainer" data-aos="fade-up"
                        data-aos-duration="2000">

                    </div>

                    <GlosemFactors />
                    <div className="InlineHeading">
                        <div className="InsideContaienr">
                            <h1 data-aos="zoom-in">Glosem: Powering innovations across industries</h1>
                        </div>
                    </div>
                    <GlosemProductApplication />
                </div>
            </section>
        </>
    )
}
export default GlosemHome