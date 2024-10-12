import React, { useState } from "react";
import "./AboutUsContainer.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Collapse, Row, Col } from 'antd';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import smtImage from './smt.webp';
import moldingImage from './molding.jpeg';
import shieldingImage from './shielding.jpeg';
import smtServiceImage from './smt.jpg';
import 'swiper/css';
const items = [
    {
        imagesrc: smtImage,
        key: '1',
        label: 'Packaging Advanced SMT',
        children: (
            <ul>
                <li><b>Advanced SMT Capabilities:</b> Leading-edge surface mount technology (SMT) for assembling advanced packages with the highest component density</li>
                <li><b>Multichip Module (MCM) Assembly:</b> Expertise in MCM assembly for complex applications, enabling the integration of multiple chips onto a single substrate</li>
                <li><b>Bare Die and Wafer-Level Packaging:</b> Proficiency in assembling bare die and wafer-level packages using advanced technologies like flip chip</li>
                <li><b>Wafer Backgrinding and Dicing:</b> Precision wafer backgrinding and dicing capabilities to create the smallest form factor packages</li>
            </ul>
        ),
    },
    {
        imagesrc: moldingImage,
        key: '2',
        label: 'Packaging Molding & BGA',
        children: (
            <ul>
                <li><b>Molding Encapsulation:</b> State-of-the-art molding encapsulation techniques for achieving the smallest form factor packages while meeting stringent reliability standards</li>
                <li><b>Industry-Leading Materials and Equipment:</b> Utilization of mold machines and materials sourced from top suppliers in the industry</li>
                <li><b>Ball Grid Array (BGA):</b> Advanced BGA technology to enable the highest density of input/output connections within the smallest package size</li>
            </ul>
        ),
    },
    {
        imagesrc: shieldingImage,
        key: '3',
        label: 'Packaging EMI Shielding',
        children: (
            <ul>
                <li><b>EMI Shielding Importance:</b> As devices become more compact and integrated, EMI shielding is crucial to prevent interference that can degrade performance, especially in applications like IoT, 5G, RF, Wi-Fi, Bluetooth, and automotive SiP</li>
                <li><b>Glosem's EMI Shielding Solutions:</b> Glosem offers two primary EMI shielding technologies: Metal Frame and PVD Sputter.</li>
                <li><b>Metal Frame:</b> Provides lower cost, reworkability, thermal performance, and flexible sizing options.</li>
                <li><b>PVD Sputter:</b> Offers the smallest size, high reliability, and customizable shielding design.</li>
            </ul>
        ),
    },
    {
        imagesrc: smtServiceImage,
        key: '4',
        label: "Services Package, REL & FA",
        children: (
            <ul>
                <li><b>Reliability Testing:</b> JEDEC-compliant testing, Moisture, thermal, and humidity testing, Drop test</li>
                <li><b>Failure Analysis:</b> Mechanical and electrical testing, X-ray, SAT, SEM, Electrical characterization</li>
            </ul>
        ),
    }
];

const GlosemAbout = () => {
    const CarousalImages = [
        { img: "https://images.unsplash.com/photo-1523655223303-4e9ef5234587?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://images.unsplash.com/photo-1697952431907-8542919a16b3?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://images.unsplash.com/photo-1721090394437-c7ab4daeebff?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ];

    const [activeImage, setActiveImage] = useState(items[0].imagesrc);

    // Function to handle collapse change
    const handleCollapseChange = (key) => {
        const selectedItem = items.find(item => item.key === key);  // No array wrapping needed
        if (selectedItem) {
            console.log("Selected Item:", selectedItem);  // Log to check if the correct item is selected
            setActiveImage(selectedItem.imagesrc);  // Set image path based on selected key
        }
    };


    return (
        <>
            <div id="AboutUsContainer">
                <div className="TopOfContainer">
                    <div>
                        <h4>
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Home&nbsp;
                            </Link>
                            {" > About"}
                        </h4>
                    </div>
                </div>
                <div className="SwiperContainer">
                    {/* <div className="SwiperContainer"> */}
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            effect={'fade'}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, EffectFade]}
                            className="mySwiper"
                        >
                            {CarousalImages.map((item, index) => (
                                <SwiperSlide key={index}>
                                        <img src={item.img} alt="" className="CarousalImages" />

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    {/* </div> */}
                </div>
                <div className="ProductApplicationHeaderContainer">
                    <h4>Glosem</h4>
                    <hr />
                </div>
                <div className="ProductsContainer">
                    <Row>
                        <Col lg={12} md={24}>
                            <div>
                                <h2>Full stack product portfolio with cutting-edge technologies</h2>
                                <br /><br />
                                <Collapse
                                    accordion
                                    onChange={(key) => handleCollapseChange([key])} // Wrap key in array
                                    items={items.map((item) => ({
                                        key: item.key,
                                        label: item.label,
                                        children: item.children
                                    }))}
                                />
                            </div>
                        </Col>
                        <Col lg={12} md={24}>
                           
                        </Col>
                    </Row>
                </div>
            </div>

        </>
    );
}

export default GlosemAbout;
