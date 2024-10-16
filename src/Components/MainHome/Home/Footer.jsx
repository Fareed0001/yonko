import React from "react";
import logo from "../../../assets/logo.png";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// MATERIAL UI 
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// REACT ICONS
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="con">
        <div className="rowone">
          <p>
            At Yonko, we're more than just an online marketplace —
            we're your ultimate one-stop-shop for convenience, quality, and community.
          </p>
          <Stack direction="row" spacing={2} className="appDownloadDiv">
            <Button variant="contained" startIcon={<FaApple />} size="medium"
              sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' } }}>
              Apple
            </Button>
            <Button variant="contained" startIcon={<IoLogoGooglePlaystore />} size="medium">
              Andriod
            </Button>
          </Stack>
        </div>

        <div className="rowtwo">
          <ul>
            <li>
              <a href="/about">About Yonko</a>
            </li>

            <li>
              <a href="">Partners</a>
            </li>

            <li>
              <a href="">Careers</a>
            </li>

            <li>
              <a href="">Promotions</a>
            </li>
          </ul>
        </div>

        <div className="rowthree">
          <ul>
            <li>
              <a href="/merchant">Become a Merchant</a>
            </li>

            <li>
              <a href="/rider">Join Logistics team</a>
            </li>

            <li>
              <a href="">Merchant Blog</a>
            </li>
          </ul>
        </div>

        <div className="rowfour">
          <ul>
            <li>
              <a href="/account">Account</a>
            </li>

            <li>
              <a href="/help">Help</a>
            </li>
          </ul>
        </div>

        <div className="rowfive">
          <ul>
            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>

            <li>
              <a href="">
                <FaXTwitter />
              </a>
            </li>

            <li>
              <a href="">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="con2">
        <div className="logo">
          <img src={logo} />

          <ul>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className="close">
          <p>Yonko © 2024. All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
