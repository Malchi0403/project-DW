import { Container, Card, Row, Col } from "react-bootstrap";
import Data from "../../fakeData/DataDummy";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const IncomingTripContent = () => {
  const navigate = useNavigate();
  const handleButtonTrip = () => {
    navigate("/AddTrip");
  };
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   if ({ tripDatas }) {
  //     setData([tripDatas]);
  //   }
  //   console.log(tripDatas.image);
  // }, []);
  const tripDatas = JSON.parse(localStorage.getItem("adminAddTrip"));
  console.log(tripDatas);

  return (
    <>
      <Container className=" mt-5 justify-content-center">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "42px 28px",
          }}
        >
          <h2>Incoming Trip</h2>
          <button
            style={{
              padding: "4px 28px",
              border: "none",
              backgroundColor: "#ffaf00",
              borderRadius: "8px",
            }}
            onClick={handleButtonTrip}
          >
            Add Trip
          </button>
        </div>
        <Row style={{ marginTop: "20px" }}>
          {Data.map((tour) => {
            return (
              <Col className="d-flex justify-content-center mb-4">
                <Card style={{ width: "350px", height: "350px" }}>
                  <Card.Img
                    variant="top"
                    src={tour.image}
                    className="styleImage"
                  />
                  <Card.Body style={{ fontFamily: "Avenir" }}>
                    <Card.Title>
                      {" "}
                      <Link
                        to={`/Detail/${tour.id}`}
                        style={{
                          textDecoration: "none",
                          color: "#000",
                        }}
                      >
                        {tour.title}
                      </Link>{" "}
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text
                        className="mt-3"
                        style={{
                          fontFamily: "Avenir",
                          fontWeight: "900",
                          fontSize: "18px",
                          color: "#ffaf00",
                        }}
                      >
                        {tour.price}
                      </Card.Text>
                      <Card.Text className="mt-3">{tour.country}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
          {tripDatas !== null &&
            tripDatas.map((trips, id) => {
              return (
                <Col key={id} className="d-flex justify-content-center mb-4">
                  <Card style={{ width: "350px", height: "350px" }}>
                    <Card.Img
                      variant="top"
                      src={trips.image}
                      className="styleImage"
                    />

                    <Card.Body style={{ fontFamily: "Avenir" }}>
                      <Card.Title>
                        {" "}
                        <Link
                          to={`/Detail/${trips.id}`}
                          style={{
                            textDecoration: "none",
                            color: "#000",
                          }}
                        >
                          {trips.title}
                        </Link>{" "}
                      </Card.Title>
                      <div className="d-flex justify-content-between">
                        <Card.Text
                          className="mt-3"
                          style={{
                            fontFamily: "Avenir",
                            fontWeight: "900",
                            fontSize: "18px",
                            color: "#ffaf00",
                          }}
                        >
                          {trips.price}
                        </Card.Text>
                        <Card.Text className="mt-3">{trips.country}</Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default IncomingTripContent;
