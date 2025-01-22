import employee from '../assets/images/employee.svg'
import new_hire from '../assets/images/new-hire.svg'
import retirements from '../assets/images/retirements.svg'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchEmployees } from '../js/api';

function SummaryCards() {
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
                const retirements = activeEmployees.filter((employee) => {
                    const retirementDate = new Date(employee.date_of_retirement);
                    return (
                        retirementDate.getMonth() + 1 === currentMonth &&
                        retirementDate.getFullYear() === currentYear
                    );
                }).length;
                setRetirementsThisMonth(retirements);

                // Calculate new hires this month
                const newHires = activeEmployees.filter((employee) => {
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
  
    return (
        <section className="summaryRow">
            <div className="summaryCol">
                <div className="summaryCard">
                    <div className="summaryIcon"><img src={employee} alt="Employees" /></div>
                    <div className="summaryDetail">
                        <h3>Employees Head Count <span className="badge active">Active</span></h3>
                        <p>{activeCount}</p> {/* Replace with actual data */}
                    </div>
                </div>
            </div>
            <div class="summaryCol">
                <div class="summaryCard yellowCard">
                    <div class="summaryIcon"><img src={new_hire} alt=""/></div>
                    <div class="summaryDetail">
                        <h3>New Hires (This Year)</h3>
                        <p>{newHiresThisMonth}</p>
                    </div>
                </div>
            </div>
            <div class="summaryCol">
                <div class="summaryCard purpleCard">
                    <div class="summaryIcon"><img src={retirements} alt=""/></div>
                    <div class="summaryDetail">
                        <h3>Retirements</h3>
                        <p>{retirementsThisMonth}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SummaryCards;