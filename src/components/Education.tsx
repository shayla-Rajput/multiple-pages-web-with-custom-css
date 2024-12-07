import "../style/Education.css"
function Education(){
    return(
        <main className="edu-main">
            <div className="edu-text">
        <h1>Education</h1>
        <p>Get a learning boost with thousands of worksheets, games, lesson plans, and more from our library of printable and digital resources </p>
        </div>
        <div className="box-cont-edu">
            <div>
                <h1 className="uniname">University of karachi</h1>
                <span>student</span>
            </div>
            <div className="computer" >
                <h1 >Bachelor in computer science</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        {/*box 2*/}
        <div className="box-cont-edu">
            <div>
                <h1 className="institute name">Governor house It program</h1>
                <span>student</span>
            </div>
            <div className="computer" >
                <h1 >web development course</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        </main>
    
    )
}
export default Education