import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./GlosemNavigation.css";
import { MdOutlineMenu, MdClose, MdPhoneEnabled } from "react-icons/md"; // Import both icons

const GlosemNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility
    const menuRef = useRef(null); // Ref to detect clicks outside the menu
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true); // If scrolled more than 300px
            } else {
                setIsScrolled(false); // Reset if less than 300px
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // Toggle menu visibility when the menu button is clicked
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle between open and close
    };

    // Close the menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false); // Close the menu if clicking outside
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Array of link objects
    const links = [
        { label: "Home", path: "/" },
        { label: "About", path: "/glosemAbout" },
        { label: "Products", path: "/glosemProducts" },
        // { label: "Journey", path: "/glosemJourney" },
        // { label: "Contact", path: "/contact" },
    ];
    const isNotHomePage = location.pathname !== '/';


    return (
        <>
            <div className={`GlosemNavigationContainer ${isScrolled ? 'scrolled' : ''}`}>
                <div className="LogoContainer">
                    <Link to="/"><img src="/images/logo.png" /></Link>
                </div>
                <div className="NavigationChild">
                    <div className="FirstIcon"></div>
                    <div className="NavigationLogoContainer">
                        <Link to="/">
                            <img
                                src={isHomePage ? (isScrolled ? "/images/logo.png" : "/images/glosem.png") : "/images/logo.png"}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="NavigationLinksContainer">
                        <div className="Links">
                            {links.map((link, index) => (
                                <Link key={index} to={link.path} className={`NavigationLink ${isNotHomePage ? 'non-home-active' : ''}`} onClick={() => setIsMenuOpen(false)}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* <div className="NavigationContactContainer">
                        
                        <MdPhoneEnabled />

                    </div> */}
                    <div className="LastIcon">

                    </div>
                </div>
                <div className="menuBtn" onClick={toggleMenu}>
                    {isMenuOpen ? <MdClose /> : <MdOutlineMenu />} {/* Toggle icon */}
                </div>
            </div>

            {/* Slide-down menu */}
            <div
                ref={menuRef}
                className={`slideDownMenu ${isMenuOpen ? "open" : ""}`}
            >
                <div className="slideMenuContent">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="NavigationLink"
                            onClick={() => setIsMenuOpen(false)} // Close menu on link click
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default GlosemNavigation;
