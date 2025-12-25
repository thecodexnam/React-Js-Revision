import { Footer } from "./Component/Footer";
import { Main } from "./Component/Main";
import { NavBar } from "./Component/NavBar";
import './App.css';

function App(){
  
  return(
    <div>
      
      {/* <NavBar/>
      <Main/>
      <Footer/> */}
    </div>
  )
}

export default App;



// import React from "react";
// import PropsProject from "./PropsProject";

// const App = () => {
//   const linkStyle = { textDecoration: "none", color: "inherit" };

//   const users = [
//     {
//       name: "Range Rover",
//       model: "2024",
//       price: "$92,000",
//       img: "https://imgs.search.brave.com/wt3VZVBcMerW-9T4vPk63u-uF0dstdV6a8nSSY3bMVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/TGFuZC1Sb3Zlci9S/YW5nZS1Sb3Zlci8x/MTU0MC8xNzE5MDM3/OTgwNzc3L2Zyb250/LWxlZnQtc2lkZS00/Ny5qcGc_dHI9dy02/NjQ",
//     },
//     {
//       name: "Tesla Model S",
//       model: "2024",
//       price: "$89,990",
//       img: "https://imgs.search.brave.com/pVfVRrc9sBczuYmd2g7VLE8PnItFeMypy01So7EXNB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FyYmlrZTM2MC5j/b20vX25leHQvaW1h/Z2U_dXJsPWh0dHBz/Oi8vZGVsZW4uczMu/YXAtc291dGhlYXN0/LTEuYW1hem9uYXdz/LmNvbS9tZWRpdW1f/VGVzbGFfTW9kZWxf/U19jYXJiaWtlMzYw/X2NvbV9leHQyXzhh/MmFhNGEwZjUuanBn/Jnc9Mzg0MCZxPTc1",
//     },
//     {
//       name: "BMW X5",
//       model: "2024",
//       price: "$65,400",
//       img: "https://imgs.search.brave.com/vxybm9VHRprLR9xSY2GyLjVhpSO6ZWPx3U_9PAHVweM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/Qk1XL1g1LzEwNDkw/LzE2ODk4NTMyOTk4/MjUvcmVhci1sZWZ0/LXZpZXctMTIxLmpw/Zz90cj1oLTE5NA",
//     },
//     {
//       name: "Audi Q7",
//       model: "2024",
//       price: "$74,800",
//       img: "https://imgs.search.brave.com/aGxvvFlG0w1kNQgMsrxD_iatc5L_N9JVgGHFO7UkZac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/QXVkaS9RNy8xMjE5/OC8xNzMyNzg5ODUw/OTI2L2Zyb250LXZp/ZXctMTE4LmpwZz90/cj1oLTE5NA",
//     },
//   ];

//   return (
//     <div>
//       <nav
//         style={{
//           height: "100px",
//           backgroundColor: "#f0f0f0",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//         }}
//       >
//         <ul style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
//           <li>
//             <a href="#" style={linkStyle}>
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" style={linkStyle}>
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#" style={linkStyle}>
//               Services
//             </a>
//           </li>
//           <li>
//             <a href="#" style={linkStyle}>
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>

//       <h1 style={{ textAlign: "center" }}>Welcome to React Revision</h1>

//       <div
//         style={{
//           width: "250px",
//           flexShrink: 0,
//           backgroundColor: "#fff",
//           padding: "20px",
//           borderRadius: "8px",
//         }}
//       >
//         <PropsProject users={users} />
//       </div>

//       <footer
//         style={{
//           height: "60px",
//           backgroundColor: "#f0f0f0",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           marginTop: "40px",
//           boxShadow: "0 -2px 4px rgba(0,0,0,0.1)",
//         }}
//       >
//         <p>&copy; 2024 React Revision. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;
