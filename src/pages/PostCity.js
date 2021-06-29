import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router";
import Image from "react-bootstrap/Image";

import { createCity } from "../store/cities/actions";

export default function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, set_name] = useState("");
  const [imgUrl, set_imgUrl] = useState("");
  const [vidUrl, set_vidUrl] = useState("");
  const [songUrl, set_songUrl] = useState("");

  function submitForm(event) {
    event.preventDefault();

    dispatch(createCity(name, imgUrl, vidUrl, songUrl));

    set_name("");
    set_imgUrl("");
    set_vidUrl("");
    set_songUrl("");

    history.push("/");
  }

  return (
    <div>
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <h1 className="mt-5 mb-5">Post a new Vibecheck</h1>
          <Form.Group controlId="formBasicName">
            <Form.Label>City Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(event) => set_name(event.target.value)}
              type="text"
              placeholder="Enter City"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicImgUrl">
            <Form.Label>City Image Url</Form.Label>
            <Form.Control
              value={imgUrl}
              onChange={(event) => set_imgUrl(event.target.value)}
              type="text"
              placeholder="Enter Url"
              required
            />
            {imgUrl ? (
              <Col className="mt-4" md={{ span: 8, offset: 2 }}>
                <Image src={imgUrl} alt="preview" thumbnail />
              </Col>
            ) : null}
          </Form.Group>

          <Form.Group controlId="formBasicVidUrl">
            <Form.Label>Enter City Video Url</Form.Label>
            <Form.Control
              value={vidUrl}
              onChange={(event) => set_vidUrl(event.target.value)}
              type="text"
              placeholder="Enter Url"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicSongUrl">
            <Form.Label>Enter Song Url</Form.Label>
            <Form.Control
              value={songUrl}
              onChange={(event) => set_songUrl(event.target.value)}
              type="text"
              placeholder="Enter Url"
              required
            />
          </Form.Group>
          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              I'm ready to vibe
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
