import "../style/Services.css";
import { FaLaptopCode } from "react-icons/fa6";
import { AiOutlineSound } from "react-icons/ai";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { IoHelpBuoy } from "react-icons/io5";
import { FaRegCaretSquareUp } from "react-icons/fa";
import { IoLogoDesignernews } from "react-icons/io5";
function Services(){
    return(
        <main className="main">
        <div className="Ser-container">
            {/*top div*/}
            <div className="top-div-Serv">
                <h2 className="title-Serv">My Services</h2>
                <p>we provide best services to our clients.Hope you will get proper information from our website</p>
            </div>
            {/*bottom div*/}
            <div className="boxes-con">
             
                <div className="box">
                <FaLaptopCode className="ser-icon"/>
                <h3>Web development</h3>
                <span>Blog, E-commerce</span>
                </div>
                <div className="box">
< AiOutlineSound className="sound-icon"/>
<h3>Web development</h3>
<span> AiOutlineSound</span>
                </div>
                <div className="box">
            < MdOutlineSettingsVoice className="voice-icon"/>
            <h3>Web development</h3>
            <span>MdOutlineSettingsVoice </span>

                </div>
                <div className="box">
                < IoHelpBuoy className="help-icon"/>
                <h3>WEb development</h3>
                <span>IoHelpBuoy</span>
                </div>
                <div className="box">
<FaRegCaretSquareUp className="care-icon"/>
<h3>Web development</h3>
<span>FaRegCaretSquareUp</span>
                </div>
                <div className="box">
                <IoLogoDesignernews className="design-icon"/>
                <h3>Web development</h3>
                <span>IoLogoDesignernews</span>
                </div>
            </div>
            
        </div>
        </main>
    )
}
export default Services