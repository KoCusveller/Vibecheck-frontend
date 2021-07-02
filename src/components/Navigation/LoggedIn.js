import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import NavbarItem from "./NavbarItem";
import { useHistory } from "react-router";

export default function LoggedIn() {
	const dispatch = useDispatch();
	const history = useHistory();
	const user = useSelector(selectUser);

	function logout() {
		dispatch(logOut());
		history.push("/");
	}

	return (
		<>
			<NavbarItem path="/PostCity" linkText="Post City Vibe" />
			<Nav.Item style={{ padding: ".5rem 1rem", fontWeight: "bold" }}>
				{user.name}
			</Nav.Item>
			<Button
				onClick={() => logout()}
				style={{ color: "rgb(201, 194, 206)", fontWeight: "bold" }}
			>
				Logout
			</Button>
		</>
	);
}
