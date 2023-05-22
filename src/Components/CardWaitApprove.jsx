import { Col, Container, Row } from "react-bootstrap";
import Icon from "../assets/images/IconBooking.png";
import Picture from "../assets/images/Bank.png";
import { useEffect, useState } from "react";

const CardWaitApprove = () => {
  const [Datas, setDatas] = useState();

  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem("tourBook"));
    if (Data) {
      setDatas(Data);
    }
  }, []);

  return (
    <>
      <Container style={{ marginTop: "66px" }}>
        <div
          style={{
            width: "1035px",
            height: "419px",
            border: "2px solid #B7B7B7",
            backgroundColor: "#fff",
            borderRadius: "5px",
            boxShadow: "0 0 2.5px #000",
            position: "relative",
            left: "120px",
          }}
        >
          <Row className=" ">
            <Col xs={5}>
              <img src={Icon} alt="" style={{ margin: "10px 35px 0" }} />

              <h3
                className=""
                style={{
                  fontSize: "24px",
                  fontWeight: "900",
                  margin: "28px 24px 4px 35px",
                  fontFamily: "Avenir",
                }}
              >
                {Datas?.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Avenir",
                  color: "#959595",
                  marginLeft: "35px",
                  marginBottom: "16px",
                }}
              >
                {Datas?.country}
              </p>
              <button
                style={{
                  border: "none",
                  color: " #0BDC5F",
                  backgroundColor:
                    "linear-gradient(180deg, #3CF71E 0%, #0BDC5F 100%)",
                  padding: "4px 10px",
                  margin: "0 35px 0",
                }}
              >
                Waiting Approve
              </button>
            </Col>
            <Col>
              <Row className=" ">
                <Col className="">
                  <h5
                    style={{
                      fontFamily: "Avenir",
                      fontWeight: "800",
                      fontSize: "18px",
                      color: "#000",
                      marginTop: "105px",
                    }}
                  >
                    Date Trip
                  </h5>
                  <p
                    style={{
                      fontFamily: "Avenir",
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#959595",
                    }}
                  >
                    26 August 2020
                  </p>
                  <br />
                  <h5
                    style={{
                      fontFamily: "Avenir",
                      fontWeight: "800",
                      fontSize: "18px",
                      color: "#000",
                    }}
                  >
                    Accomodation
                  </h5>
                  <p
                    style={{
                      fontFamily: "Avenir",
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#959595",
                    }}
                  >
                    Hotel 4 Nights
                  </p>
                </Col>
                <Col>
                  <h5
                    style={{
                      fontFamily: "Avenir",
                      fontWeight: "800",
                      fontSize: "18px",
                      color: "#000",
                      marginTop: "105px",
                    }}
                  >
                    Duration
                  </h5>
                  <p
                    style={{
                      fontFamily: "Avenir",
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#959595",
                    }}
                  >
                    6 Day 4 Night
                  </p>
                  <br />
                  <h5
                    style={{
                      fontFamily: "Avenir",
                      fontWeight: "800",
                      fontSize: "18px",
                      color: "#000",
                    }}
                  >
                    Transportation
                  </h5>
                  <p
                    style={{
                      fontFamily: "Avenir",
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#959595",
                    }}
                  >
                    Qata Airways
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className="">
              <h2
                style={{
                  fontFamily: "Avenir",
                  fontSize: "36px",
                  fontWeight: "800",
                  marginTop: "8px",
                  marginRight: "63px",
                  float: "right",
                }}
              >
                BOOKING
              </h2>
              <h6
                style={{
                  float: "right",
                  marginRight: "60px",
                  marginTop: "0",
                  fontFamily: "Avenir",
                  fontSize: "18px",
                  fontWeight: "900",
                  color: "#878787",
                }}
              >
                Saturday<b style={{ fontWeight: "300" }}> 22 Jun 2020</b>{" "}
              </h6>
              <img
                src={Picture}
                alt=""
                style={{
                  float: "right",
                  marginRight: "88px",
                  marginTop: "-2px",
                  width: "137px",
                  height: "137px",
                  border: "2px solid #000",
                }}
              />
              <p
                style={{
                  float: "right",
                  position: "relative",
                  top: "20px",
                  right: "90px",
                  fontFamily: "Avenir",
                  fontSize: "13px",
                  color: "#818181",
                }}
              >
                upload payment proof
              </p>
            </Col>
          </Row>

          <div className="d-flex ms-2" style={{ marginTop: "12px" }}>
            <span
              className="ms-5"
              style={{
                fontFamily: "Avenir",
                fontSize: "18px",
                fontWeight: "800",
                color: "#000",
              }}
            >
              No
            </span>
            <span
              className="ms-5"
              style={{
                fontFamily: "Avenir",
                fontSize: "18px",
                fontWeight: "800",
                color: "#000",
                marginRight: "50px",
              }}
            >
              Full Name
            </span>
            <span
              className="ms-5"
              style={{
                fontFamily: "Avenir",
                fontSize: "18px",
                fontWeight: "800",
                color: "#000",
                marginRight: "30px",
              }}
            >
              Gender
            </span>
            <span
              className="ms-5"
              style={{
                fontFamily: "Avenir",
                fontSize: "18px",
                fontWeight: "800",
                color: "#000",
              }}
            >
              Phone
            </span>
          </div>
          <hr style={{ marginTop: "8px", marginBottom: "6px" }} />
          <div className="d-flex ms-2" style={{ marginTop: "0" }}>
            <span
              className="ms-5"
              style={{
                fontFamily: "Avenir",
                fontSize: "18px",
                fontWeight: "400",
                color: "#B1B1B1",
              }}
            >
              1
            </span>
            <span
              className="ms-5"
              style={{
                fontFamily: "Avenir",
                fontSize: "18px",
                fontWeight: "400",
                color: "#B1B1B1",
                marginRight: "38px",
              }}
            >
              Radif Ganteng
            </span>
            <span
              className="ms-5"
              style={{
                fontFamily: "Avenir",
                fontSize: "18px",
                fontWeight: "400",
                color: "#B1B1B1",
                marginRight: "30px",
              }}
            >
              Male
            </span>
            <span
              className="ms-5"
              style={{
                fontFamily: "Avenir",
                fontSize: "18px",
                fontWeight: "400",
                color: "#B1B1B1",
              }}
            >
              083896833112
            </span>
            <div className="ms-auto">
              <p style={{ fontFamily: "Avenir", marginRight: "144px" }}>
                <span
                  style={{
                    marginRight: "21px",
                    fontFamily: "Avenir",
                    fontSize: "18px",
                    fontWeight: "800",
                  }}
                >
                  Qty<b style={{ marginLeft: "68px" }}>:</b>
                </span>{" "}
                {Datas?.quantity}
              </p>
            </div>
          </div>
          <hr style={{ marginTop: "0" }} />
          <div
            style={{
              float: "right",
              fontFamily: "Avenir",
              marginRight: "36px",
            }}
          >
            <p style={{ color: "#ff0000" }}>
              <span
                style={{
                  marginRight: "21px",
                  fontFamily: "Avenir",
                  fontSize: "18px",
                  fontWeight: "800",
                  color: "#000",
                }}
              >
                Qty <b style={{ marginLeft: "68px", color: "#000" }}>:</b>
              </span>{" "}
              IDR. {Datas?.price.toLocaleString("en-ID")}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CardWaitApprove;
