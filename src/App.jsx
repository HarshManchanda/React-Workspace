// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import Sidebar from "./Components/Sidebar"
import Header from "./Components/Header"
import SummaryCards from "./Components/SummaryCards";
import Birthdays from "./Components/Birthdays";
import EmployeeChart from "./Components/EmployeeChart";
import Footer from "./Components/Footer";

import ApiFetch from "./Components/ApiFetch";
import Login from "./auth/Login";
import React, { useState } from "react";

// function App(){
//   return(
//     <div className="dashboardContainer">
//         <Sidebar/>
//         <main className="content">
//             <Header/>
//             <div className="innerContent">
//                 <SummaryCards />
//                 <section className="dashboardContent">
//                     <Birthdays/>
//                     <EmployeeChart/>
//                 </section>
//             </div>
//             <Footer/>
//         </main>
//     </div>
//   );
// }

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set login state to true after successful login
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://49.50.93.228/api/method/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setIsLoggedIn(false); // Reset login state
        console.log("Logged out successfully.");
      } else {
        console.error("Logout failed.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className="dashboardContainer">
          <Sidebar />
          <main className="content">
            <Header />
            <div className="innerContent">
              <SummaryCards />
              <section className="dashboardContent">
                <Birthdays />
                <EmployeeChart />
              </section>
            </div>
            <Footer />
          </main>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}


// function App(){
//   return(
//     <>
//       <Login/>
//     </>
//   )
// }

// function App(){
//   return(
//     <>
//       <div>
//         <ApiFetch/>
//       </div>
//     </>
//   )
// }

export default App
