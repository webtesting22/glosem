import React, { useEffect, useRef } from "react";
import "./GlosemAnimatedTimeline.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import KeyStages from "./KeyStages.png"
const GlosemAnimatedTimeline = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const scrollY = window.scrollY;
                // Translate the content horizontally to the left based on vertical scroll
                scrollContainerRef.current.style.transform = `translateX(-${scrollY}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const TimelineContent = [
        {
            year: "2024",
            title: "PLI Application",
            points: [

                "Business planning & proposal",
                "Technology partner selection",
                "Market research/customer MoU",
                "ISM application"
            ]

        },
        {
            year: "2025",
            title: "Approvals & Construction",
            points: [
                "Land acquisition",
                "Key personnel hiring",
                "Securing CAPEX",
                "Building cleanroom/facilities",
                "Construction & certification"
            ]
        },
        {
            year: "2026",
            title: "Setting-up Pilot line",
            points: [
                " Pilot line setup/buyoff",
                "Technical trainings",
                "Factory release",
                "Sample build check"
            ]
        },
        {
            year: "2027",
            title: "Phase 1 -Production",
            points: [
                " Initial process/product QC",
                " Ramp to volume production",
                "REL/FA install & training",
                "Complete certifications"
            ]
        },
        {
            year: "2028",
            title: "Phase 2 - Production",
            points: [
                "Process/product development",
                "Yield improvement",
                "New customers onboarding",
                "Supply chain optimization",
                "REL/FA turnkey services"
            ]
        },
        {
            year: "2029",
            title: "Phase 3 - Production",
            points: [
                "Full capacity production (~20M+/yr)",
                "Operational excellence",
                "Global customer base",
            ]
        },
        {
            year: "2030",
            title: "Capacity Expansion",
            points: [
                "Facility/cleanroom expansion",
                "100M+/yr mass production",
                "Global partnerships",
                "Advanced PKG R&D",
                "Sustainability initiatives"
            ]
        }
    ]

    return (
        <>
            <section id="glosemAnimatedTimeline">
                <div className="ScrollContainer">
                    <div className="ScrollContainerContent" ref={scrollContainerRef}>
                        {/* <Row style={{ width: "100%" }}> */}
                        {TimelineContent.map((item, index) => (
                            <div className="ContainerContent" key={index}>
                                {index % 2 === 0 ? (
                                    <>
                                        <div className="CommonBtn">
                                            <div className="BookCallBtn">{item.year}</div>
                                            <div className="LineAnimation">

                                            </div>
                                        </div>
                                        {/* <div className="year"></div> Year for even index */}
                                        <div className="EvenContainer">
                                            <h4>{item.title}</h4> {/* Title for even index */}
                                            <ul>
                                                {item.points.map((point, pointIndex) => (
                                                    <li key={pointIndex}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="OddContainer">
                                            <h4>{item.title}</h4> {/* Title for odd index */}
                                            <ul>
                                                {item.points.map((point, pointIndex) => (
                                                    <li key={pointIndex}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="CommonBtn">
                                            <div className="BookCallBtn">{item.year}</div>
                                            <div className="LineAnimation">

                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}





                        {/* </Row> */}


                    </div>
                </div>
            </section>
            <div className="GlosemKeyStages">
                <div className="ProductApplicationHeaderContainer">
                    <h4 style={{textAlign:"start"}}>Glosem</h4>
                    
                    <hr style={{margin:"unset"}}/>
                    <h2 style={{textAlign:"start",fontWeight:"400"}}>Full stack product portfolio with cutting-edge technologies</h2>
                </div>
                <div className="KeystagesContainer">
                    <img src={KeyStages} alt="" />
                </div>
            </div>
        </>
    );
};

export default GlosemAnimatedTimeline;
