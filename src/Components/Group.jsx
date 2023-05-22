import { Container, Card, Row, Col } from "react-bootstrap";
import Datas from "../fakeData/DataDummy";
import { Link } from "react-router-dom";

const GroupsTour = () => {
  return (
    <Container className="positionGroup justify-content-center">
      <h1
        style={{
          fontFamily: "Avenir",
          fontWeight: "800",
        }}
        className="text-center mb-5"
      >
        Group tour
      </h1>
      <Row className="">
        {Datas.map((tour) => {
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
      </Row>
    </Container>
  );
};

export default GroupsTour;
