import React, { useState, useEffect, useRef } from "react";
import "./AboutUsContainer.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Collapse, Row, Col, Image } from 'antd';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import Img1 from './smt.webp';
import Img2 from "/images/Product Images/Sip-FcCSP--MUF.png";
// import Img2 from './molding.webp';
import Img3 from './packaging.webp';
import Img4 from './rel.webp';
import 'swiper/css';
import Craousal2 from "./Craousal2.jpeg"
import Craousal3 from "./Craousal3.jpeg"
import backFadeImage from "./backFadeImage.png"
// import Test2 from "./Test2.jpeg"
import Test1 from "/images/Product Images/Chip Mockups - Copy-01.png";
import Test2 from "/images/Product Images/Chip Mockups - Copy-02.png";
import Test3 from "/images/Product Images/Chip Mockups - Copy-03.png";
import Test4 from "/images/Product Images/Chip Mockups - Copy-04.png";
// import "../GlosemProducts/GlosemProductsContainer.css";



const GlosemProductsData = [
    {
        imagePath: Img1,
        title: "Packaging capabilities",
        children: (
            <ul>
                <li><b>Advanced SMT Capabilities:</b> Leading-edge surface mount technology (SMT) for assembling advanced packages with the highest component density.</li>
                {/* <li><b>Multichip Module (MCM) Assembly:</b> Expertise in MCM assembly for complex applications, enabling the integration of multiple chips onto a single substrate.</li> */}
                <li><b>Molding Encapsulation:</b>State of the art molding encapsulation techniques for achieving small form factor packages.</li>
                <li><b>EMI Shielding Solutions:</b> Offers metal frame and PVD sputter based; based on end customer requirements can provide perfect solution.</li>
                <li><b>Bare Die and Wafer-Level Packaging Assembly Capabilities</b>
                    {/* Proficiency in assembling bare die and wafer-level packages using advanced technologies like flip chip. */}
                </li>
                <li><b>Wafer Backgrinding and Dicing Capabilities</b>
                    {/* Precision wafer backgrinding and dicing capabilities to create the smallest form factor packages. */}
                </li>
            </ul>
        ),
    },
    {
        imagePath: Img2,
        // title: "Packaging Molding & BGA, Flip chip CSP",
        title: "SiP, fcCSP, fcBGA",
        children: (
            <ul>
                {/* <li><b>Molding Encapsulation:</b> State-of-the-art molding encapsulation techniques for achieving the smallest form factor packages while meeting stringent reliability standards.</li> */}
                <li><b>Industry-Leading Materials and Equipment:</b> Utilization of mold machines and materials sourced from top suppliers in the industry.</li>
                {/* <li><b>Ball Grid Array (BGA):</b> Advanced BGA technology to enable the highest density of input/output connections within the smallest package size.</li> */}
                <li>Provide assembly solutions for System in Package(SiP), fcCSP, fcBGA based on customer needs. Customize layer count, package size either with BGA (Ball Grid Array) or LGA (Land Grid Array) connections.</li>
                <li>Provide EMI shielded packages for communication based products which can reduce interference and technology to provide smaller form factor packages.</li>
            </ul>
        ),
    },
    // {
    //     imagePath: Img3,
    //     title: "Packaging EMI Shielding",
    //     children: (
    //         <ul>
    //             <li><b>EMI Shielding Importance:</b> As devices become more compact and integrated, EMI shielding is crucial to prevent interference that can degrade performance, especially in applications like IoT, 5G, RF, Wi-Fi, Bluetooth, and automotive SiP.</li>
    //             <li><b>Glosem's EMI Shielding Solutions:</b> Glosem offers two primary EMI shielding technologies: Metal Frame and PVD Sputter.</li>
    //             <li><b>Metal Frame:</b> Provides lower cost, reworkability, thermal performance, and flexible sizing options.</li>
    //             <li><b>PVD Sputter:</b> Offers the smallest size, high reliability, and customizable shielding design.</li>
    //         </ul>
    //     ),
    // },
    {
        imagePath: Img4,
        // title: "Services Package, REL & FA",
        title: "Package Reliability And Failure Analysis Services",
        children: (
            <ul>
                <li><b>Reliability Testing:</b> JEDEC-compliant testing, Moisture, thermal, and humidity testing, Drop test.</li>
                <li><b>Failure Analysis:</b> Mechanical and electrical testing, X-ray, SAT, SEM, Electrical characterization.</li>
            </ul>
        ),
    },
]
const AboutImagesData = [
    {
        title: "SIP (with 2-pc lid)",
        imgsrc: "/images/Product Images/Chip Mockups - Copy-01.png",
    },
    {
        title: "Molded SIP",
        imgsrc: "/images/Product Images/Chip Mockups - Copy-02.png",
    },
    {
        title: "Open Top SIP",
        imgsrc: "/images/Product Images/Chip Mockups - Copy-03.png",
    },
    {
        title: "Molded SIP with Sputter EMI Shielding",
        imgsrc: "/images/Product Images/Chip Mockups - Copy-04.png",
    },
]
const GlosemAbout = () => {
    const [width, setWidth] = useState(50); // initial width as 50%
    const [borderRadius, setBorderRadius] = useState(20); // initial border radius as 30%
    const containerRef = useRef(null);
    const isMobile = window.innerWidth <= 768; // Determine if the device is mobile
    useEffect(() => {
        if (!isMobile) {
            const handleScrollImage = () => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;

                const newWidth = Math.min(100, Math.max(50, 50 + scrollPercent));
                const newBorderRadius = Math.max(0, 20 - (scrollPercent / 0.5));

                setWidth(newWidth);
                setBorderRadius(newBorderRadius);
            };

            window.addEventListener('scroll', handleScrollImage);

            return () => {
                window.removeEventListener('scroll', handleScrollImage);
            };
        }
    }, [isMobile]);

    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset; // How far the page is scrolled
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
        const startScroll = scrollHeight * 0.5; // Start calculating after 50% of total height

        if (scrollTop > startScroll) {
            const adjustedScroll = scrollTop - startScroll;
            const adjustedHeight = scrollHeight - startScroll;
            const scrollPercentage = (adjustedScroll / adjustedHeight) * 100;
            setScrollProgress(scrollPercentage);
        } else {
            setScrollProgress(0); // Keep progress at 0 before 50% scroll
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    }, []);
    const CarousalImages = [
        { img: Test1 },
        { img: Test2 },
        { img: Test3 },
        { img: Test4 }
    ];
    const scrollToSection = (id, offset = 100) => {
        const section = document.getElementById(id);
        if (section) {
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = sectionPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>

            <div id="AboutUsContainer">
                <div className="CombineImageContainer">

                    <div className="ParallaxImage">
                        <div className="pImage">
                            <img
                                src={Test1}// Replace with your image source
                                alt="Scrolling Image"
                                style={{
                                    width: isMobile ? '100%' : `${width}%`,
                                    borderRadius: isMobile ? "0px" : `${borderRadius}%`,
                                    transition: 'width 0.05s ease-in-out', // Smooth transition
                                }}
                            />
                            <img
                                src={Test3}// Replace with your image source
                                alt="Scrolling Image"
                                style={{
                                    width: isMobile ? '100%' : `${width}%`,
                                    borderRadius: isMobile ? "0px" : `${borderRadius}%`,
                                    transition: 'width 0.05s ease-in-out', // Smooth transition
                                }}
                            />
                        </div>

                    </div>
                    <div className="ParallaxImage">
                        <div className="pImage">

                            <img
                                src={Test2}// Replace with your image source
                                alt="Scrolling Image"
                                style={{
                                    width: isMobile ? '100%' : `${width}%`,
                                    borderRadius: isMobile ? "0px" : `${borderRadius}%`,
                                    transition: 'width 0.05s ease-in-out', // Smooth transition
                                }}
                            /> <img
                                src={Test4}// Replace with your image source
                                alt="Scrolling Image"
                                style={{
                                    width: isMobile ? '100%' : `${width}%`,
                                    borderRadius: isMobile ? "0px" : `${borderRadius}%`,
                                    transition: 'width 0.05s ease-in-out', // Smooth transition
                                }}
                            />
                        </div>
                    </div>
                    {/* <div className="ParallaxImage">
                        <img
                            src={Test3}// Replace with your image source
                            alt="Scrolling Image"
                            style={{
                                width: isMobile ? '100%' : `${width}%`,
                                borderRadius: isMobile ? "0px" : `${borderRadius}%`,
                                transition: 'width 0.01s ease-in-out', // Smooth transition
                            }}
                        />

                    </div>
                    <div className="ParallaxImage">
                        <img
                            src={Test4}// Replace with your image source
                            alt="Scrolling Image"
                            style={{
                                width: isMobile ? '100%' : `${width}%`,
                                borderRadius: isMobile ? "0px" : `${borderRadius}%`,
                                transition: 'width 0.01s ease-in-out', // Smooth transition
                            }}
                        />

                    </div> */}
                </div>
                <div className="SwiperContainer aboutswiper">
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
                {/* <div className="aboutTopImages">
                    {AboutImagesData.map((item, index) => (
                        <Row key={index} >
                            <Col lg={12}>
                                <div className="leftSideImageContainer">
                                <h2>{item.title}</h2>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="rightSideImageContainer">
                                    <img src={item.imgsrc}  alt={item.title} style={{ maxWidth: '100%' }} />
                                </div>
                            </Col>
                        </Row>
                    ))}
                </div> */}
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

                    <Row>
                        <Col lg={4}>
                            <div className="stickyContainer">

                                <div className="LinksShow">
                                    <div className="ProgressBar" style={{ height: `${scrollProgress}%`, width: '2px', backgroundColor: '#001e60' }}>

                                    </div>
                                    {GlosemProductsData.map((item, index) => (
                                        <div key={index}>
                                            <h4 style={{ fontWeight: "400", cursor: "pointer" }}
                                                onClick={() => scrollToSection(`section-${index}`)}
                                            >{item.title}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={20}>
                            {GlosemProductsData.map((item, index) => (
                                <div id={`section-${index}`} className="RightSideCondition" >
                                    <div>
                                        <h2>{item.title}</h2>
                                        <br />
                                        <p>{item.children}</p>
                                    </div>
                                    <div className="ImageHover">
                                        <Image src={item.imagePath} alt="" />
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default GlosemAbout;
