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
  const URL = import.meta.env.VITE_REACT_APP_URL;

  // const [isLoggedIn, setIsLoggedIn] = useState(() => {
  //   // Check local storage for persisted login state
  //   return localStorage.getItem("isLoggedIn") === "true";
  // });

  // const handleLoginSuccess = () => {
  //   setIsLoggedIn(true); // Set login state to true after successful login
  //   localStorage.setItem("isLoggedIn", "true"); // Persist login state
  // };
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check local storage for persisted login state
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [userRoles, setUserRoles] = useState([]); // Store user roles here

  const handleLoginSuccess = async (userData) => {
    setIsLoggedIn(true); // Set login state to true after successful login
    localStorage.setItem("isLoggedIn", "true"); // Persist login state
    await fetchUserRoles(userData.email); // Fetch roles after login
    // console.log(userData.email)
  };

  const fetchUserRoles = async (email) => {
    try {
      const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = value;
        return acc;
      }, {});
  
      const sid = cookies.sid; // Retrieve the session ID from cookies
      console.log(sid)

      const response = await fetch(`${URL}api/method/get_test_2`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "cookie": `sid=${sid}`
        },
        body: JSON.stringify({user:email}),
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data.message.roles)
        setUserRoles(data.message.roles); // Store the fetched roles
        // console.log(userRoles)
      } else {
        console.error("Failed to fetch roles");
      }
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = value;
        return acc;
      }, {});
  
      const sid = cookies.sid; // Retrieve the session ID from cookies
  
      if (sid) {
        // Make an API call to ERPNext's logout endpoint with the session ID
        const response = await fetch(`${URL}api/method/logout?sid=${sid}`, {
          method: "GET", // Since you're passing SID in the URL, you might want to use GET method
          credentials: "include", // Ensure cookies are included in the request
        });
  
        if (response.ok) {
          console.log("Server session terminated successfully.");
  
          // Clear the session cookie explicitly
          document.cookie = "sid=; Path=/; Domain=49.50.93.228; Expires=Thu, 01 Jan 1970 00:00:00 UTC;";
          document.cookie = "sid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  
          // Reset application state
          setIsLoggedIn(false);
          localStorage.removeItem("isLoggedIn");
  
          console.log("Logged out successfully and session cookie destroyed.");
        } else {
          console.error("Logout failed on the server.");
        }
      } else {
        // Reset application state
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
        console.error("Session ID not found.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className="dashboardContainer">
          <Sidebar onLogout={handleLogout} roles={userRoles}/>
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
