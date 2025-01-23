import React, { useState } from "react";
// import "./Login.css"; // Import the CSS file

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!email || !password) {
//       setError("Email and Password are required!");
//       return;
//     }

    // try {
    //   const response = await fetch("http://49.50.93.228/api/method/login", {
    //     method: "POST",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ usr: email, pwd: password }),
    //   });

//       if (!response.ok) {
//         throw new Error("Invalid credentials");
//       }

//       const data = await response.json();
//       console.log("Login successful:", data);

//       // Set login state
//       setIsLoggedIn(true);

//       // Redirect or update UI after successful login
//       // Example: navigate("/dashboard");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     console.log("Logged out successfully");
//   };

//   return (
//         <div className="login-container">
//           {!isLoggedIn ? (
//             <div className="login-form-container">
//               <h2 className="login-heading">Login</h2>
//               {error && <p className="login-error">{error}</p>}
//               <form onSubmit={handleLogin}>
//                 <div className="login-form-group">
//                   <label htmlFor="email" className="login-label">Email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="login-input"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>
//                 <div className="login-form-group">
//                   <label htmlFor="password" className="login-label">Password</label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="login-input"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your password"
//                     required
//                   />
//                 </div>
//                 <button type="submit" className="login-button">
//                   Login
//                 </button>
//               </form>
//             </div>
//           ) : (
//             <div className="logout-container">
//               <h2 className="logout-heading">Welcome!</h2>
//               <button onClick={handleLogout} className="logout-button">
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       );
// }


// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
  
//     const handleLogin = async (e) => {
//       e.preventDefault();
//       setError("");
  
//       if (!email || !password) {
//         setError("Email and Password are required!");
//         return;
//       }
  
//       try {
//         const response = await fetch("http://49.50.93.228/api/method/login", {
//           method: "POST",
//           headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ usr: email, pwd: password }),
//           credentials: "include",
//         });
  
//         if (!response.ok) {
//           throw new Error("Invalid credentials");
//         }
  
//         const data = await response.json();
//         console.log("Login successful:", data);
  
//         // Redirect to Frappe site
//         window.location.href = `http://49.50.93.228/app/Employee`; // Replace with your Frappe site URL
//       } catch (err) {
//         setError(err.message);
//       }
//     };
  
//     return (
//       <div className="login-container">
//         <div className="login-form-container">
//           <h2 className="login-heading">Login</h2>
//           {error && <p className="login-error">{error}</p>}
//           <form onSubmit={handleLogin}>
//             <div className="login-form-group">
//               <label htmlFor="email" className="login-label">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="login-input"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div className="login-form-group">
//               <label htmlFor="password" className="login-label">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 className="login-input"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//             <button type="submit" className="login-button">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }


function Login() {
    const [error, setError] = useState("");
  
    const handleNavigate = async () => {
      // Replace with your actual API key and secret key
      const apiKey = "34a3b2e819f61e7";
      const apiSecret = "5bc3528fb8db525";
  
      try {
        // Fetch the logged-in user to validate the API key
        const response = await fetch("http://49.50.93.228/api/method/frappe.auth.get_logged_user", {
          headers: {
            "Authorization": `token ${apiKey}:${apiSecret}`,  // Pass API key directly here
          },
        });
  
        const data = await response.json();
  
        if (response.ok) {
            // Manually set the session ID (sid cookie)
            document.cookie = "sid=2d943d7c9adf99deeb8dddeea96aff927f; path=/; domain=49.50.93.228";
            
            // After successful authentication, navigate to ERPNext home page
            window.location.replace("http://49.50.93.228/app"); // Use replace for a cleaner redirect
        } else {
          setError("Authentication failed. Please check your API key.");
        }
      } catch (error) {
        console.error("Error during authentication", error);
        setError("An error occurred. Please try again later.");
      }
    };
  
    return (
      <div>
        <button onClick={handleNavigate} className="navigate-button">
          Navigate to ERPNext
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
    );
  }

  
export default Login;
