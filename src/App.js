// import React, { Component } from 'react';
// function FormattedDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <FormattedDate date={this.state.date} />
//         <ol class="fa-ul">
//         <li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>List icons can</li>
//         <li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>be used to</li>
//         <li><span class="fa-li"><i class="fa-solid fa-spinner fa-pulse"></i></span>replace bullets</li>
//         <li><span class="fa-li"><i class="fa-regular fa-square"></i></span>in lists</li>
//       </ol>
//       </div>
//     );
//   }
// }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Clock />);
// export default Clock;
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Routes>
//           <Route path="/about" element={<About/>}/>
//           <Route path="/users" element={<Users/>}/>
//           <Route path="/" element={<Home/>}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }