import React, { useEffect, useRef, useState } from "react";
import "./GlosemHome.css"
import { Row, Col } from "antd";
import GlosemHomeBack from "../../assets/GlosemHomeBack.jpg"
import GlosemFactors from "../CommonComponents/GlosemFactors/GlosemFactors";
import GlosemProductApplication from "../CommonComponents/GlosemProductApplication";
const GlosemHome = () => {
    const videoRefPc = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFading, setIsFading] = useState(false);
    const handleTimeUpdate = (videoRef) => {
        const video = videoRef.current;
        if (video && video.duration - video.currentTime <= 0.5) { // 0.5 seconds before the video ends
            setIsFading(true); // Trigger fade-out
        }
    };

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
    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setIsLoaded(true);
        }, 3000);
    }, []);
    return (
        <>
            {/* {!isLoaded && (
                <div id="loader" className={`${isLoaded ? "fade-out" : ""}`}>
                    <video src={LoaderVideo} ref={videoRefPc}
                        loop={true} // Set loop to true for continuous playback
                        autoPlay
                        muted
                        playsInline // Prevent fullscreen on mobile
                        onTimeUpdate={() => handleTimeUpdate(videoRefPc)}
                        onEnded={() => handleVideoEnd(videoRefPc)} // Optional if you want to handle the end event
                        style={{ width: '100%', objectFit: 'cover', poinsterEvents: 'none' }} // Ensure no interaction triggers fullscreen>
                    />
                </div >
            )} */}

            <section id="GlosemHome">
                <div style={{ height: "100%", overflow: "hidden" }}>
                    <video
                        src="https://webtesting-upload.vercel.app/assets/GlosemBackImage-CJQo_7U3.mp4"
                        ref={videoRefPc}
                        alt="Glosem Technologies"
                        loop={true} // Set loop to true for continuous playback
                        autoPlay
                        muted
                        playsInline // Prevent fullscreen on mobile
                        onTimeUpdate={() => handleTimeUpdate(videoRefPc)}
                        onEnded={() => handleVideoEnd(videoRefPc)} // Optional if you want to handle the end event
                        style={{ width: '100%', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                    />
                    {/* <div className="VideoOvlayback">

                </div> */}
                    <div className="HeightContainer">
                        <div>
                            <Row>
                                <Col lg={12} md={24}>
                                    <div className="Mainheading">
                                        <p>/ Innovating Your Future with Global Expertise</p>
                                        <h1 data-aos="fade-up"
                                            data-aos-duration="1000" className="mainheading">
                                            {/* We have global expertise to grow your organization */}
                                            Leveraging Global Expertise to Elevate Your Semiconductor Solutions and Drive Innovation
                                        </h1>
                                    </div>
                                </Col>
                                <Col lg={12} md={24}>
                                    {/* <div>
                                        <img src="https://images.unsplash.com/photo-1675602488453-c3897a475af5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    </div> */}
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className="GlosemHomeContainer">

                    <div className="HomeAnimatedContainer mobile">

                    </div>

                    <GlosemFactors />
                    <div className="HomeAnimatedContainer pc" >
                        <div className="OverlayBack">

                        </div>
                        <div className="InlineHeading">
                            <div className="InsideContaienr">
                                <h1 data-aos="zoom-in" data-aos-duration="1000">Glosem: Powering innovations across industries</h1>
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