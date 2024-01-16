// using hashrouter
import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AddProposal } from './components/pages/AddProposal';
import Home from './Home';
import { Navbar } from './components/Navbar';
import { ViewProposal } from './components/pages/ViewProposal';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproposal" element={<AddProposal />} />
          <Route path="/viewproposal" element={<ViewProposal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// using react-router
// import { useState } from 'react'
// import homeBackground from '../public/home.png'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { AddProposal } from "./components/pages/AddProposal"
// import Home  from "./Home"
// import { Navbar } from './components/Navbar'
// import { ViewProposal } from './components/pages/ViewProposal'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Navbar />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />}  ></Route>
//           <Route path="/addproposal" element={<AddProposal />} />
//           <Route path="/viewproposal" element={<ViewProposal />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App


