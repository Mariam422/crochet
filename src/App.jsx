// import { Routes, Route } from "react-router-dom";
// import Layout from "./Components/Layout/Layout";
// import Login from "./Components/Login/Login";
// import Home from "./Pages/Home/Home";
// import Tutorials from "./Pages/Tutorials/Tutorials";
// import Patterns from "./Pages/Patterns/Patterns";
// import Tasks from "./Pages/Tasks/Tasks";

// export default function App() {
//   return (
//     <Routes>
//       <Route element={<Layout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/tutorials" element={<Tutorials />} />
//         <Route path="/patterns" element={<Patterns />} />
//         <Route path="/tasks" element={<Tasks />} />
//         <Route path="/login" element={<Login />} />
//       </Route>
//     </Routes>
//   );
// }

import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import Home from "./Pages/Home/Home";
import Tutorials from "./Pages/Tutorials/Tutorials";
import Patterns from "./Pages/Patterns/Patterns";
import Tasks from "./Pages/Tasks/Tasks";
import Beginner from "./Pages/Path/Beginner";
import Intermediate from "./Pages/Path/Intermediate";
import Advanced from "./Pages/Path/Advanced";
import Register from "./Components/Registre/Registre"

export default function App() {
  return (
    <Routes>
      <Route path="/Register" element={<Register/>} />
      <Route path="/login" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/patterns" element={<Patterns />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/advanced" element={<Advanced />} />
      </Route>
    </Routes>
  );
}


// import { Routes, Route } from "react-router-dom";

// import Layout from "./Components/Layout/Layout";
// import Login from "./Components/Login/Login";
// import Register from "./Components/Registre/Registre";

// import Home from "./Pages/Home/Home";
// import Tutorials from "./Pages/Tutorials/Tutorials";
// import Patterns from "./Pages/Patterns/Patterns";
// import Tasks from "./Pages/Tasks/Tasks";

// import Beginner from "./Pages/Path/Beginner";
// import Intermediate from "./Pages/Path/Intermediate";
// import Advanced from "./Pages/Path/Advanced";

// import ProtectedRoute from "./ProtectedRoute"

// export default function App() {
//   return (
//     <Routes>

//       {/* Public Routes */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />

//       {/* Protected Routes */}
//       <Route element={<ProtectedRoute />}>
//         <Route element={<Layout />}>

//           <Route path="/" element={<Home />} />
//           <Route path="/tutorials" element={<Tutorials />} />
//           <Route path="/patterns" element={<Patterns />} />
//           <Route path="/tasks" element={<Tasks />} />

//           <Route path="/beginner" element={<Beginner />} />
//           <Route path="/intermediate" element={<Intermediate />} />
//           <Route path="/advanced" element={<Advanced />} />

//         </Route>
//       </Route>

//     </Routes>
//   );
// }