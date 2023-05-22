import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home'
import Detailtour from "./Pages/DetailTour";
import Profile from "./Pages/Profile";
import Waiting from "./Pages/Waiting";
import Admin from "./Pages/Admin/Admin";
import WaitingApprove from './Pages/WaitingApprove'
import IncomingTrip from "./Pages/Admin/IncomingTrip";
import AddTrip from "./Pages/Admin/AddTrip";
function App() {



  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail/:id" element={<Detailtour />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Waiting" element={<Waiting />} />
        <Route path="/WaitingPayment" element={<WaitingApprove />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/incomingTrip" element={<IncomingTrip />} />
        <Route path="/AddTrip" element={<AddTrip />} />
      </Routes>
    </Router>
   
    
  );
}

export default App;
