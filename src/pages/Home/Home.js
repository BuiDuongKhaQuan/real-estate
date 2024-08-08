import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./styles.scss";
import Card from "~/components/Card";
import Carousel from "~/components/Carousel";
import Input from "~/components/Input";
import { apartments, news } from "~/config/data";

export default function Home() {
  const [apartmentSale, setApartmentSale] = useState([]);
  const [apartmentResort, setApartmentResort] = useState([]);
  const [apartmentLease, setApartmentLease] = useState([]);

  useEffect(() => {
    const saleApartments = apartments.filter(
      (apartment) => apartment.type === "sale"
    );
    const resortApartments = apartments.filter(
      (apartment) => apartment.type === "resort"
    );
    const leaseApartments = apartments.filter(
      (apartment) => apartment.type === "lease"
    );

    setApartmentSale(saleApartments);
    setApartmentResort(resortApartments);
    setApartmentLease(leaseApartments);
  }, []);

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center pt-5">
        <h1 className="fs-10 fw-light text-center">Căn hộ bán</h1>
        <p className="text-muted fw-light text-center">
          Đây là mô tả của căn hộ bán
        </p>
        <Col lg={11}>
          <Carousel slidesToShow={3}>
            {apartmentSale.map((apartment, index) => (
              <Card key={index} data={apartment} />
            ))}
          </Carousel>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center align-items-center pt-5">
        <h1 className="fs-10 fw-light text-center">Bất động sản nghỉ dưỡng</h1>
        <p className="text-muted fw-light text-center">
          Đây là mô tả của căn hộ bán
        </p>
        <Col lg={11}>
          <Carousel slidesToShow={3}>
            {apartmentResort.map((apartment, index) => (
              <Card key={index} data={apartment} />
            ))}
          </Carousel>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center align-items-center pt-5">
        <h1 className="fs-10 fw-light text-center">Căn hộ cho thuê</h1>
        <p className="text-muted fw-light text-center">
          Hàng ngàn căn hộ hấp dẫn đang chờ đón bạn.
        </p>
        <Col lg={11}>
          <Carousel slidesToShow={4}>
            {apartmentLease.map((apartment, index) => (
              <Card small footer key={index} data={apartment} />
            ))}
          </Carousel>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center align-items-center pt-5 mb-5">
        <h1 className="fs-10 fw-light text-center">Tin tức</h1>
        <p className="text-muted fw-light text-center">Mô tả tin tức</p>
        <Col lg={11}>
          <Carousel slidesToShow={3}>
            {news.map((news, index) => (
              <Card key={index} data={news} icon={false} />
            ))}
          </Carousel>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center align-items-center pt-5 mb-5">
        <Col lg={5}>
          <Form className="border border-secondary rounded-1 p-4">
            <h3 className="text-success text-center">
              Đăng ký thuê, mua căn hộ
            </h3>
            <Input label={"Họ tên"} />
            <Input label={"Số điện thoại"} />
            <Input label={"Nhu cầu của bạn"} />
            <Input label={"Số phòng ngủ"} />
            <Button
              variant="success"
              size="lg"
              className="border border-white w-100 mt-4"
            >
              Gửi
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
