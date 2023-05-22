import { Container, Form, FormControl } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AddTripInput = () => {
  const [imageUrl, setImageUrl] = useState();
  const navigate = useNavigate();

  const [tripData, setTripData] = useState({
    id: new Date().getTime(),
    title: "",
    country: "",
    accomodation: "",
    transportation: "",
    eat: "",
    durationDay: "",
    durationNight: "",
    date: "",
    price: "",
    quota: "",
    description: "",
    image: "",
  });
  // const handleChangeImage = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const imageDataURL = reader.result;
  //     setTripData((prevTripData) => ({
  //       ...prevTripData,
  //       image: imageDataURL,
  //     }));
  //   };
  //   reader.readAsDataURL(file);
  // };
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTripData((prevTripData) => ({
      ...prevTripData,
      [name]: value,
    }));
  };

  const submitAddTrip = (e) => {
    e.preventDefault();
    const newTrip = {
      ...tripData,
      image: imageUrl,
    };
    const adminAddTrip = JSON.parse(localStorage.getItem("adminAddTrip"));

    if (adminAddTrip === null) {
      localStorage.setItem("adminAddTrip", JSON.stringify([newTrip]));
    } else {
      adminAddTrip.push(newTrip);
      localStorage.setItem("adminAddTrip", JSON.stringify(adminAddTrip));
    }
    navigate("/incomingTrip");

    // reset value from input
  };

  return (
    <>
      <Container>
        <h4
          style={{
            margin: "42px 0",
          }}
        >
          Add Trip
        </h4>

        <Form onSubmit={submitAddTrip}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title Trip</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={tripData.title}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="mb-3"
              size="md"
              name="country"
              value={tripData.country}
              onChange={handleInputChange}
            >
              <option hidden></option>
              <option value="Australia">Australia</option>
              <option value="Japan">Japan</option>
              <option value="Korea">Korea</option>
              <option value="Belgium">Belgium</option>
              <option value="Indonesian">Indonesian</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Accomodation</Form.Label>
            <Form.Control
              type="text"
              name="accomodation"
              value={tripData.accomodation}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Transportation</Form.Label>
            <Form.Control
              type="text"
              name="transportation"
              value={tripData.transportation}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Eat</Form.Label>
            <Form.Control
              type="text"
              name="eat"
              value={tripData.eat}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Duration</Form.Label>
            <div className="d-flex">
              <Form.Control
                type="text"
                style={{ width: "30%" }}
                name="durationDay"
                value={tripData.durationDay}
                onChange={handleInputChange}
              />
              <h6 style={{ paddingTop: "10px", margin: "0 18px" }}>Day</h6>
              <Form.Control
                type="text"
                style={{ width: "30%" }}
                name="durationNight"
                value={tripData.durationNight}
                onChange={handleInputChange}
              />
              <h6 style={{ paddingTop: "10px", margin: "0 18px" }}>Night</h6>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Date Trip</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={tripData.date}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={tripData.price}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Quota</Form.Label>
            <Form.Control
              type="text"
              name="quota"
              value={tripData.quota}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              size="none"
              name="description"
              value={tripData.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              style={{ width: "30%" }}
              name="image"
              value={tripData.image}
              accept="image/*"
              onChange={handleChangeImage}
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <button
              style={{
                margin: "18px 0",
                color: "#fff",
                backgroundColor: "#ffaf00",
                padding: "4px 24px",
                border: "none",
                borderRadius: "8px",
              }}
              type="submit"
            >
              AddTrip
            </button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default AddTripInput;
