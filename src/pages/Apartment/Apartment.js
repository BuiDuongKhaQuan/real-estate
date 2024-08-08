import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreadcrumbCustom from "~/components/BreadcrumbCustom/Breadcrumb";
import Card from "~/components/Card";
import Carousel from "~/components/Carousel";
import { apartments } from "~/config/data";
import routes from "~/config/router";

export default function Apartment() {
  const [saleApartments, setApartmentSale] = useState([]);

  useEffect(() => {
    const saleApartments = apartments.filter(
      (apartment) => apartment.type === "sale"
    );
    setApartmentSale(saleApartments);
  }, []);

  return (
    <Container>
      <BreadcrumbCustom
        items={[{ name: "Căn hộ bán", active: true, href: routes.apartment }]}
      />
      <Row className="d-flex justify-content-center align-items-center pt-5 mb-5">
        <p className="text-dark fw-light text-end">4 kết quả được tìm thấy</p>
        <Col lg={11}>
          <Carousel slidesToShow={4}>
            {saleApartments.map((apartment, index) => (
              <Card small key={index} data={apartment} />
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
