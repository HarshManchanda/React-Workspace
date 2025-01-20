function Birthdays() {
    // const birthdays = []; // Replace with actual data

    return (
        <div className="birthdays">
            <h3>Birthdays This Month</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td><span class="avatar">HM</span>Harsh Manchanda</td>
                    <td>2001-09-12</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Birthdays;