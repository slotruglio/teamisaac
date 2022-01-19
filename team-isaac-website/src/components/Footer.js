import React from "react";
import { Link } from "gatsby";
import { aStyle, LinkStyle, footerStyle, paragraphStyles, pageStyles, socialLiStyle, copyrightStyle } from "../styles/style";
import { IconContext } from "react-icons";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaAt } from "react-icons/fa"
import * as linkSocial from "../data/socialLinks"


const Facebook = (props) => {
    return (
        <IconContext.Provider value={{ color: props.color, size: props.size }}>
            <div>
                <FaFacebookF />
            </div>
        </IconContext.Provider>
    )
}

const Instagram = (props) => {
    return (
        <IconContext.Provider value={{ color: props.color, size: props.size }}>
            <div>
                <FaInstagram />
            </div>
        </IconContext.Provider>
    )
}

const Email = (props) => {
    return (
        <IconContext.Provider value={{ color: props.color, size: props.size }}>
            <div>
                <FaAt />
            </div>
        </IconContext.Provider>
    )
}
const Linkedin = (props) => {
    return (
        <IconContext.Provider value={{ color: props.color, size: props.size }}>
            <div>
                <FaLinkedinIn />
            </div>
        </IconContext.Provider>
    )
}

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p style={copyrightStyle}>
                Click on our social!
                </p>
            <ul style={{ display: "block" }}>
                <li style={socialLiStyle}>
                    <a href={linkSocial.facebook} target={"_blank"}>
                        <Facebook size={"1.5em"} color={"lightGrey"} />
                    </a>
                    
                </li>
                <li style={socialLiStyle}>
                    <a href={linkSocial.instagram} target={"_blank"} style={aStyle}> 
                        <Instagram size={"1.5em"} color={"lightGrey"} />
                    </a>
                </li>
                <li style={socialLiStyle}>
                    <a href={linkSocial.linkedin} target={"_blank"}>
                        <Linkedin size={"1.5em"} color={"lightGrey"} />
                    </a>
                </li>
                <li style={socialLiStyle}>
                    <Link href="/">
                        <Email size={"1.5em"} color={"lightGrey"} />
                    </Link>
                </li>
            </ul>
            <p style={copyrightStyle} >Copyright © {(new Date().getFullYear())} &nbsp;|&nbsp;&nbsp;
                <Link to="/" style={aStyle}>
                    Team Isaac </Link>
            </p>

        </footer>
    )
}

export default Footer