import React from "react";
import "./GlosemFooter.css"
import { Row, Col } from "antd";
import GlosemNavigation from "../GlosemNavigation/GlosemNavigation";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
const GlosemFooter = () => {
    const links = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <>
            <div className="GlosemFooterContainer">
                <Row>
                    <Col lg={8} md={24} xs={0}>

                    </Col>
                    <Col lg={8} md={24} xs={12}>
                        <div className="QuickLinksContainer">
                            <div>
                                <h2>Quick Links</h2>
                                <div className="Links">
                                    {links.map((link, index) => (
                                        <Link key={index} to={link.path} className="NavigationLink">
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} md={24}  xs={12}>
                        <div className="SocialLinksContainer">
                            <div>
                                <h2>Social Links</h2>
                                <div style={{ display: "flex" }}>
                                    <Link><FaInstagram /></Link>
                                    <Link><CiFacebook /></Link>
                                    <Link><FaXTwitter /></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <br />
                <div className="CopyrightText">
                    <p>@2024 Outlead solutions. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}
export default GlosemFooter