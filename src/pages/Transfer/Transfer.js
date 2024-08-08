import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreadcrumbCustom from "~/components/BreadcrumbCustom/Breadcrumb";
import Card from "~/components/Card";
import Carousel from "~/components/Carousel";
import { apartments } from "~/config/data";
import routes from "~/config/router";

export default function Transfer() {
  const [leaseApartments, setApartmentLease] = useState([]);

  useEffect(() => {
    const leaseApartments = apartments.filter(
      (apartment) => apartment.type === "lease"
    );
    setApartmentLease(leaseApartments);
  }, []);

  return (
    <Container>
      <BreadcrumbCustom
        items={[
          { name: "Căn hộ chuyển nhượng", active: true, href: routes.transfer },
        ]}
      />
      <Row className="d-flex justify-content-center align-items-center pt-5 mb-5">
        <p className="text-dark fw-light text-end">4 kết quả được tìm thấy</p>
        <Col lg={11}>
          <Carousel slidesToShow={4}>
            {leaseApartments.map((apartment, index) => (
              <Card small key={index} data={apartment} footer />
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
