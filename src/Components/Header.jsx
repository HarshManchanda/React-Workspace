import SearchAutocomplete from './SearchAutocomplete';
import bellicon from '../assets/images/bell-icon.svg'
import React, { useEffect, useState } from "react";

function Header() {
    const [userName, setUserName] = useState("Administrator"); // Replace with dynamic user name
    const [showMessage, setShowMessage] = useState(false);

    // const handleAvatarClick = () => {
    //     setShowMessage((prevState) => !prevState); // Toggle the message on click
    // };
    return (
        <header className="header">
            <SearchAutocomplete />
            <div className="headerProfile">
                <select>
                    <option>{`January 2025`}</option>
                </select>
                <div className="notification">
                    <img src={bellicon} alt="Notification" className="bellIcon" />
                </div>
                <div className="userAvatar">
                    {/* onClick={handleAvatarClick} */}
                    <span className="avatar"> 
                        A
                    </span>
                    {/* {showMessage && (
                        <div className="userMessage">
                            Hi, {userName}
                        </div>
                    )} */}
                </div>
            </div>
        </header>
    );
}

export default Header;