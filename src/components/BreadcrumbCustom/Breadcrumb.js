import React from "react";
import { Breadcrumb } from "react-bootstrap";
import routes from "~/config/router";
import "./styles.scss";

export default function BreadcrumbCustom({ items }) {
  return (
    <Breadcrumb className="bg-primary-subtle p-2 mt-3 rounded-1">
      <Breadcrumb.Item href={routes.home}>Home</Breadcrumb.Item>
      {items.map((i, index) => (
        <Breadcrumb.Item href={i.href} active={i.active} key={index}>
          {i.name}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
