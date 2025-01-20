import SearchAutocomplete from './SearchAutocomplete';
import bellicon from '../assets/images/bell-icon.svg'

function Header() {
    return (
        <header className="header">
            {/* <SearchAutocomplete /> */}
            <div class="search-box">
                <div class="headerSearch">
                    <input type="text" id="input-box" class="search" placeholder="Search Actions" autocomplete="off"/>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div class="result-box"></div>        
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