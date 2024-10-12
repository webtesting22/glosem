import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./GlosemNavigation.css";
import { MdOutlineMenu, MdClose, MdPhoneEnabled  } from "react-icons/md"; // Import both icons

const GlosemNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility
    const menuRef = useRef(null); // Ref to detect clicks outside the menu

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
        { label: "Contact", path: "/contact" },
    ];

    return (
        <>
            <div className="GlosemNavigationContainer">
                <div className="LogoContainer">
                    <Link to="/"><img src="/images/glosemLogo.png"/></Link>
                </div>
                <div className="NavigationChild">
                    <div className="FirstIcon"></div>
                    <div className="NavigationLogoContainer">
                    <Link to="/">
                    <img src="/images/glosemLogo.png" />
                    </Link></div>
                    <div className="NavigationLinksContainer">
                        <div className="Links">
                            {links.map((link, index) => (
                                <Link key={index} to={link.path} className="NavigationLink" onClick={() => setIsMenuOpen(false)}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="NavigationContactContainer">
                        {/* You can add contact information here */}
                                                <MdPhoneEnabled  />

                    </div>
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
