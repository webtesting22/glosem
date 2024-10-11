import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import demo from "./GlosemHomeBack.jpg";
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./ImageGallery.css"

const ImageGallery = () => {

    const ref = useRef(null);

    const containerRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const container = containerRef.current;
            if (container) {
                const translateValue = 1300 + scrollTop * -1; // Adjust the factor to control the speed
                container.style.transform = `translateX(${translateValue}px)`;
            }

        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const images = [
        demo,
        demo,
        demo,
        demo,
        demo,

        demo,
        demo,
        demo,
       
    ];
  
    const combinedImages = images.map((image, index) => ({
        link: image,
    }));

    return (
        <>

            <div className="swiper-container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper1"
                >
                    <SwiperSlide>
                        <img src={demo} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={demo} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={demo} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={demo} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={demo} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={demo} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={demo} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={demo} />
                    </SwiperSlide>

                </Swiper>
            </div>
            {/* <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            /> */}
           
            <div className="imgcontainer container" style={{ width: "100%", overflow: "hidden", padding: "0rem", position: "sticky", top: "20%", }} ref={ref}>
                {/* <p className="chooseHeading">WHY CHOOSE US</p> */}
                <div className="images" ref={containerRef} style={{ transition: 'transform 0.1s' }} >
                    {/* {images.map((src, index) => (

                        <img key={index} src={src} alt="" />
                        
                    ))} */}
                    {combinedImages.map((item, index) => (
                        <div key={index}>
                            {/* <img src={image.link} alt={`Image ${index + 1}`} /> */}
                            {React.isValidElement(item.link) ? (
                                // If the item is a React element, render it directly
                                item.link
                            ) : (
                                // Otherwise, render it as an image
                                <img src={item.link} alt={`Image ${index + 1}`} />
                            )}
                            <div className="imageTextContainer" >
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}

                    
                </div>


            </div>


        </>
    )
}
export default ImageGallery