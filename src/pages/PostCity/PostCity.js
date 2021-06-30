import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Col, Button, Container, InputGroup } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import { createCity } from "../../store/cities/actions";

// IMPORT STYLE
import "./PostCity.css";

export default function PostCity() {
	const dispatch = useDispatch();
	const history = useHistory();

	const [name, set_name] = useState("");
	const [imgUrl, set_imgUrl] = useState("");
	const [vidUrl, set_vidUrl] = useState("");
	const [songUrl, set_songUrl] = useState("");

	const [validated, setValidated] = useState(false);

	const submitForm = (event) => {
		const form = event.currentTarget;

		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();

			console.log("false");
		} else {
			console.log("true");

			dispatch(createCity(name, imgUrl, vidUrl, songUrl));

			set_name("");
			set_imgUrl("");
			set_vidUrl("");
			set_songUrl("");

			history.push("/");
		}
		setValidated(true);
	};

	return (
		<div className="fullHeight">
			<Container as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
				<Form noValidate validated={validated} onSubmit={submitForm}>
					<h1 className="mt-5 mb-5">Post a new Vibecheck</h1>

					<Form.Group controlId="formBasicName">
						<Form.Label>City</Form.Label>
						<InputGroup>
							<Form.Control
								value={name}
								onChange={(event) =>
									set_name(event.target.value)
								}
								onFocus={(event) =>
									(event.target.placeholder = "")
								}
								onBlur={(event) =>
									(event.target.placeholder =
										"Please enter City Name")
								}
								type="text"
								placeholder="Please enter City Name"
								required
							/>
							<Form.Control.Feedback
								type="invalid"
								as={Col}
								md={{ span: 4, offset: 9 }}
							>
								Please choose a City.
							</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>

					<Form.Group controlId="formBasicImageUrl">
						<Form.Label>Image</Form.Label>
						<InputGroup>
							<Form.Control
								value={imgUrl}
								onChange={(event) =>
									set_imgUrl(event.target.value)
								}
								onFocus={(event) =>
									(event.target.placeholder = "")
								}
								onBlur={(event) =>
									(event.target.placeholder =
										"Please enter Image Url")
								}
								type="text"
								placeholder="Please enter Image Url"
								required
							/>
							{imgUrl ? (
								<Col
									className="mt-4"
									md={{ span: 8, offset: 2 }}
								>
									<Image
										src={imgUrl}
										alt="preview"
										thumbnail
									/>
								</Col>
							) : null}
							<Form.Control.Feedback
								type="invalid"
								as={Col}
								md={{ span: 4, offset: 9 }}
							>
								Please provide an Image
							</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>

					<Form.Group controlId="formBasicVidUrl">
						<Form.Label>Video</Form.Label>
						<InputGroup>
							<Form.Control
								value={vidUrl}
								onChange={(event) =>
									set_vidUrl(event.target.value)
								}
								onFocus={(event) =>
									(event.target.placeholder = "")
								}
								onBlur={(event) =>
									(event.target.placeholder =
										"Please enter Video Url")
								}
								type="text"
								placeholder="Please enter Video Url"
								required
							/>
							<Form.Control.Feedback
								type="invalid"
								as={Col}
								md={{ span: 4, offset: 9 }}
							>
								Please provide a Video
							</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>

					<Form.Group controlId="formBasicSongUrl">
						<Form.Label>Song</Form.Label>
						<InputGroup>
							<Form.Control
								value={songUrl}
								onChange={(event) =>
									set_songUrl(event.target.value)
								}
								onFocus={(event) =>
									(event.target.placeholder = "")
								}
								onBlur={(event) =>
									(event.target.placeholder =
										"Please enter Song Url")
								}
								type="text"
								placeholder="Please enter Song Url"
								required
							/>
							<Form.Control.Feedback
								type="invalid"
								as={Col}
								md={{ span: 4, offset: 9 }}
							>
								Please provide a Song
							</Form.Control.Feedback>
						</InputGroup>
					</Form.Group>

					<Form.Group className="mt-5">
						<Button variant="primary" type="submit">
							I'm ready to vibe
						</Button>
					</Form.Group>
				</Form>
			</Container>
		</div>
	);
}
