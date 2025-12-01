import React, { useState, useRef, useEffect } from "react";
 import "./Menu.css";

const Menu = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState({});
    const menuRef = useRef(null);

    useEffect(() => {
        function handleDocClick(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMobileOpen(false);
                setOpenSubmenus({});
            }
        }
        document.addEventListener("click", handleDocClick);
        return () => document.removeEventListener("click", handleDocClick);
    }, []);

    const toggleMobile = (e) => {
        e.preventDefault();
        setMobileOpen((v) => !v);
    };

    const toggleSubmenu = (key) => (e) => {
        e.preventDefault();
        setOpenSubmenus((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const onKeyToggle = (key) => (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpenSubmenus((prev) => ({ ...prev, [key]: !prev[key] }));
        }
    };

    return (
        <>
            <div className="menu col-lg-5 padding0" ref={menuRef}>
                <a href="#" className="menu-mobile" onClick={toggleMobile}>
                    Navigation
                </a>
            </div>
            <ul className={`menu-list ${mobileOpen ? "open" : ""}`}>
                {/* Shirts dropdown */}
                <li className="menu-dropdown-icon">
                    <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={!!openSubmenus.shirts}
                        className="menu-btn"
                        onClick={toggleSubmenu("shirts")}
                        onKeyDown={onKeyToggle("shirts")}
                    >
                        Shirts <span className="caret" />
                    </button>

                    <ul
                        className={`normal-sub ${openSubmenus.shirts ? "open" : ""}`}
                        aria-hidden={openSubmenus.shirts ? "false" : "true"}
                    >
                        <li>
                            <a href="/category/10-Business">Business</a>
                        </li>
                        <li>
                            <a href="/category/7-Party">Party</a>
                        </li>
                        <li>
                            <a href="/category/9-Slim">Slim</a>
                        </li>
                        <li>
                            <a href="/category/8-Ditto">Ditto</a>
                        </li>
                    </ul>
                </li>

                {/* T-shirts dropdown */}
                <li className="menu-dropdown-icon">
                    <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={!!openSubmenus.tshirts}
                        className="menu-btn"
                        onClick={toggleSubmenu("tshirts")}
                        onKeyDown={onKeyToggle("tshirts")}
                    >
                        T-shirts <span className="caret" />
                    </button>

                    <ul
                        className={`normal-sub ${openSubmenus.tshirts ? "open" : ""}`}
                        aria-hidden={openSubmenus.tshirts ? "false" : "true"}
                    >
                        <li>
                            <a href="/category/11-Regular">Regular</a>
                        </li>
                        <li>
                            <a href="/category/13-Itutu-(Slim-Fit)">Itutu (Slim Fit)</a>
                        </li>
                    </ul>
                </li>

                {/* Static links */}
                <li>
                    <a href="/category/16-Festive">Trending</a>
                </li>
                <li>
                    <a href="/orders/direct-giftvoucher">Gift voucher</a>
                </li>
                <li>
                    <a href="/customers/track-order">Track Order</a>
                </li>
            </ul>
        </>
    );
};

export default Menu;