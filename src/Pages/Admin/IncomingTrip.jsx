import TripContent from "../../Components/Admin/IncomingTrip";
import NavbarMenu from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const IncomingTrip = () => {
  return (
    <>
      <NavbarMenu />
      <TripContent />
      <div style={{ position: "relative", top: "-1700px" }}>
        <Footer />
      </div>
    </>
  );
};

export default IncomingTrip;
