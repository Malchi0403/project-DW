import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import AddTripInput from "../../Components/Admin/AddTripInput";

const AddTrip = () => {
  return (
    <>
      <Navbar />
      <AddTripInput />
      <div style={{ position: "relative", top: "-1800px" }}>
        <Footer />
      </div>
    </>
  );
};

export default AddTrip;
