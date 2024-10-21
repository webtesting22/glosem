import React, { useEffect, useRef } from "react";
import "./GlosemHome.css"
import { Row, Col } from "antd";
import GlosemHomeBack from "../../assets/GlosemHomeBack.jpg"
import GlosemFactors from "../CommonComponents/GlosemFactors/GlosemFactors";
import GlosemProductApplication from "../CommonComponents/GlosemProductApplication";
import GlosemVideo from "./GlosemBackImage.mp4"
const GlosemHome = () => {
    const videoRefPc = useRef(null);
    const handleTimeUpdate = (videoRef) => {
        const video = videoRef.current;
        if (video && video.duration - video.currentTime <= 0.5) { // 0.5 seconds before the video ends
            setIsFading(true); // Trigger fade-out
        }
    };


    // Handle video ending event to loop smoothly
    const handleVideoEnd = (videoRef) => {
        const video = videoRef.current;
        setIsFading(false); // Reset fading
        video.currentTime = 0; // Reset video to the start
        video.play(); // Restart the video
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        if (videoRefPc.current) {
            videoRefPc.current.playbackRate = 1.0; // Adjust the speed if needed
        }

    }, []);

    return (
        <>
            <section id="GlosemHome">
                <div style={{ height: "100%", overflow: "hidden" }}>
                    <video
                        src={GlosemVideo}
                        ref={videoRefPc}
                        loop={true} // Set loop to true for continuous playback
                        autoPlay
                        muted
                        playsInline // Prevent fullscreen on mobile
                        onTimeUpdate={() => handleTimeUpdate(videoRefPc)}
                        onEnded={() => handleVideoEnd(videoRefPc)} // Optional if you want to handle the end event
                        style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                    />
                    {/* <div className="VideoOvlayback">

                </div> */}
                </div>
               
                <div className="GlosemHomeContainer">
                    <div className="HeightContainer">
                        <div>
                            <Row>
                                <Col lg={12} md={24}>
                                    <div className="Mainheading">
                                        <h1 data-aos="fade-up"
                                            data-aos-duration="1000" className="mainheading">
                                            {/* We have global expertise to grow your organization */}
                                            Leveraging Global Expertise to Elevate Your Semiconductor Solutions and Drive Innovation
                                        </h1>
                                    </div>
                                </Col>
                                <Col lg={12} md={24}>
                                    <div>

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="HomeAnimatedContainer mobile" data-aos="fade-up"
                        data-aos-duration="2000">
                            {/* <div className="OverlayBack">

                            </div> */}
                        {/* <div className="InlineHeading">
                            <div className="InsideContaienr">
                                <h1 data-aos="zoom-in">Glosem: Powering innovations across industries</h1>
                            </div>
                        </div> */}
                    </div>

                    <GlosemFactors />
                    <div className="HomeAnimatedContainer pc" data-aos="fade-up"
                        data-aos-duration="2000">
                            <div className="OverlayBack">

                            </div>
                        <div className="InlineHeading">
                            <div className="InsideContaienr">
                                <h1 data-aos="zoom-in">Glosem: Powering innovations across industries</h1>
                            </div>
                        </div>
                    </div>

                    <GlosemProductApplication />
                </div>
            </section>
        </>
    )
}
export default GlosemHome