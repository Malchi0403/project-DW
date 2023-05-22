import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home";
import Detailtour from "./Pages/DetailTour";
import Profile from "./Pages/Profile";
import Waiting from "./Pages/Waiting";
import Admin from "./Pages/Admin/Admin";
import WaitingApprove from "./Pages/WaitingApprove";
import IncomingTrip from "./Pages/Admin/IncomingTrip";
import AddTrip from "./Pages/Admin/AddTrip";

function PrivateRoute({ user, admin, children }) {
  if (!user || admin) {
    return <Navigate to="/" replace />;
  }
  return children;
}
function PublicRoute({ children }) {
  return children;
}

function ProtectRoute({ user }) {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

function App() {
  const data = JSON.parse(localStorage.getItem("dataLoginNavbar"));
  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectRoute user={data?.isUser} />}>
            <Route path="/Waiting" element={<Waiting />} />
            <Route path="/WaitingPayment" element={<WaitingApprove />} />
            <Route path="/Profile" element={<Profile />} />
          </Route>
          {/* <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/Detail/:id" element={<Detailtour />} />
          </Route> */}

          <Route element={<ProtectRoute user={data?.isAdmin} />}>
            <Route path="/trip" element={<IncomingTrip />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/AddTrip" element={<AddTrip />} />
          </Route>

          {/* <Route element={<PrivateRoute />}>
            <Route path="/Admin" element={<Admin />} />
            <Route path="/IncomingTrip" element={<IncomingTrip />} />
          </Route> */}
          <Route
            path="/Detail/:id"
            element={
              !data?.isUser && !data?.isAdmin ? (
                <PublicRoute>
                  <Detailtour />
                </PublicRoute>
              ) : (
                <PrivateRoute user={data?.isUser} admin={data?.isAdmin}>
                  <Detailtour />
                </PrivateRoute>
              )
            }
          />

          <Route
            path="/"
            element={
              data?.isUser ? (
                <Home isHome={true} />
              ) : data?.isAdmin ? (
                <Home />
              ) : (
                <Home isHome={true} />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
