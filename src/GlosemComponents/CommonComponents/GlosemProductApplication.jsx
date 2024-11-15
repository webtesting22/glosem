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
            imagePath: "https://webtesting-upload.vercel.app/assets/IOT-DOfTFzF0.jpeg",
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
            imagePath: "https://webtesting-upload.vercel.app/assets/Automotive-hugLzEJW.jpeg",
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
            imagePath: "https://webtesting-upload.vercel.app/assets/healthcare-BGbDkXE-.jpeg",
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
            imagePath: "https://webtesting-upload.vercel.app/assets/robotics-CNKGKy5l.jpeg",
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
            imagePath: "https://webtesting-upload.vercel.app/assets/consumer-Csgp5cGQ.jpeg",
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
            imagePath: "https://webtesting-upload.vercel.app/assets/communication-BMwb_c6j.jpeg",
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
                    <h4>Our Solutions</h4>
                    <hr />
                </div>
                <div style={{ display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center" }}>

                    <div className="typing-container">

                        {/* <span>Products Used &nbsp;</span> */}
                        <span>Our Semiconductor Solutions Across Various Fields :&nbsp;</span>
                        <span className={`typed-word ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
                            {words[currentWordIndex]}
                        </span>
                    </div>
                    <div className="typing-container-mobile">
                    <span>Semiconductor Solutions For :&nbsp;</span>
                        <span className={`typed-word ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
                            {words[currentWordIndex]}
                        </span>
                    </div>
                </div>
                <div className="ProductsApplicationCard" id="ProductApplicationCard">
                    <Row>
                        {ProductApplicationData.map((item, index) => (
                            <Col lg={8} data-aos="fade-up" // Set the AOS animation type
                                data-aos-delay={index * 200}>
                                <div key={index} className="MainCardContainer">
                                    <div className="CardImageContainer">
                                        <img src={item.imagePath} alt="Glosem Technologies" />
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