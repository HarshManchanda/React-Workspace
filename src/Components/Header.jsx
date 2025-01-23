import SearchAutocomplete from './SearchAutocomplete';
import bellicon from '../assets/images/bell-icon.svg'

function Header() {
    return (
        <header className="header">
            {/* <SearchAutocomplete /> */}
            <div className="search-box">
                <div className="headerSearch">
                    <input type="text" id="input-box" className="search" placeholder="Search Actions" autoComplete="off"/>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="result-box"></div>        
            </div>
            <div className="headerProfile">
                <select>
                    <option>{`January 2025`}</option>
                </select>
                <div className="notification">
                    <img src={bellicon} alt="Notification" className="bellIcon" />
                </div>
            </div>
        </header>
    );
}

export default Header;