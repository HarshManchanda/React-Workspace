import React, { useState } from "react";
// import "./Login.css"; // Import the CSS file

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
  
//         // if (!response.ok) {
//         //   throw new Error("Invalid credentials");
//         // }
//         if (response.ok) {
//           const data = await response.json();
//           const sid = data.sid;
//           console.log("Login successful:", data);

//           if(sid){
//             const homePage = data.home_page || "/app";
//             window.location.href = `http://49.50.93.228${homePage}?sid=${sid}`;
//           }else {
//             alert("Session ID not found in response. Login may not work as expected.");
//           }
//         } else {
//           alert("Login failed. Please check your credentials.");
//         }
  
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
  
function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and Password are required!");
      return;
    }

    try {
      const response = await fetch("http://49.50.93.228/api/method/login", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usr: email, pwd: password }),
        credentials: "include", // Necessary for handling cookies
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);

        // Notify parent component about login success
        onLoginSuccess();
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="login-heading">Login</h2>
        {error && <p className="login-error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="login-form-group">
            <label htmlFor="email" className="login-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}



export default Login;
