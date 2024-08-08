import { Card, Col, Image, Row } from "react-bootstrap";
import { BsHouseFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import "./styles.scss";

export default function CardCustom({
  icon = true,
  small = false,
  footer = false,
  data,
}) {
  return (
    <Card
      style={{
        width: small ? "17rem" : "23rem",
        overflow: "hidden",
        margin: "10px",
      }}
    >
      <Card.Body>
        <Image src={data?.img} className="image-card" />
        <div className="p-3">
          <Card.Title className="text-success text-truncate">
            {data?.name}
          </Card.Title>
          {data?.title && (
            <Card.Subtitle className="mb-2 mt-3 text-dark text-spacing fs-10px fw-normal">
              {data?.title}
            </Card.Subtitle>
          )}
          {icon && (
            <Row xs="auto">
              <Col>
                <p className="m-0 mt-2 text-dark  fs-10px fw-normal">
                  <FaBuilding /> {data?.build}
                </p>
              </Col>
              <Col>
                <p className="m-0 mt-2 text-dark  fs-10px fw-normal">
                  <BsHouseFill /> {data?.house}
                </p>
              </Col>
            </Row>
          )}
        </div>
        {footer && (
          <div
            className="d-flex flex-column px-4 py-2 "
            style={{ backgroundColor: "rgba(0, 0, 0, .03)" }}
          >
            <p className="m-0">
              {data?.type === "lease" ? "Cho thuê" : "Chuyển nhượng"}
            </p>
            <p className="m-0 text-success">
              <span className="fw-bold">(đ)</span> {data?.price}
            </p>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
