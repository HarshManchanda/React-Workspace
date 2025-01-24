import logo from '../assets/images/vprocure-logo.svg'
import home from '../assets/images/home.svg'
import overview from '../assets/images/overview.svg'
import analyticshub from '../assets/images/analytics-hub.svg'
import employee_directory from '../assets/images/employee-directory.svg'
import organization_chart from '../assets/images/organization-chart.svg'
import information from '../assets/images/information.svg'
import admin from '../assets/images/admin.svg'
import setup from '../assets/images/setup.svg'
import statutory from '../assets/images/statutory.svg'


function Sidebar({ onLogout }) {
    const URL = import.meta.env.VITE_REACT_APP_URL;

    const handleCardClick = (item) => {
        const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
            const [key, value] = cookie.split("=");
            acc[key] = value;
            return acc;
        }, {});
        const sid = cookies.sid;
        if (sid) {
            // Format item for URL
            let formattedItem = item.toLowerCase().replace(/\s+/g, '-');
            let url = `${URL}app/${encodeURIComponent(formattedItem)}?sid=${sid}`;
            window.open(url, "_blank"); // Open in a new tab
        } else {
            alert("Session ID not found. Please log in again.");
        }
    };

    return (
        <aside className="sideBar">
            <div className="logo">
                <img src={logo} alt="HM LTD" onClick={() => { window.location.href = "/";}}/>
            </div>
            <nav className="menu">
                <ul>
                    <li className="active" onClick={() => { window.location.href = "/";}}><img src={home} alt="Home" /><span>Home</span></li>
                    <li onClick={ () => handleCardClick("Employee")} ><img src={employee_directory}/><span>Employee List</span></li>
                    <li onClick={ () => handleCardClick("Leave Application")} ><img src={overview} alt="Overview" /><span>Leave Application</span></li>
                    <li onClick={ () => handleCardClick("Designation")} ><img src={analyticshub} alt="AnalyticsHub" /><span>Designation</span></li>
                    <li onClick={ () => handleCardClick("Department")} ><img src={organization_chart}/><span>Department</span></li>
                    <li onClick={ () => handleCardClick("User")} ><img src={information}/><span>Users</span></li>
                    <li onClick={ () => handleCardClick("Salary Slip")} ><img src={admin}/><span>Salary Slip</span></li>
                    <li onClick={ () => handleCardClick("DocType")} ><img src={setup}/><span>Setup</span></li>
                    <li className="logout" onClick={onLogout}><span>Log Out</span></li>
                </ul>
            </nav>
            <footer>
                <p>© HM LTD</p>
                <p><span>Powered By</span>HM LTD</p>
            </footer>
        </aside>
    );
}

export default Sidebar;