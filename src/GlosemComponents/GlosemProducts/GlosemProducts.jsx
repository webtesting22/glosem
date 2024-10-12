import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Modal } from "antd";
import "./GlosemProductsContainer.css";

const GlosemProducts = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', description: '' });

    const GlosemProductsData = [
        {
            title: "FCBGA",
            description: (
                <>
                    <Row>
                        <Col lg={24} md={24}>
                            <div>
                                <h2>Description</h2>
                                <p>Between the die and substrates, Flip Chip interconnection has replaced conventional wire bonding. Flip Chip interconnections provide high electrical performance demanded in ASICs, and memory applications where high frequency and high speed are required. Using Flip Chip interconnect improves package electrical performance by shorter electrical paths, removing high inductance wires, and fc-BGA is available in a high thermal performance with heat spreader. The array of bumps under the chip also allows the die to reduce wafer costs.</p>
                                <p>Signetics offers flip chip packages in both BGA and CSP types and continues to develop a range of flip chip packages to meet customers' requests.</p>
                                <h2>Features</h2>
                                <ul>
                                    <li>Cu pillar with Sn/Ag plated</li>
                                    <li>50um to 100um pitch w/ BOF bonding tech.</li>
                                    <li>Ni-Au, Ni-Pd-Au, SOP (solder on pad), OSP(organic solder preservative),
                                        Immersion Tin</li>
                                    <li>Solder ball : Pb-free solder ball available</li>
                                    <li>Dispensed underfill (DUF) & Molded underfill (MUF) available
                                        Supports minimum 0.4mmm ball pitch on bottom pads.</li>
                                    <li>Packing : JEDEC tray</li>
                                    <li>Package configuration: JEDEC standards</li>
                                </ul>
                            </div>
                   
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
            title: "Fine Pitch Cu pillar FC",
            description: (
                <>
                    <Row>

                        <Col lg={24} md={24}>
                            <div>
                                <h2>Description</h2>
                                <p>Cu pillar Fc-FBGA Package use Copper (Cu) pillar bump for electrical
                                    interconnection. Cu pillar bump is a kind of interconnect between PCB and die.
                                    It composes with copper cylinder (Cu post) and mushroom shape solder cap
                                    (Solder tip).
                                </p>
                                <p>Cu pillar bump can not only reduce the die size about 5~10% due to the advan- tage of fine pitch, but also enhances the thermal and electrical performance,
                                    higher reliability, improved electrical than conventional solder material.
                                    And it can accomplish to reduce the cost by design factors.
                                </p>
                                <p>Copper pillar bumps will also help to small fillet requirement for underfill
                                    enables more aggressive die-to-package design rule / smaller package footprint.
                                </p>
                                <h2>Features</h2>
                                <ul>
                                    <li>Cu pillar with Sn/Ag plated</li>
                                    <li>50um to 100um pitch w/ BOF bonding tech.</li>
                                    <li>Ni-Au, Ni-Pd-Au, SOP (solder on pad), OSP(organic solder preservative),
                                        Immersion Tin</li>
                                    <li>Solder ball : Pb-free solder ball available</li>
                                    <li>Dispensed underfill (DUF) & Molded underfill (MUF) available
                                        Supports minimum 0.4mmm ball pitch on bottom pads.</li>
                                    <li>Packing : JEDEC tray</li>
                                    <li>Package configuration: JEDEC standards</li>
                                </ul>
                            </div>
                      
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
            title: "FCFBGA_MUF",
            description: (
                <>
                    <Row>
                        <Col lg={24} md={24}>
                            <div>
                                <h2>Description</h2>
                                <p>Underfill is a specialized encapsulant that fills the gap between chip and
                                    substrate to protect the delicate interconnect structure and die face.</p>
                                <p>But MUF allows to combine both underfill and overmold process in strip format.
                                    MUF is filled up the gap between chip and substrate with mold material without |
                                    underfill.</p>
                                <p>Molded underfill (MUF) is increasingly being used to lower costs and increase throughput in flip chip process. Compared to Traditional underfill processes,
                                    MUF decreases material costs, enables smaller package size for today's demands.</p>
                                <h2>Features</h2>
                                <ul>
                                    <li>2-6 layer, laminate substrates w/ strip base</li>
                                    <li>40N/ELK, 32N/ELK, 28N/ELK</li>
                                    <li>Eutectic, Hi-Pb, Pb-free & Cu pillar bumps
                                        Ni-Au, Ni-Pd-Au, SOP (solder on pad), OSP(organic solder preservative)</li>
                                    <li>Over molded & Exposed die available</li>
                                    <li>Dispensed underfill (DUF)
                                        Molded underfill (MUF) with solder bump</li>
                                    <li>Supports minimum 0.4mmm ball pitch on bottom pads.</li>
                                    <li>Available with multiple components & chip to form a system-in-package
                                        version (FCFBGA-SIP)
                                        Packing : JEDEC tray
                                        Package configuration: JEDEC standards</li>
                                </ul>
                                <h2>Applications</h2>
                                <ul>
                                    <li>Handheld or portable electronic devices</li>
                                    <li>Mobile Processors for smart phones, Tablets, Network AP, Chipsets for
                                        peripheral IC's</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </>
            )
        },
        {
            title: "FCFBGA_HYBRID",
            description: (
                <>
                    <Row>
                        <Col lg={24} md={24}>
                            <div>
                                <h2>Description</h2>
                                <p>Hybrid fc-FBGA is a package that combines the benefits of wire bond packaging
                                    and the benefits of stack-die- techniques.</p>
                                <p>This package is stacked die hybrid with flip chip connectivity on the bottom die and wire bonding on the top die with plastic overmolded encapsulation and an
                                    array of fine pitch solder ball terminals.</p>
                                <p>Hybrid FCFBGA is available with dispensed underfill(DUF) and Molded underfill i
                                    (MUF) with solder bump.</p>
                                <h2>Features</h2>
                                <ul>
                                    <li>Eutectic, Hi-Pb, Pb-free & Cu pillar bumps</li>
                                    <li>Ni-Au, Ni-Pd-Au, SOP (solder on pad), OSP(organic solder preservative)</li>
                                    <li>Overall package height 1.4mm to 1.2mm</li>
                                    <li>150um min bump itch & 0.4mm min. ball pitch</li>
                                    <li>110|m minimum bump pitch</li>
                                    <li>Stacked die hybrid with flip chip on the bottom and wire bonding on the
                                        top die</li>
                                    <li>Dispensed underfill (DUF)</li>
                                    <li>Molded undertill (MUF)</li>
                                    <li>Available in Land Grid Array (LGA) format</li>
                                    <li>Available with multiple components & chip to form a system-in-package
                                        version (FCFBGA-SIP)|</li>
                                    <li>Packing : JEDEC tray</li>
                                    <li>Package configuration: JEDEC standards</li>
                                </ul>
                                <h2>Applications</h2>
                                <ul>
                                    <li>Handheld or portable electronic devices</li>
                                    <li>Wearable devices</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </>
            )
        },
        {
            title: "FCFBGA_eMUF",
            description: (
                <>
                    <Row>
                        <Col lg={24} md={24}>
                            <div>
                                <h2>Description</h2>
                                <p>eMUF has a exposed die.</p>
                                <p>LDP is short for laser drilled package and it is for bottom package of POP. Compared the heat release rate of normal fc-package with eMUF, eMUF is
                                    better performance on condition that add a heat slug or air flow on package.</p>
                                <p>eMUF & LDP offer chip scale capacity for 1/0s around 300 or more. These are also available in both thin core laminate substrate technology as well
                                    as build up. eMUF & LDP feature thin and small profile, lightweight packages.</p>
                                <p>Thus, these packages are improved electrical and thermal characteristics than
                                    conventional wire bonding method.</p>
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
                                    <li>Supports minimum 0.4mmm ball pitch on top and bottom pads.</li>
                                    <li>Packing : JEDEC tray</li>
                                    <li>Package configuration: JEDEC standards</li>
                                </ul>
                                <h2>Applications</h2>
                                <ul>
                                    <li>Handheld or portable electronic devices</li>
                                    <li>Mobile Processors for smart phones, Tablets, Network AP, Chipsets for
                                        peripheral IC's</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </>
            )
        },
        {
            title: "FCQFN",
            description: (
                <>
                    <Row>
                        <Col lg={24} md={24}>
                            <div>
                                <h2>Description</h2>
                                <p>fc-QFN (Flip-Chip Quad Flat No lead) is a low cost molded package using flip
                                    chip interconnections on a copper lead frame substrate.</p>
                                <p>This package provides small form factor compared with conventional QFP packages. And it also provides better electrical performance due to the short
                                    electrical path.</p>
                                <p>fc-QFN Packages include an exposed Thermal pad to improve heat transfer out
                                    of the IC. Exposed thermal pad can give a low inductance ground connection.</p>
                                <h2>Features</h2>
                                <ul>
                                    <li>Cu pillar with Sn/Ag plated</li>
                                    <li>Excellent electrical and thermal performance</li>
                                    <li>Minimum lead pitch 0.4mm</li>
                                    <li>Up to 12 x 12mm body size available</li>
                                    <li>Multiple lead rows available</li>
                                    <li>Body thickness of 1.0mm and below</li>
                                    <li>Low cost lead frame packaging solution</li>
                                    <li>Electrical performance achieved by shorter lead lengths</li>
                                    <li>Cost efficient vs. substrate packages</li>
                                    <li>Thermal performance enhanced by having the die pad soldered to the PCB</li>
                                    <li>VQFN Option Thickness: 0.85÷0.05mm</li>
                                    <li>WQFN Option Thickness : 0.75$0.05mm</li>
                                    <li>UQFN Option Thickness : 0.65‡0.05mm</li>
                                    <li>JECEC Level 1 compliant (defending on body size)</li>
                                </ul>
                                <h2>Applications</h2>
                                <ul>
                                    <li>Applications include cellular phones</li>
                                    <li>DSPs, USB Controllers</li>
                                    <li>HD devices, Micro-Controllers</li>
                                    <li>Wireless LAN</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </>
            )
        }
    ];

    // Function to open modal and set the content
    const showModal = (item) => {
        setModalContent({
            title: item.title,
            description: item.description,
        });
        setIsModalVisible(true);
    };

    // Function to close the modal
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
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
                <br /><br />
                <div className="ProductApplicationHeaderContainer">
                    <h4>Glosem</h4>
                    <hr />
                </div>
                <br />
                <h2 style={{ fontWeight: "400", fontSize: "2rem" }}>Flip Chip Package</h2>
                <br /><br />
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
                            <Col lg={8} md={12} data-aos="fade-up" // Set the AOS animation type
                                data-aos-delay={index * 200}>
                                <div key={index} className="MainCardContainer">
                                    <div className="CardImageContainer">
                                        <img
                                            src="https://images.unsplash.com/photo-1716436329488-9a95773215e0?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt={item.title}
                                        />                                    </div>
                                    <div className="BottomCardContainer">
                                        <h2>{item.title}</h2>
                                        <div className="CommonBtn">
                                            <Link className="BookCallBtn" onClick={() => showModal(item)}>Read More</Link>
                                            <div className="LineAnimation">

                                            </div>
                                        </div>
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
                {/* Modal for showing product details */}
                <Modal
                    title={modalContent.title}
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    width={1000}
                    footer={null}
                >
                    {modalContent.description}
                </Modal>
            </div>
        </>
    );
};

export default GlosemProducts;
