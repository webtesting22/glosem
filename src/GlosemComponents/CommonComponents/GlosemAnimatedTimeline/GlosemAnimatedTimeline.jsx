import React, { useEffect, useRef } from "react";
import "./GlosemAnimatedTimeline.css";

const GlosemAnimatedTimeline = () => {
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

    return (
        <>
            <section id="glosemAnimatedTimeline">
                <div className="ScrollContainer">
                    <div className="ScrollContainerContent" ref={scrollContainerRef}>
                        {Array.from({ length: 30 }, (_, index) => (
                            <img key={index} src={`https://picsum.photos/200/300?random=${index}`} alt="" />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default GlosemAnimatedTimeline;
