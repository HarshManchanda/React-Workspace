import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchEmployees } from "../js/api";

// function ApiFetch() {
//     const [employees, setEmployees] = useState([]);
//     const [activeCount, setActiveCount] = useState(0);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await fetchEmployees(["name", "status","date_of_birth","date_of_joining","date_of_retirement"], 10000, "34a3b2e819f61e7:5bc3528fb8db525");
//                 setEmployees(data);

//                 // Calculate active employees
//                 const activeEmployees = data.filter((employee) => employee.status === "Active").length;
//                 setActiveCount(activeEmployees);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []); // Empty dependency array ensures it runs only once on mount.

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <div>
//             <h1>Employee Data</h1>
//             <p>Active Employees: {activeCount}</p>
//             <pre>{JSON.stringify(employees, null, 2)}</pre> {/* Fixed line */}
//         </div>
//     );
// }


function ApiFetch() {
    const [employees, setEmployees] = useState([]);
    const [activeCount, setActiveCount] = useState(0);
    const [retirementsThisMonth, setRetirementsThisMonth] = useState(0);
    const [newHiresThisMonth, setNewHiresThisMonth] = useState(0);
    const [birthdaysThisMonth, setBirthdaysThisMonth] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchEmployees(
                    ["name", "status","employee_name","first_name","last_name", "date_of_birth", "date_of_joining", "date_of_retirement"],
                    10000,
                    "34a3b2e819f61e7:5bc3528fb8db525"
                );
                setEmployees(data);

                // Calculate active employees
                const activeEmployees = data.filter((employee) => employee.status === "Active");
                setActiveCount(activeEmployees.length);

                // Get the current month and year
                const currentDate = new Date();
                const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed
                const currentYear = currentDate.getFullYear();

                // Calculate retirements this month
                const retirements = data.filter((employee) => {
                    const retirementDate = new Date(employee.date_of_retirement);
                    return (
                        retirementDate.getMonth() + 1 === currentMonth &&
                        retirementDate.getFullYear() === currentYear
                    );
                }).length;
                setRetirementsThisMonth(retirements);

                // Calculate new hires this month
                const newHires = data.filter((employee) => {
                    const joiningDate = new Date(employee.date_of_joining);
                    return (
                        joiningDate.getMonth() + 1 === currentMonth &&
                        joiningDate.getFullYear() === currentYear
                    );
                }).length;
                setNewHiresThisMonth(newHires);

                // Find active employees whose birthday is this month
                const birthdays = activeEmployees
                .filter((employee) => {
                    const birthDate = new Date(employee.date_of_birth);
                    return birthDate.getMonth() + 1 === currentMonth; // Check month only
                })
                .map((employee) => {
                    const firstName = employee.first_name || ""; // Fallback to an empty string if null/undefined
                    const lastName = employee.last_name || ""; // Fallback to an empty string if null/undefined
            
                    return {
                        first_name: `${firstName.charAt(0).toUpperCase()}`, // Add initial
                        last_name: `${lastName.charAt(0).toUpperCase()}`, // Add initial
                        employee_name: employee.employee_name,
                        date_of_birth: employee.date_of_birth,
                    };
                });
            setBirthdaysThisMonth(birthdays);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures it runs only once on mount.

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Employee Data</h1>
            <p>Active Employees: {activeCount}</p>
            <p>Retirements This Month: {retirementsThisMonth}</p>
            <p>New Hires This Month: {newHiresThisMonth}</p>
            <h2>Birthdays This Month (Active Employees)</h2>
            <ul>
                {birthdaysThisMonth.length > 0 ? (
                    birthdaysThisMonth.map((employee, index) => (
                        <li key={index}>
                            {employee.first_name} {employee.last_name} - {employee.employee_name} - {new Date(employee.date_of_birth).toLocaleDateString()}
                        </li>
                    ))
                ) : (
                    <p>No birthdays this month</p>
                )}
            </ul>
            <pre>{JSON.stringify(employees, null, 2)}</pre>
        </div>
    );
}



export default ApiFetch;
