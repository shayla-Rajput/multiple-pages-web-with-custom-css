import Image from "next/image";
import "../style/Hero.css";

function Hero(){
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
    </div>
    {/*right*/}
    <div className="hero-right-div">
        <h1 className="title-Header">i am shumaila Ashraf 
            front-end developer
        </h1>
        <p className="des-Header">Web developers create functional, user-friendly websites and web applications. They may write code, develop and test new applications, or monitor site .
            
        </p>
        <button className="hero-button">Hire me</button>
    </div>
</div>
        </div>
    )
}
export default Hero
