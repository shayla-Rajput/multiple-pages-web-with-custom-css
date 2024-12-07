/*eslint-disable react/no-unescaped-entities */
import "../style/Contact.css";
function Contact(){
    return(
        <main className="contact-main">
            <div className="form-container">
                <h1 className="con-title">Contact us</h1>
<form action=""className="form">
    <input type="text" placeholder="Enter your Name"/>
    <input type="email" placeholder="abc@gmail.com"/>
    <input className="msg" type="text" placeholder=" your message"/>
</form>
<button className="but-sub">Submit</button>
            </div>
        </main>
    )
}
export default Contact