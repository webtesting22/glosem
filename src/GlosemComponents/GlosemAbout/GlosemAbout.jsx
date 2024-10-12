import React, { useState, useEffect } from "react";
import "./AboutUsContainer.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Collapse, Row, Col } from 'antd';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import Img1 from './smt.webp';
import Img2 from './molding.jpeg';
import Img3 from './shielding.jpeg';
import Img4 from './smt.jpg';
import 'swiper/css';

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

const GlosemAbout = () => {
    // Set the first item as default active
    const [activeKey, setActiveKey] = useState('1');

    const handleCollapseChange = (key) => {
        setActiveKey(key);
    };



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
                                <Collapse accordion onChange={handleCollapseChange} defaultActiveKey={['1']}>
                                    {items.map((item) => (
                                        <Panel header={item.label} key={item.key}>
                                            {item.children}
                                        </Panel>
                                    ))}
                                </Collapse>
                            </div>
                        </Col>
                        <Col lg={12} md={24}>
                            {/* <div style={{ textAlign: 'center' }}>
                                {activeItem && (
                                    <img
                                        src={activeItem.imagesrc}
                                        alt={activeItem.label}
                                        className="ActiveItemImage"
                                    />
                                )}
                            </div> */}
                        </Col>
                    </Row>
                </div>
                <h2 className="FounderHeading">Our Founders</h2>
                <div classname="FounderCardsContainer">
                    <Row>
                        <Col lg={12} md={24}>
                            <div className="FounderCard">
                                <div className="FounderImageContainer">
                                    <img src="/images/BhavikPatel.jpeg" />
                                </div>
                                <div className="FounderTitle">
                                    <h3>Bhavik Patel</h3>
                                </div>
                                <div className="FounderDescription">
                                    <ul>
                                        <li>Mr. Bhavik Patel is a seasoned Real Estate visionary with 30 years at Parshvanath Land.</li>
                                        <li>He's known for pioneering innovative real estate solutions and products.</li>
                                        <li>Recently, he has ventured into the Semiconductor industry, demonstrating quick adaptability.</li>
                                        <li>His work includes developing practical IoT use cases, reflecting his technical acumen.</li>
                                        <li>Mr. Patel's dedication to learning and eye for detail make him a valuable industry leader.</li>
                                        <li>With 30 years at Parshvanath Land, Mr. Bhavik Patel is a real estate innovator and emerging tech enthusiast in IoT and semiconductors.</li>
                                        <li>His relentless pursuit of innovation and detail-oriented approach have cemented his status as a distinguished industry leader.</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} md={24}>
                            <div className="FounderCard">
                                <div className="FounderImageContainer">
                                    <img src="/images/TejasMajithia.jpeg" />
                                </div>
                                <div className="FounderTitle">
                                    <h3>Tejas Majithia</h3>
                                </div>
                                <div className="FounderDescription">
                                    <ul>
                                        <li>Tejas Majithia brings over 25 years of business leadership experience, with a strong foundation in managing large-scale operations, investments, and strategic partnerships. Currently serving as the Managing Director of Urmin Group of Companies, Tejas oversees a diversified business portfolio in Ahmedabad, India, spanning FMCG, hospitality, and manufacturing. Under his leadership, Urmin Group has grown to employ over 1,500 people across six facilities covering more than 20,000 square meters.</li>
                                        <li>Tejas is also a trained pharmacist from the Massachusetts College of Pharmacy and has honed his expertise in operational and administrative areas, including Accounting, Finance, and HR. Through his strategic acumen, Tejas has positioned Urmin as a key player in its industries, while expanding his family office’s investment portfolio to include over 30 companies and startups. These investments include early stakes in three unicorns and partnerships with leading VC and PE firms, embedding Urmin’s family office into the private market ecosystem.</li>
                                        <li>Tejas’s recent focus is on India’s rapidly growing semiconductor ecosystem. This is reflected in his commitment to advancing India’s semiconductor industry and attracting global technology partners. With an in-depth understanding of the Indian market and a solid international network, Tejas is dedicated to building a world-class OSAT facility that aligns with India’s “Make in India” vision.</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div >
        </>
    );
}

export default GlosemAbout;
