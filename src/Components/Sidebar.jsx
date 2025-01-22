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


function Sidebar() {
    return (
        <aside className="sideBar">
            <div className="logo">
                <img src={"#"} alt="HM LTD" />
            </div>
            <nav className="menu">
                <ul>
                    <li className="active"><img src={home} alt="Home" /><span>Home</span></li>
                    <li><img src={overview} alt="Overview" /><span>Overview</span></li>
                    <li><img src={analyticshub} alt="AnalyticsHub" /><span>AnalyticsHub</span></li>
                    <li><img src={employee_directory}/><span>EmployeeDirectory</span></li>
                    <li><img src={organization_chart}/><span>OrganizationChart</span></li>
                    <li><img src={information}/><span>Information</span></li>
                    <li><img src={admin}/><span>Admin</span></li>
                    <li><img src={setup}/><span>Setup</span></li>
                    <li><img src={statutory}/><span>Statutory</span></li>
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