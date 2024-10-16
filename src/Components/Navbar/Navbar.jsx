import React, { useState, useRef } from "react";
import { FaHome } from "react-icons/fa";
import { IoMdHelpBuoy } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { BiMenu, BiMenuAltLeft } from "react-icons/bi";
import { useClerk, useUser } from "@clerk/clerk-react";
import { PiSignOut } from "react-icons/pi";
import { UserButton } from "@clerk/clerk-react";
import logo from "../../assets/logo.png";
import { PiAndroidLogoFill } from "react-icons/pi";
import { IoLogoApple } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineUnorderedList, AiOutlineInfoCircle } from "react-icons/ai";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuIconClicked, setMenuIconClicked] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const mobileMenuRef = useRef(null);
  const { isSignedIn, user, isLoaded } = useUser();
  const clerk = useClerk();
  const [isScrolled, setIsScrolled] = useState(false);
  const nav = useRef();

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setMenuIconClicked(true);
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setMobileMenuOpen(false);
    setMenuIconClicked(false);
  };

  if (!isLoaded) {
    return null;
  }

  window.onscroll = () => {
    setIsScrolled(window.scrollY > 0);
    return () => (window.onscroll = null);
  };

  console.log(isScrolled);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
        ref={mobileMenuRef}
      >
        <ul ref={nav} className="men">
          <li
            className={activeMenuItem === "home" ? "active" : ""}
            onClick={() => handleMenuItemClick("home")}
          >
            <a href="/">
              <FaHome className="icon" />
              Home
            </a>
          </li>
          <li
            className={activeMenuItem === "about" ? "active" : ""}
            onClick={() => handleMenuItemClick("about")}
          >
            <a href="/products">
              <AiOutlineUnorderedList className="icon" />
              Product Listings
            </a>
          </li>
          <li
            className={activeMenuItem === "contact" ? "active" : ""}
            onClick={() => handleMenuItemClick("contact")}
          >
            <a href="/help">
              <IoMdHelpBuoy className="icon" />
              Help
            </a>
          </li>

          <div className="join">
            <li
              className={activeMenuItem === "contact" ? "active" : ""}
              onClick={() => handleMenuItemClick("contact")}
            >
              <a href="/about">
                <AiOutlineInfoCircle className="icon" />
                About Us
              </a>
            </li>

            <li
              className={activeMenuItem === "contact" ? "active" : ""}
              onClick={() => handleMenuItemClick("contact")}
            >
              <a href="/vendor">
                <MdBusinessCenter className="icon" />
                Become a Merchant
              </a>
            </li>

            <li
              className={activeMenuItem === "contact" ? "active" : ""}
              onClick={() => handleMenuItemClick("contact")}
            >
              <a href="/account">
                <VscAccount className="icon" />
                Account
              </a>
            </li>
          </div>

          {/* <div className="app">
            <div className="heading">
              <p>Get the app</p>
            </div>

            <div className="all">
              <div className="appcon">
                <a href="">
                  <IoLogoApple className="icon" />
                  Apple
                </a>
              </div>
              <div className="playcon">
                <a href="">
                  <PiAndroidLogoFill className="icon" />
                  Android
                </a>
              </div>
            </div>
          </div> */}

        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <button>{isMobileMenuOpen ? <BiMenuAltLeft /> : <BiMenu />}</button>
      </div>

      <div className="logo">
        <Link to="/">
          <img src={logo} alt="yonko logo" />
        </Link>
      </div>

      <div className="user">
        {isSignedIn ? (
          <>
            <div className="usercon">
              <span>Hey {user.firstName}</span>
            </div>
          </>
        ) : (
          <div className="signin">
            <Button variant="outlined" onClick={() => clerk.openSignIn({})}>
              Sign in / Sign up
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
