import React from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import images from "~/assets/Images";
import "./styles.scss";

export default function Banner() {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${images.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "450px",
      }}
    >
      <Row className="d-flex justify-content-center align-items-center p-4">
        <h1 className="text-white text-center p-4">
          Tìm kiếm căn hộ yêu thích ngay hôm nay!
        </h1>
        <Form>
          <Row className="justify-content-md-center p-4">
            <Col xs lg={2} className="text-center ">
              <Dropdown>
                <Dropdown.Toggle
                  className="bg-white w-100"
                  variant="bg-white"
                  id="dropdown-basic"
                >
                  Chọn loại hình
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Căn hộ</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Nhà phố</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs lg={2} className="text-center ">
              <Dropdown>
                <Dropdown.Toggle
                  className="bg-white w-100"
                  variant="bg-white"
                  id="dropdown-basic"
                >
                  Chọn tỉnh thành
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Căn hộ</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Nhà phố</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs lg={2} className="text-center ">
              <Dropdown>
                <Dropdown.Toggle
                  className="bg-white w-100"
                  variant="bg-white"
                  id="dropdown-basic"
                >
                  Chọn Quận / Huyện
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Căn hộ</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Nhà phố</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Col className="text-center p-4">
            <Button
              variant="success"
              size="lg"
              className="border border-white radius-5"
            >
              Tìm kiếm
            </Button>
          </Col>
        </Form>
      </Row>
    </div>
  );
}
