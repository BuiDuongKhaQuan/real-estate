import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import images from "~/assets/Images";
import "./styles.scss";
import { Link } from "react-router-dom";
import routes from "~/config/router";

export default function Header() {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center p-3">
        <Col xs={6} md={4}>
          <Image src={images.logo} rounded width="150" className="logo-image" />
        </Col>
        <Col
          xs={12}
          md={8}
          className="d-flex justify-content-center align-items-center"
        >
          <Link className="m-3 text-uppercase fw-bold" to={routes.home}>
            Trang chủ
          </Link>
          <Link className="m-3 text-uppercase fw-bold" to={routes.apartment}>
            Căn hộ bán
          </Link>
          <Link className="m-3 text-uppercase fw-bold" to={routes.resort}>
            Nghỉ dưỡng
          </Link>
          <Link className="m-3 text-uppercase fw-bold" to={routes.transfer}>
            Chuyển nhượng
          </Link>
          <Link className="m-3 text-uppercase fw-bold" to={routes.transfer}>
            Cho thuê
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
