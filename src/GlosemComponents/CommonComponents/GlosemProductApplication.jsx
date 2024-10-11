import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "./GlosemProductApplication.css"
const words = ["IOT Sector", "Automotive", "Health Care", "Robotics", "Consumer", "Communication"];
const GlosemProductApplication = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        const handleWordChange = () => {
            setIsFadingOut(true); // Start fading out current word
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to next word
                setIsFadingOut(false); // Start fading in next word
            }, 1000); // Fading out duration is 1 second
        };

        const wordChangeTimer = setInterval(handleWordChange, 2000); // Change words every 3 seconds
        return () => clearInterval(wordChangeTimer);
    }, []);

    const ProductApplicationData = [
        {

            title: "IOT Sector",
            list: [
                {
                    listItem: "Smart home devices "
                },
                {
                    listItem: "Tracking solutions "
                },
                {
                    listItem: "Environmental monitoring"
                }
            ]
        },
        {
            title: "Automotive",
            list: [
                {
                    listItem: "Automotive manufacturers "
                },
                {
                    listItem: "Automotive supply chain"
                },
                {
                    listItem: "Electric Vehicles (EVs)"
                }
            ]
        },
        {
            title: "Health Care",
            list: [
                {
                    listItem: "Wearable health-tech "
                },
                {
                    listItem: "Patient monitoring systems"
                },
                {
                    listItem: "Telehealth service providers"
                }
            ]
        },
        {
            title: "Robotics",
            list: [
                {
                    listItem: "Industrial robotics "
                },
                {
                    listItem: "Factory automation "
                },
                {
                    listItem: "Consumer robotics"
                }
            ]
        },
        {
            title: "Consumer",
            list: [
                {
                    listItem: "Smart phones "
                },
                {
                    listItem: "Laptops "
                },
                {
                    listItem: "Tablets"
                }
            ]
        },
        {
            title: "Communication",
            list: [
                {
                    listItem: "Telecommunications "
                },
                {
                    listItem: "Networking equipments "
                },
                {
                    listItem: "Wifi & Bluetooth"
                }
            ]
        }
    ]
    return (
        <>
            <div id="ProductApplicationCardsContainer">
               
                <div className="ProductApplicationHeaderContainer">
                    <h4>Our Glosem</h4>
                    <hr />
                </div>
                <div style={{ display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center" }}>

                    <div className="typing-container">

                        <span>Products Used &nbsp;</span>
                        <span className={`typed-word ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
                            {words[currentWordIndex]}
                        </span>
                    </div>
                </div>
                <br /><br />
                <div className="ProductsApplicationCard">
                    <Row>
                        {ProductApplicationData.map((item, index) => (
                            <Col lg={8} data-aos="fade-up" // Set the AOS animation type
                                            data-aos-delay={index * 200}>
                                <div key={index} className="MainCardContainer">
                                    <div className="CardImageContainer">
                                        <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    </div>
                                    <div className="BottomCardContainer">
                                        <h2>{item.title}</h2>
                                        <ul>
                                            {item.list.map((listItem, i) => (
                                                <li key={i}>{listItem.listItem}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>

        </>
    )
}
export default GlosemProductApplication