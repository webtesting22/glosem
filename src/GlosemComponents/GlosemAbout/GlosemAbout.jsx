import React, { useState, useEffect } from "react";
import "./AboutUsContainer.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Collapse, Row, Col,Image } from 'antd';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import Img1 from './smt.webp';
import Img2 from './molding.webp';
import Img3 from './packaging.webp';
import Img4 from './rel.webp';
import 'swiper/css';
// import "../GlosemProducts/GlosemProductsContainer.css";


const { Panel } = Collapse;

const items = [
    {

        key: '1',
        imagesrc: Img1,
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

        key: '2',
        imagesrc: Img2,
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

        key: '3',
        imagesrc: Img3,
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

        key: '4',
        imagesrc: Img4,
        label: "Services Package, REL & FA",
        children: (
            <ul>
                <li><b>Reliability Testing:</b> JEDEC-compliant testing, Moisture, thermal, and humidity testing, Drop test</li>
                <li><b>Failure Analysis:</b> Mechanical and electrical testing, X-ray, SAT, SEM, Electrical characterization</li>
            </ul>
        ),
    }
];
const GlosemProductsData = [
    {
        imagePath: Img1,
        title: "Packaging Advanced SMT",
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
        imagePath: Img2,
        title: "Packaging Molding & BGA",
        children: (
            <ul>
                <li><b>Molding Encapsulation:</b> State-of-the-art molding encapsulation techniques for achieving the smallest form factor packages while meeting stringent reliability standards</li>
                <li><b>Industry-Leading Materials and Equipment:</b> Utilization of mold machines and materials sourced from top suppliers in the industry</li>
                <li><b>Ball Grid Array (BGA):</b> Advanced BGA technology to enable the highest density of input/output connections within the smallest package size</li>
            </ul>
        ),
    },
    {
        imagePath: Img3,
        title: "Packaging EMI Shielding",
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
        imagePath: Img4,
        title: "Services Package,REL & FA",
        children: (
            <ul>
                <li><b>Reliability Testing:</b> JEDEC-compliant testing, Moisture, thermal, and humidity testing, Drop test</li>
                <li><b>Failure Analysis:</b> Mechanical and electrical testing, X-ray, SAT, SEM, Electrical characterization</li>
            </ul>
        ),
    },
]
const GlosemAbout = () => {
    const [activeKey, setActiveKey] = useState('1'); // Initialize with '1' or use `null`

    const handleCollapseChange = (key) => {
        console.log("Selected key (raw):", key);
        console.log("Selected key (string):", String(key));
        setActiveKey(String(key));
        // Ensure there's always an active key
        // if (key) {
        //     setActiveKey(key);
        // }

        // Find the selected item based on the key (ensure string comparison)
        const selectedItem = items.find(item => String(item.key) === String(key));

        if (selectedItem) {
            console.log("Active image src:", selectedItem.imagesrc); // Log the image src
        } else {
            console.log("No image found for this key.");
        }

    };
    const activeItem = items.find(item => String(item.key) === String(activeKey));

    const CarousalImages = [
        { img: "https://images.unsplash.com/photo-1523655223303-4e9ef5234587?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://images.unsplash.com/photo-1697952431907-8542919a16b3?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://images.unsplash.com/photo-1721090394437-c7ab4daeebff?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="SwiperContainer">
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
            </div>
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
                <div className="ProductApplicationHeaderContainer">
                    <h4>Glosem products</h4>
                    <hr />
                </div>

                <div className="ProductsContainer">
                    <h2>Full stack product portfolio with cutting-edge technologies</h2>
                    <br /><br />
                    {/* <Row>
                        {GlosemProductsData.map((item, index) => (
                            <Col lg={8} md={12} data-aos="fade-up" // Set the AOS animation type
                                data-aos-delay={index * 200}>
                                <div key={index} className="ServiceCardContainer">
                                    <div className="CardImageContainer">
                                        <img
                                            src={item.imagePath}
                                            alt={item.title}
                                        />                                    </div>
                                    <div className="BottomCardContainer" id="aboutCardBottomContainer">
                                        <h2>{item.title}</h2>
                                       
                                        {item.children}
                                    </div>
                                   
                                </div>
                            </Col>
                        ))}
                    </Row> */}
                    {/* <div> */}
                    <Row>
                        <Col lg={4}>
                            <div className="stickyContainer">

                                <div className="LinksShow">
                                    <div className="ProgressBar">

                                    </div>
                                    {GlosemProductsData.map((item, index) => (
                                        <div key={index}>
                                            <h4 style={{ fontWeight: "400" }}>{item.title}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={20}>
                            {GlosemProductsData.map((item, index) => (
                                <div id="RightSideCondition">
                                    <div>
                                        <h2>{item.title}</h2>
                                        <br />
                                        <p>{item.children}</p>
                                    </div>
                                    <div>
                                        <Image src={item.imagePath} alt="" />
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                    {/* </div> */}
                </div>
                {/* <div className="ProductsContainer">
                    <Row>
                        <Col lg={12} md={24}>
                            <div>
                                <h2>Full stack product portfolio with cutting-edge technologies</h2>
                                <br /><br />
                                <Collapse accordion onChange={handleCollapseChange}
                                    // defaultActiveKey={['1']}

                                    activeKey={activeKey}
                                >
                                    {items.map((item) => (
                                        <Panel header={item.label} key={item.key}>
                                            {item.children}
                                        </Panel>
                                    ))}
                                </Collapse>
                            </div>
                        </Col>
                        <Col lg={12} md={24}>
                            <div style={{ display: "flex", alignItems: "center", height: "100%", padding: "20px" }}>
                                {activeItem ? (
                                    <img src={activeItem.imagesrc} alt={activeItem.label} style={{ width: '100%' }} />
                                ) : (
                                    <p>Please choose one to view an image</p>
                                )}
                            </div>
                        </Col>
                    </Row>
                </div> */}

            </div>
        </>
    );
}

export default GlosemAbout;
