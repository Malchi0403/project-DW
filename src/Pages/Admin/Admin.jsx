import IncomingTrip from "../../Components/Admin/IncomingTransaction";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
const Admin = () => {
  return (
    <>
      <Navbar />
      <IncomingTrip />
      <div style={{ position: "relative", bottom: "1630px" }}>
        <Footer />
      </div>
    </>
  );
};

export default Admin;
