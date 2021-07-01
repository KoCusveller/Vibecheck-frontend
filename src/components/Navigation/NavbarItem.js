import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function NavbarItem(props) {
  return (
    <Nav.Item>
      <Nav.Link
        as={NavLink}
        to={props.path}
        style={{ color: "rgb(201, 194, 206)", fontWeight: "bold" }}
      >
        {props.linkText}
      </Nav.Link>
    </Nav.Item>
  );
}
