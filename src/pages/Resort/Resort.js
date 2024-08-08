import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreadcrumbCustom from "~/components/BreadcrumbCustom/Breadcrumb";
import Card from "~/components/Card";
import Carousel from "~/components/Carousel";
import { apartments } from "~/config/data";
import routes from "~/config/router";

export default function Resort() {
  const [resortApartments, setApartmentResort] = useState([]);

  useEffect(() => {
    const resortApartments = apartments.filter(
      (apartment) => apartment.type === "resort"
    );
    setApartmentResort(resortApartments);
  }, []);

  return (
    <Container>
      <BreadcrumbCustom
        items={[
          { name: "Căn hộ nghỉ dưỡng", active: true, href: routes.resort },
        ]}
      />
      <Row className="d-flex justify-content-center align-items-center pt-5 mb-5">
        <p className="text-dark fw-light text-end">4 kết quả được tìm thấy</p>
        <Col lg={11}>
          <Carousel slidesToShow={4}>
            {resortApartments.map((apartment, index) => (
              <Card small key={index} data={apartment} />
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
