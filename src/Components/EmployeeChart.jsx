import chart from '../assets/images/chart.png'

function EmployeeChart() {
    return(
        <div class="employeeDistribution">
            <h3>Employee Distribution by Department</h3>
            <div class="chart">
                <img src={chart} alt="Chart"/>
                <canvas id="employeeChart"></canvas>
            </div>
        </div>
    );
}

export default EmployeeChart