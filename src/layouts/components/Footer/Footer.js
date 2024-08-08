import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="bg-light p-4">
      <Container>
        <Row className="justify-content-center align-items-center flex-column">
          <Col className="text-center m-1 fs-3 fw-bold">
            CÔNG TY BẤT ĐỘNG SẢN QUÂN BÙI
          </Col>
          <Col className="text-center m-1">
            Địa chỉ: Số 123 Đường Phan Chu Trinh, Quận Thủ Đức, TP.HCM
          </Col>
          <Col className="text-center m-1">Điện thoại: 0328216789</Col>
          <Col className="text-center m-1">
            Email: buiduongkhaquan@gmail.com
          </Col>
        </Row>
      </Container>
    </div>
  );
}
