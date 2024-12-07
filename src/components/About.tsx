import Image from "next/image";
import Link from "next/link";
import "../style/Hero.css";
import "../style/About.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function About(){
    return(
        <div className="Header-container">
<div className="Header-boxes-con">
    {/*left */}
    <div>
<Image src={"/images/download.jfif"}
width={200}
height={200}
className="Header-image"
alt="profile"/>
<div className="social-icons">
    <Link href={""}>< FaYoutube className="s-icon1"/></Link>
<Link href={""}>< FaFacebook className="s-icon2"/></Link>
<Link href={""}><FaInstagram className="s-icon3"/></Link>




</div>

    </div>
    {/*right*/}
    <div className="hero-right-div">
        <h1 className="title-Header">About Us
        </h1>
        <p className="des-Header">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            
        </p>
        
    </div>
</div>
        </div>
    )
}
export default About
