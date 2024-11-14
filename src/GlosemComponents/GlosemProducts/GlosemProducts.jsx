import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Modal, Image } from "antd";
import "./GlosemProductsContainer.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
// import backFadeImage from "./backFadeImage.png"
import BackFCBGA from "./BackFCBGA.png"
import Lideed from "./Chip Design.png"
import BackFCFBGA_MUF from "./BackFCFBGA_MUF (Molded Underfill).png"
import Img1 from "/images/Product Images/Chip Mockups - Copy-04.png";
import Img4 from "/images/Product Images/Chip Mockups - Copy-01.png";

const GlosemProducts = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', description: '', backImage: '' });
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

    const GlosemProductsDataAbout = [
        {
            // imagePath: Img1,
            imagePath: 'https://webtesting-upload.vercel.app/assets/Chip%20Mockups%20-%20Copy-04-DiJlpi9B.png',
            title: "Packaging capabilities",
            children: (
                <ul>
                    <li><b>Advanced SMT Capabilities:</b> Leading-edge surface mount technology (SMT) for assembling advanced packages with the highest component density.</li>
                    {/* <li><b>Multichip Module (MCM) Assembly:</b> Expertise in MCM assembly for complex applications, enabling the integration of multiple chips onto a single substrate.</li> */}
                    <li><b>Molding Encapsulation:</b> State of the art molding encapsulation techniques for achieving small form factor packages.</li>
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
            // imagePath: "/images/Product Images/SIP FCCSP MUF-new.png",
            imagePath: "https://webtesting-upload.vercel.app/assets/SIP%20FCCSP%20MUF-new-B5fhhbLG.png",
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
            // imagePath: Img4,
            imagePath: 'https://webtesting-upload.vercel.app/assets/Chip%20Mockups%20-%20Copy-01-v4se9ONf.png',
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
    const GlosemProductsData = [
        {

            // imagePath:"/images/Product Images/BARE DIE FCBGA-new.png",
            imagePath: "https://webtesting-upload.vercel.app/assets/BARE%20DIE%20FCBGA-new-CwsPUUVL.png",
            backImage: BackFCBGA,
            title: "FCBGA (Flip chip Ball Grid Array)",
            description: (
                <>
                    <Row className="ProductFirstRow">
                        <div className="FirstIcon"></div>

                        <Col lg={12} md={24}>
                            <div>
                                <h2>Description</h2>
                                <p>Between the die and substrates, Flip Chip interconnection has replaced conventional wire bonding. Flip Chip interconnections provide high electrical performance demanded in ASICs, and memory applications where high frequency and high speed are required. Using Flip Chip interconnect improves package electrical performance by shorter electrical paths, removing high inductance wires, and fc-BGA is available in a high thermal performance with heat spreader. The array of bumps under the chip also allows the die to reduce wafer costs.</p>
                                <p>Signetics offers flip chip packages in both BGA and CSP types and continues to develop a range of flip chip packages to meet customers' requests.</p>

                            </div>


                        </Col>
                        <Col lg={12} md={24}>
                            <div className="ProductInsideImageContainer">
                                <img src="/images/Product Images/Bare-Die-FcBGA.png" alt="Product image" />
                            </div>
                        </Col>
                        <div className="LastIcon">

                        </div>
                    </Row>
                    <Row>
                        <Col lg={12} md={24}>
                            <h2>Features</h2>
                            <ul>
                                <li>Cu pillar with Sn/Ag plated</li>
                                <li>50um to 100um pitch w/ BOF bonding tech.</li>
                                <li>Ni-Au, Ni-Pd-Au, SOP (solder on pad), OSP(organic solder preservative),
                                    Immersion Tin</li>
                                <li>Solder ball : Pb-free solder ball available</li>
                                <li>Dispensed underfill (DUF) & Molded underfill (MUF) available
                                    Supports minimum 0.4mm ball pitch on bottom pads.</li>
                                <li>Packing : JEDEC tray</li>
                                <li>Package configuration: JEDEC standards</li>
                            </ul>
                        </Col>
                        <Col lg={12} md={24}>
                            <div>
                                <h2>Applications</h2>
                                <ul>
                                    <li>Embedded Processors</li>
                                    <li>Application Processors</li>
                                    <li>Baseband, ASICs, and Memorys</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </>
            )
        },
        {

            // imagePath: Lideed,
            imagePath: "https://webtesting-upload.vercel.app/assets/Chip%20Design-CU7O-mT9.png",
            backImage: BackFCBGA,
            // title: "Fine Pitch Cu pillar FC",
            title: "Lidded FCBGA (Lidded Flip chip Ball Grid Array)",
            description: (
                <>
                    <Row className="ProductFirstRow">
                        <div className="FirstIcon"></div>
                        <Col lg={12} md={24}>
                            <div>
                                <h2>Description</h2>
                                <p>Cu pillar Fc-FBGA Package use Copper (Cu) pillar bump for electrical
                                    interconnection. Cu pillar bump is a kind of interconnect between PCB and die.
                                    It composes with copper cylinder (Cu post) and mushroom shape solder cap
                                    (Solder tip).
                                </p>
                                <p>Cu pillar bump can not only reduce the die size about 5~10% due to the advantage of fine pitch, but also enhances the thermal and electrical performance,
                                    higher reliability, improved electrical than conventional solder material.
                                    And it can accomplish to reduce the cost by design factors.
                                </p>
                                <p>Copper pillar bumps will also help to small fillet requirement for underfill
                                    enables more aggressive die-to-package design rule/smaller package footprint.
                                </p>

                            </div>


                        </Col>
                        <Col lg={12} md={24}>
                            <div className="ProductInsideImageContainer">
                                <img src="/images/Product Images/Lidded-FcBGA.png" alt="Product image" />
                            </div>
                        </Col>                        <div className="LastIcon"></div>
                    </Row>
                    <Row>
                        <Col lg={12} md={24}>
                            <h2>Features</h2>
                            <ul>
                                <li>Cu pillar with Sn/Ag plated</li>
                                <li>50um to 100um pitch w/ BOF bonding tech.</li>
                                <li>Ni-Au, Ni-Pd-Au, SOP (solder on pad), OSP(organic solder preservative),
                                    Immersion Tin</li>
                                <li>Solder ball : Pb-free solder ball available</li>
                                <li>Dispensed underfill (DUF) & Molded underfill (MUF) available
                                    Supports minimum 0.4mm ball pitch on bottom pads.</li>
                                <li>Packing : JEDEC tray</li>
                                <li>Package configuration: JEDEC standards</li>
                            </ul>
                        </Col>
                        <Col lg={12} md={24}>
                            <div>
                                <h2>Applications</h2>
                                <ul>
                                    <li>Embedded Processors</li>
                                    <li>Application Processors</li>
                                    <li>Baseband, ASICs, and Memorys</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                </>
            )
        },
        {
            // imagePath: "/images/Product Images/SIP FCCSP MUF-new.png",
            imagePath: "https://webtesting-upload.vercel.app/assets/SIP%20FCCSP%20MUF-new-B5fhhbLG.png",
            title: "SiP (System in Package)",
            backImage: BackFCFBGA_MUF,
            description: (
                <>
                    <Row className="ProductFirstRow">
                        <div className="FirstIcon"></div>
                        <Col lg={12} md={24}>
                            <div>
                                <h2>Description</h2>
                                <p>Underfill is a specialized encapsulant that fills the gap between chip and
                                    substrate to protect the delicate interconnect structure and die face.</p>
                                <p>But MUF allows to combine both underfill and overmold process in strip format.
                                    MUF is filled up the gap between chip and substrate with mold material without
                                    underfill.</p>
                                <p>Molded underfill (MUF) is increasingly being used to lower costs and increase throughput in flip chip process. Compared to Traditional underfill processes,
                                    MUF decreases material costs, enables smaller package size for today's demands.</p>


                            </div>
                        </Col>
                        <Col lg={12} md={24}>
                            <div className="ProductInsideImageContainer">
                                <img src="/images/Product Images/Sip-FcBGA.png" alt="Product image" />
                            </div>
                        </Col>                        <div className="lastIcon"></div>
                    </Row>
                    <Row>
                        <Col lg={12} md={24}> <h2>Features</h2>
                            <ul>
                                <li>2-6 layer, laminate substrates w/ strip base</li>
                                <li>40N/ELK, 32N/ELK, 28N/ELK</li>
                                <li>Eutectic, Hi-Pb, Pb-free & Cu pillar bumps
                                    Ni-Au, Ni-Pd-Au, SOP (solder on pad), OSP(organic solder preservative)</li>
                                <li>Over molded & Exposed die available</li>
                                <li>Dispensed underfill (DUF)
                                    Molded underfill (MUF) with solder bump</li>
                                <li>Supports minimum 0.4mm ball pitch on bottom pads.</li>
                                <li>Available with multiple components & chip to form a system-in-package
                                    version (FCFBGA-SIP)
                                    Packing : JEDEC tray
                                    Package configuration: JEDEC standards</li>
                            </ul></Col>
                        <Col lg={12} md={24}>  <h2>Applications</h2>
                            <ul>
                                <li>Handheld or portable electronic devices</li>
                                <li>Mobile Processors for smart phones, Tablets, Network AP, Chipsets for
                                    peripheral IC's</li>
                            </ul></Col>
                    </Row>
                </>
            )
        },
        // {
        //     imagePath:"/images/FCBGA_Hybrid.webp",
        //     title: "FCFBGA_HYBRID",
        //     description: (
        //         <>
        //             <Row>
        //                 <Col lg={24} md={24}>
        //                     <div>
        //                         <h2>Description</h2>
        //                         <p>Hybrid fc-FBGA is a package that combines the benefits of wire bond packaging
        //                             and the benefits of stack-die- techniques.</p>
        //                         <p>This package is stacked die hybrid with flip chip connectivity on the bottom die and wire bonding on the top die with plastic overmolded encapsulation and an
        //                             array of fine pitch solder ball terminals.</p>
        //                         <p>Hybrid FCFBGA is available with dispensed underfill(DUF) and Molded underfill i
        //                             (MUF) with solder bump.</p>
        //                         <h2>Features</h2>
        //                         <ul>
        //                             <li>Eutectic, Hi-Pb, Pb-free & Cu pillar bumps</li>
        //                             <li>Ni-Au, Ni-Pd-Au, SOP (solder on pad), OSP(organic solder preservative)</li>
        //                             <li>Overall package height 1.4mm to 1.2mm</li>
        //                             <li>150um min bump itch & 0.4mm min. ball pitch</li>
        //                             <li>110um minimum bump pitch</li>
        //                             <li>Stacked die hybrid with flip chip on the bottom and wire bonding on the
        //                                 top die</li>
        //                             <li>Dispensed underfill (DUF)</li>
        //                             <li>Molded underfill (MUF)</li>
        //                             <li>Available in Land Grid Array (LGA) format</li>
        //                             <li>Available with multiple components & chip to form a system-in-package
        //                                 version (FCFBGA-SIP)|</li>
        //                             <li>Packing : JEDEC tray</li>
        //                             <li>Package configuration: JEDEC standards</li>
        //                         </ul>
        //                         <h2>Applications</h2>
        //                         <ul>
        //                             <li>Handheld or portable electronic devices</li>
        //                             <li>Wearable devices</li>
        //                         </ul>
        //                     </div>
        //                 </Col>
        //             </Row>
        //         </>
        //     )
        // },
        {
            // imagePath: "/images/Product Images/FCCSP-new.png",
            imagePath: "https://webtesting-upload.vercel.app/assets/FCCSP-new-BUKtdonx.png",
            title: "FC CSP (Flip Chip Chip Scale Package)",
            backImage: BackFCFBGA_MUF,
            description: (
                <>
                    <Row className="ProductFirstRow">
                        <div className="FirstIcon"></div>

                        <Col lg={12} md={24}>
                            <div>
                                <h2>Description</h2>
                                <p>eMUF has a exposed die.</p>
                                <p>LDP is short for laser drilled package and it is for bottom package of POP. Compared the heat release rate of normal fc-package with eMUF, eMUF is
                                    better performance on condition that add a heat slug or air flow on package.</p>
                                <p>eMUF & LDP offer chip scale capacity for 1/0s around 300 or more. These are also available in both thin core laminate substrate technology as well
                                    as build up. eMUF & LDP feature thin and small profile, lightweight packages.</p>
                                <p>Thus, these packages are improved electrical and thermal characteristics than
                                    conventional wire bonding method.</p>


                            </div>
                        </Col>
                        <Col lg={12} md={24}>

                            <div className="ProductInsideImageContainer">
                                <img src="/images/Product Images/FcCSP.png" alt="Product image" />
                            </div>
                        </Col>

                        <div className="LastIcon">

                        </div>
                    </Row>
                    <Row>
                        <Col lg={12} md={24}>
                            <h2>Features</h2>
                            <ul>
                                <li>Eutectic, Pb-free & Cu pillar bumps</li>
                                <li>Ni-Au, Ni-Pd-Au, SOP (solder on pad), OSP (organic solder preservative),
                                    Immersion Tin</li>
                                <li>Overall package height 1.0mm to 0.7mm</li>
                                <li>Solder ball : Pb-free solder ball available</li>
                                <li>Marking : Laser Marking</li>
                                <li>Thermally enhanced version with exposed die by Molded underfill</li>
                                <li>Available Laser Drilled process for PoP Bottom package .</li>
                                <li>Package thickness of max height 0.7mm to 1.0mm available.</li>
                                <li>Supports minimum 0.4mm ball pitch on top and bottom pads.</li>
                                <li>Packing : JEDEC tray</li>
                                <li>Package configuration: JEDEC standards</li>
                            </ul>
                        </Col>
                        <Col lg={12} md={24}>
                            <h2>Applications</h2>
                            <ul>
                                <li>Handheld or portable electronic devices</li>
                                <li>Mobile Processors for smart phones, Tablets, Network AP, Chipsets for
                                    peripheral IC's</li>
                            </ul></Col>
                    </Row>
                </>
            )
        },
        // {
        //     imagePath:"/images/FCQFN.webp",
        //     title: "FCQFN",
        //     description: (
        //         <>
        //             <Row>
        //                 <Col lg={24} md={24}>
        //                     <div>
        //                         <h2>Description</h2>
        //                         <p>fc-QFN (Flip-Chip Quad Flat No lead) is a low cost molded package using flip
        //                             chip interconnections on a copper lead frame substrate.</p>
        //                         <p>This package provides small form factor compared with conventional QFP packages. And it also provides better electrical performance due to the short
        //                             electrical path.</p>
        //                         <p>fc-QFN Packages include an exposed Thermal pad to improve heat transfer out
        //                             of the IC. Exposed thermal pad can give a low inductance ground connection.</p>
        //                         <h2>Features</h2>
        //                         <ul>
        //                             <li>Cu pillar with Sn/Ag plated</li>
        //                             <li>Excellent electrical and thermal performance</li>
        //                             <li>Minimum lead pitch 0.4mm</li>
        //                             <li>Up to 12 x 12mm body size available</li>
        //                             <li>Multiple lead rows available</li>
        //                             <li>Body thickness of 1.0mm and below</li>
        //                             <li>Low cost lead frame packaging solution</li>
        //                             <li>Electrical performance achieved by shorter lead lengths</li>
        //                             <li>Cost efficient vs. substrate packages</li>
        //                             <li>Thermal performance enhanced by having the die pad soldered to the PCB</li>
        //                             <li>VQFN Option Thickness: 0.85÷0.05mm</li>
        //                             <li>WQFN Option Thickness : 0.75$0.05mm</li>
        //                             <li>UQFN Option Thickness : 0.65‡0.05mm</li>
        //                             <li>JECEC Level 1 compliant (defending on body size)</li>
        //                         </ul>
        //                         <h2>Applications</h2>
        //                         <ul>
        //                             <li>Applications include cellular phones</li>
        //                             <li>DSPs, USB Controllers</li>
        //                             <li>HD devices, Micro-Controllers</li>
        //                             <li>Wireless LAN</li>
        //                         </ul>
        //                     </div>
        //                 </Col>
        //             </Row>
        //         </>
        //     )
        // }
    ];

    // Function to open modal and set the content
    const showModal = (item) => {
        setModalContent({
            title: item.title,
            description: item.description,
            backImage: item.backImage
        });
        setIsModalVisible(true);
    };

    // Function to close the modal
    const handleCancel = () => {
        setIsModalVisible(false);
    };
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
    const CarousalImages = [
        { img: "https://images.unsplash.com/photo-1523655223303-4e9ef5234587?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://images.unsplash.com/photo-1697952431907-8542919a16b3?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { img: "https://images.unsplash.com/photo-1721090394437-c7ab4daeebff?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ];
    return (
        <>

            <div className="AnimatedImageContainer">

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
            <div id="GlosemProductsContainer">
                <div className="TopOfContainer">
                    <div>
                        <h4>
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Home&nbsp;
                            </Link>
                            {" > Products"}
                        </h4>
                    </div>
                </div>
                <div className="ProductApplicationHeaderContainer">
                    <h4>Glosem packages</h4>
                    <hr />
                </div>
                <h2 style={{ fontWeight: "400" }}>Flip Chip Package</h2>
                {/* <div className="ProductCardsContainer">
                    {GlosemProductsData.map((item, index) => (
                        <Row key={index} className="ProductRow" data-aos="fade-up" // Set the AOS animation type
                        data-aos-delay={index * 200}>
                            {index % 2 === 0 ? (
                                <>
                                    <Col lg={12}>
                                        <div className="ContentColumnContainer">
                                            <h2>{item.title}</h2>
                                            <div className="CommonBtn">
                                                <Link className="BookCallBtn" onClick={() => showModal(item)}>Read More</Link>
                                                <div className="LineAnimation">

                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="ProductImageContainer">
                                            <img
                                                src="https://images.unsplash.com/photo-1716436329488-9a95773215e0?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt={item.title}
                                            />
                                        </div>
                                    </Col>
                                </>
                            ) : (
                                <>
                                    <Col lg={12}>
                                        <div className="ProductImageContainerNew">
                                            <img
                                                src="https://images.unsplash.com/photo-1716436329488-9a95773215e0?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt={item.title}
                                            />
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="ContentColumnContainer">
                                            <h2>{item.title}</h2>
                                            <div className="CommonBtn">
                                                <Link className="BookCallBtn" onClick={() => showModal(item)}>Read More</Link>
                                                <div className="LineAnimation">

                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </>
                            )}
                        </Row>
                    ))}
                </div> */}
                <div className="ProductsApplicationCard">
                    <Row>
                        {GlosemProductsData.map((item, index) => (
                            <Col lg={12} md={12}
                                data-aos="fade-up" data-aos-duration="400" data-aos-delay={index * 100}
                                style={{ margin: "20px 0px" }}>
                                <div key={index} className="MainCardContainer">
                                    <div className="CardImageContainer">
                                        <img
                                            src={item.imagePath}
                                            alt={item.title}
                                        />                                    </div>
                                    <div className="BottomCardContainer bottomProduct">
                                        <h2>{item.title}</h2>
                                        {/* <div className="CommonBtn">
                                            <Link className="BookCallBtn" onClick={() => showModal(item)}>Read&nbsp;More</Link>
                                            <div className="LineAnimation factorlineanimation">

                                            </div>
                                        </div> */}
                                        {/* <ul>
                                           {item.description}
                                        </ul> */}
                                    </div>
                                    {/* <div className="CommonBtn">
                                        <Link className="BookCallBtn" onClick={() => showModal(item)}>Read More</Link>
                                        <div className="LineAnimation">

                                        </div>
                                    </div> */}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="ProductsContainer">
                    <h2>Full stack product portfolio with cutting-edge technologies</h2>
                    <br /><br />

                    <Row>
                        <Col lg={4}>
                            <div className="stickyContainer"
                            //data-aos="fade-up" data-aos-duration="1000"
                            >

                                <div className="LinksShow">
                                    <div className="ProgressBar" style={{ height: `${scrollProgress}%`, width: '2px', backgroundColor: '#001e60' }}>

                                    </div>
                                    {GlosemProductsDataAbout.map((item, index) => (
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
                            {GlosemProductsDataAbout.map((item, index) => (
                                <div id={`section-${index}`} className="RightSideCondition" data-aos="fade-up" data-aos-duration="400" data-aos-delay={index * 100} >
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
                {/* Modal for showing product details */}
                <Modal
                    title={modalContent.title}
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    width={1000}
                    footer={null}
                >
                    <div className="ProjectModal">
                        <div className="backoverlayImage">
                            <img src={modalContent.backImage} alt="" />
                        </div>
                        {modalContent.description}
                    </div>
                </Modal>
            </div>

        </>
    );
};

export default GlosemProducts;
