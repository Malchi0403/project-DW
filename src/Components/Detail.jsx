import { Row, Col, Modal, Carousel } from "react-bootstrap";
import Sydney2 from "../assets/images/sydney2.jpg";
import Sydney3 from "../assets/images/Sydney3.jpg";
import Sydney4 from "../assets/images/sydney4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCalendar,
  faClock,
  faPlaneDeparture,
  faSquareMinus,
  faSquarePlus,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Datas from "../fakeData/DataDummy";

const Detail = () => {
  const { id } = useParams();
  const selectedTour = Datas.find((tour) => tour.id === id);
  const [quantity, setQuantity] = useState(1);
  const price = parseInt(selectedTour.price.replace(/\D/g, ""));
  console.log(selectedTour.price);
  const total = price * quantity;
  const navigate = useNavigate();
  const [selected, setSelectedTour] = useState(selectedTour);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCarouselSelect = (i, e) => {
    setCarouselIndex(i);
  };

  const handleBookNow = () => {
    localStorage.setItem("tourBook", JSON.stringify(selected));
    navigate("/Waiting");
  };

  useEffect(() => {
    setSelectedTour({ ...selectedTour, quantity: quantity, price: total });
  }, [total, quantity]);

  return (
    <div className="d-flex flex-column styleDetail">
      <h1 style={{ fontWeight: "900" }}>{selectedTour.title}</h1>
      <h3 style={{ fontWeight: "800" }}>{selectedTour.country}</h3>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <Row
          style={{
            width: "100%",
            height: "360px",
            display: "flex",
            padding: "0",
          }}
        >
          <Col style={{ maxWidth: "100%", height: "100%" }}>
            <img
              src={selectedTour.image}
              alt=""
              className="CarouselImg"
              onClick={() => {
                openModal();
                setCarouselIndex(0);
              }}
              style={{ cursor: "pointer" }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={Sydney2}
              alt=""
              className="CarouselImgContent"
              onClick={() => {
                openModal();
                setCarouselIndex(1);
              }}
              style={{ cursor: "pointer" }}
            />
          </Col>
          <Col>
            <img
              src={Sydney3}
              alt=""
              className="CarouselImgContent"
              onClick={() => {
                openModal();
                setCarouselIndex(2);
              }}
              style={{ cursor: "pointer" }}
            />
          </Col>
          <Col>
            <img
              src={Sydney4}
              alt=""
              className="CarouselImgContent"
              onClick={() => {
                openModal();
                setCarouselIndex(3);
              }}
              style={{ cursor: "pointer" }}
            />
          </Col>
        </Row>
      </div>
      <div className="mt-5">
        <h5>Information trip</h5>
        <Row className="mt-4">
          <Col>
            <h6>Accomodation</h6>
            <h5>
              <span>
                {" "}
                <FontAwesomeIcon
                  icon={faBuilding}
                  style={{ marginRight: "3px" }}
                />{" "}
              </span>{" "}
              Hotel 4 Nights
            </h5>
          </Col>

          <Col>
            <h6>Transportation</h6>
            <h5>
              <span>
                {" "}
                <FontAwesomeIcon
                  icon={faPlaneDeparture}
                  style={{ marginRight: "3px" }}
                />{" "}
              </span>{" "}
              Qatar Airways
            </h5>
          </Col>

          <Col>
            <h6>Eat</h6>
            <h5>
              <span>
                <FontAwesomeIcon
                  icon={faUtensils}
                  style={{ marginRight: "3px" }}
                />{" "}
              </span>{" "}
              Included as ltinerary
            </h5>
          </Col>

          <Col>
            <h6>Duration</h6>
            <h5>
              <span>
                {" "}
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ marginRight: "3px" }}
                />{" "}
              </span>{" "}
              6 Day 4 Night
            </h5>
          </Col>

          <Col>
            <h6>Date Trip</h6>
            <h5>
              <span>
                {" "}
                <FontAwesomeIcon
                  icon={faCalendar}
                  style={{ marginRight: "3px" }}
                />{" "}
              </span>{" "}
              26 August 2020
            </h5>
          </Col>
        </Row>
      </div>
      <div className="mt-4">
        <h5>Description</h5>
        <p
          className="mt-3"
          style={{
            textAlign: "justify",
            fontFamily: "Avenir",
            fontSize: "14px",
            color: "#a8a8a8",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, officia
          nam commodi omnis amet provident earum. Nisi nemo dolor perferendis
          impedit, unde architecto cupiditate natus! Recusandae impedit dolores
          perspiciatis quos sit maxime quam tenetur sunt. Quos rerum illum id
          illo, molestiae ab aperiam modi. Id esse sapiente sint officia
          architecto asperiores quo eligendi veniam iusto error! Consequatur,
          quia beatae fugit eveniet placeat quidem esse unde deleniti iusto
          minus ex vero iure voluptatibus rem adipisci animi et obcaecati
          cupiditate quaerat ipsam.
        </p>
      </div>

      <div className="mt-4 d-flex justify-content-between">
        <h4 style={{ color: "#FFAF00" }}>
          IDR. {price.toLocaleString("en-ID")}{" "}
          <span style={{ color: "#000" }}>/ PERSON</span>
        </h4>
        <h4>
          <span
            className="me-3"
            style={{
              fontWeight: "400",
              color: "#FFAF00",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={decreaseQuantity}
          >
            <FontAwesomeIcon icon={faSquareMinus} />
          </span>{" "}
          {quantity}{" "}
          <span
            className="ms-3"
            style={{
              fontWeight: "400",
              color: "#FFAF00",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={increaseQuantity}
          >
            <FontAwesomeIcon icon={faSquarePlus} />
          </span>
        </h4>
      </div>

      <hr className="HorizontalLine"></hr>

      <div className="d-flex justify-content-between mt-2">
        <h4>Total :</h4>
        <h4 style={{ color: "#FFAF00" }}>
          IDR. {total.toLocaleString("en-ID")}
        </h4>
      </div>

      <hr className="HorizontalLine"></hr>
      <div>
        <button className="bookButton" onClick={handleBookNow}>
          BOOK NOW
        </button>
      </div>

      {/* modal */}
      <Modal
        show={showModal}
        onHide={closeModal}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Body>
          <Carousel
            activeIndex={carouselIndex}
            onSelect={handleCarouselSelect}
            slide={false}
          >
            <Carousel.Item>
              <img
                src={selectedTour.image}
                alt=""
                style={{ width: "100%", objectFit: "contain" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Sydney2} alt="" style={{ width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Sydney3} alt="" style={{ width: "100%" }} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Sydney4} alt="" style={{ width: "100%" }} />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Detail;
