import employee from '../assets/images/employee.svg'
import new_hire from '../assets/images/new-hire.svg'
import retirements from '../assets/images/retirements.svg'

function SummaryCards() {
    return (
        <section className="summaryRow">
            <div className="summaryCol">
                <div className="summaryCard">
                    <div className="summaryIcon"><img src={employee} alt="Employees" /></div>
                    <div className="summaryDetail">
                        <h3>Employees Head Count <span className="badge active">Active</span></h3>
                        <p>{69}</p> {/* Replace with actual data */}
                    </div>
                </div>
            </div>
            <div class="summaryCol">
                <div class="summaryCard yellowCard">
                    <div class="summaryIcon"><img src={new_hire} alt=""/></div>
                    <div class="summaryDetail">
                        <h3>New Hires (This Year)</h3>
                        <p>{0}</p>
                    </div>
                </div>
            </div>
            <div class="summaryCol">
                <div class="summaryCard purpleCard">
                    <div class="summaryIcon"><img src={retirements} alt=""/></div>
                    <div class="summaryDetail">
                        <h3>Retirements</h3>
                        <p>{0}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SummaryCards;