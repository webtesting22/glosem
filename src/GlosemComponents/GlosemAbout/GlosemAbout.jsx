import React, { useState, useEffect, useRef } from "react";
import "./AboutUsContainer.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Collapse, Row, Col, Image } from 'antd';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
// import Img1 from './smt.webp';
import Img1 from "/images/Product Images/Chip Mockups - Copy-04.png";
import Img2 from "/images/Product Images/Sip-FcCSP--MUF.png";
// import Img2 from './molding.webp';
import Img3 from './packaging.webp';
// import Img4 from './rel.webp';
import Img4 from "/images/Product Images/Chip Mockups - Copy-01.png";
import 'swiper/css';
import Craousal2 from "./Craousal2.jpeg"
import Craousal3 from "./Craousal3.jpeg"
import backFadeImage from "./backFadeImage.png"
// import Test2 from "./Test2.jpeg"
import Test1 from "/images/Product Images/Chip Mockups - Copy-01.png";
import Test2 from "/images/Product Images/Chip Mockups - Copy-02.png";
import Test3 from "/images/Product Images/Chip Mockups - Copy-03.png";
import Test4 from "/images/Product Images/Chip Mockups - Copy-04.png";
import Founder1 from "./image (13) 1.svg"
import Founder2 from "./image (13) 2.svg"
// import "../GlosemProducts/GlosemProductsContainer.css";


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

    const FounderDetails = [
        {
            foundername: "Bhavik Patel",
            founderImage: Founder1,
            role: "Co-Founder & CEO",
            description: <>
                <p>Mr. Bhavik Patel is a seasoned entrepreneur with a proven track record of success in the
                    real estate and technology industries. With over 30 years of experience at Jaydeep
                    Buildcon, he has established himself as a visionary leader and innovator in the real estate
                    sector. Mr. Patel's expertise in developing innovative products and solutions has shaped
                    the future of the real estate industry.
                </p>
                <br />
                <p>Recognizing the immense potential of emerging technologies, Mr. Patel has recently
                    ventured into the semiconductor domain. His quick adaptability and passion for
                    technology have enabled him to successfully explore the realm of loT products and
                    develop practical applications. Mr. Patel's dedication to continuous learning, coupled
                    with his meticulous attention to detail, has solidified his reputation as a respected
                    industry leader.</p>
            </>
        },
        {
            foundername: "Tejas Majithia",
            founderImage: Founder2,
            role: "Co-Founder",
            description: <>
                <p>Tejas Majithia, with over 25 years of leadership experience, is the Managing Director of
                    Urmin Group in Ahmedabad, India. He oversees a diversified business portfolio spanning
                    FMCG, hospitality, and manufacturing, employing over 1,500 people across six facilities.
                    A trained pharmacist from the Massachusetts College of Pharmacy, Tejas is skilled in
                    operations, Accounting, Finance, and HR. He has expanded his family office's investment
                    portfolio to include over 30 companies, including early investments in three unicorns and
                    partnerships with major VC and PE firms.
                </p>
                <br />
                <p>His recent focus is on India's rapidly growing semiconductor industry, where he is
                    committed to building a world-class OSAT facility in line with the country's "Make in
                    India" vision. With a strong understanding of the Indian market and a global network,
                    Tejas aims to attract leading technology partners to bolster India's semiconductor
                    ecosystem.</p>
            </>
        }
    ]

    const AdviserData = [
        {
            title: " Semiconductor Technology Executive",
            tagline: "Experience : 27+ years in Semiconductor Technology",
            secondTagline: "",
            points: [

                "Strategy Development & Technology Deployment",
                "Program Management & Roadmaps Alignment",
                "Leading Cross-Functional Teams",
                "High Volume Manufacturing & NPI",
                "Package Design & System Technology Co-optimization"

            ]
        },
        {
            title: " Semiconductor Packaging Expert",
            tagline: "Experience : 10+ years in Semiconductor Technology",
            points: [
                "Advanced Packaging Solutions (SiP, IoT, RF 5G)",
                "OSAT Assembly Line Setup & Qualification",
                " ⁠Process expertise in SMT, Flip Chip, Molding, EMI Shielding, BGA, Wafer B/G & Dicing",
                "Global Supply Chain Optimization",
                "Package Characterization, Reliability Testing & Failure Analysis",
            ]
        },
        {
            title: " Semiconductor Technology Executive",
            tagline: "Experience : 20+ years in Semiconductor Technology & Business Leadership",
            points: [
                "Ex- Partner at White Field Capital",
                "Prior experience in semiconductor packaging and consumer products",
                "Sourcing and development of supply chains in China and India",
                "Awarded 9 US patents focused on semiconductor packaging including modules and EMI shielding"
            ]
        }
    ]
    return (
        <>

            <div id="AboutUsContainer">

                {/* <div className="CombineImageContainer">

                    <div className="ParallaxImage">
                        <div className="pImage">
                            <img
                                src={Test1}
                                alt="Scrolling Image"
                                style={{
                                    width: isMobile ? '100%' : `${width}%`,
                                    borderRadius: isMobile ? "0px" : `${borderRadius}%`,
                                    transition: 'width 0.1s ease-in-out',
                                }}
                            />
                            <img
                                src={Test3}
                                alt="Scrolling Image"
                                style={{
                                    width: isMobile ? '100%' : `${width}%`,
                                    borderRadius: isMobile ? "0px" : `${borderRadius}%`,
                                    transition: 'width 0.1s ease-in-out',
                                }}
                            />
                        </div>

                    </div>
                    <div className="ParallaxImage">
                        <div className="pImage">

                            <img
                                src={Test2}
                                alt="Scrolling Image"
                                style={{
                                    width: isMobile ? '100%' : `${width}%`,
                                    borderRadius: isMobile ? "0px" : `${borderRadius}%`,
                                    transition: 'width 0.1s ease-in-out',
                                }}
                            /> <img
                                src={Test4}
                                alt="Scrolling Image"
                                style={{
                                    width: isMobile ? '100%' : `${width}%`,
                                    borderRadius: isMobile ? "0px" : `${borderRadius}%`,
                                    transition: 'width 0.1s ease-in-out',
                                }}
                            />
                        </div>
                    </div>
                    <div className="ParallaxImage">
                        <img
                            src={Test3}
                            alt="Scrolling Image"
                            style={{
                                width: isMobile ? '100%' : `${width}%`,
                                borderRadius: isMobile ? "0px" : `${borderRadius}%`,
                                transition: 'width 0.01s ease-in-out',
                            }}
                        />

                    </div>
                    <div className="ParallaxImage">
                        <img
                            src={Test4}
                            alt="Scrolling Image"
                            style={{
                                width: isMobile ? '100%' : `${width}%`,
                                borderRadius: isMobile ? "0px" : `${borderRadius}%`,
                                transition: 'width 0.01s ease-in-out',
                            }}
                        />

                    </div>
                </div> */}
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
                    >
                        {CarousalImages.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.img} alt="" className="CarousalImages" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

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
                    <h4>Glosem Founders</h4>
                    <hr />
                </div>
                <div className="FoundersCards">

                    <Row>
                        {FounderDetails.map((item, index) => (
                            <Col lg={12} md={24} key={index} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index*200}>
                                <div className="FounderCards">
                                    <img src={backFadeImage} alt="" className="BackOverlayimage" />
                                    <div style={{ position: "sticky" }}>
                                        <img src={item.founderImage} alt="Founder Image" />
                                        <h2>{item.foundername}</h2>
                                        <p className="Role">{item.role}</p>
                                        <div>{item.description}</div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="AdviserSectionContainer">
                    <h2 className="advisorHeading">Highly Experienced Advisory Board</h2>

                    <Row>

                        {AdviserData.map((item, index) => (
                            <Col lg={8} md={24} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index*200} key={index}>

                                <div className="AdviserCard">
                                    <div>
                                        <h2 style={{ fontWeight: "600", color: "#001e60" }}>Advisor: <br /><span style={{ fontWeight: "400", color: "#001e60" }}>{item.title}</span></h2>
                                        <p>{item.tagline}</p>
                                        <ul>
                                            {item.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                </div>
                
                {/* 
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
                </div> */}
            </div>
        </>
    );
}

export default GlosemAbout;
