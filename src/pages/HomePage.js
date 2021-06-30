// IMPORT REACT LIBRARIES AND COMPONENTS
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CityMiniature from "../components/CityMiniature/CityMiniature";

// IMPORT REDUX
import { useDispatch, useSelector } from "react-redux";

// IMPORT ACTIONS AND SELECTORS
import { fetchCities, fetchMoreCities } from "../store/cities/actions";
import { selectToken } from "../store/user/selectors";
import { selectCities } from "../store/cities/selectors";

// IMPORT REACT BOOTSTRAP
import { Button, Container, Row, Col } from "react-bootstrap";

export default function HomePage() {
  const userToken = useSelector(selectToken);
  const cities = useSelector(selectCities);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cities.length) {
      dispatch(fetchCities());
    }
  }, [dispatch]);

  return (
    <div>
      <Container fluid>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "1600px",
            border: "0px",
          }}
        >
          {cities.map((city) => (
            <CityMiniature
              key={city.id}
              id={city.id}
              name={city.name}
              url={city.imgUrl}
            />
          ))}
        </div>
      </Container>

      <button
        onClick={() => dispatch(fetchMoreCities())}
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        More
      </button>

      <div>
        {userToken ? (
          <Link to="/PostCity">
            <Button variant="light">
              <h2> Post a new City Vibe!</h2>
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button variant="light">
              <h2>Post a new City Vibe!</h2>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
