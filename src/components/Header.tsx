import "../style/Header.css";
import Link from "next/link"
function Header(){
    return(
        <div className="Header">
            {/*left*/}
           <div>
<h1 className="logo">Home page</h1>
           </div>
            {/*right*/}
<div className="Header-right-dev">
    <ul className="Header-links">
        <li >
 <Link className="nav-links"href={"/"}>Home</Link>
        </li >
        <li >
            <Link  className="nav-links "href={"/About"}>About</Link>
        </li>
        <li >
            <Link className="nav-links" href={"/Contact"}>Contact</Link>
        </li>
    </ul>
</div>







        </div>
        
    )
}
export default Header