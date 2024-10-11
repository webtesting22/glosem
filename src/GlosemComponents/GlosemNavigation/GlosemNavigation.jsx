import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./GlosemNavigation.css";

const GlosemNavigation = () => {
    // Array of link objects
    const links = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <>
            <div className="GlosemNavigationContainer">
                <div className="NavigationChild">
                    <div className="FirstIcon"></div>
                    <div className="NavigationLogoContainer">
                     
                    </div>
                    <div className="NavigationLinksContainer">
                        <div className="Links">
                            {links.map((link, index) => (
                                <Link key={index} to={link.path} className="NavigationLink">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="NavigationContactContainer">
                        {/* You can add contact information here */}
                    </div>
                    <div className="LastIcon"></div>
                </div>
            </div>
        </>
    );
}

export default GlosemNavigation;
