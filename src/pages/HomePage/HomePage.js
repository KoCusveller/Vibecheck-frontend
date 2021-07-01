// IMPORT REACT LIBRARIES AND COMPONENTS
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CityMiniature from "../../components/CityMiniature/CityMiniature";

// IMPORT REDUX
import { useDispatch, useSelector } from "react-redux";

// IMPORT ACTIONS AND SELECTORS
import { fetchCities, fetchMoreCities } from "../../store/cities/actions";
import { selectToken } from "../../store/user/selectors";
import { selectCities } from "../../store/cities/selectors";

// IMPORT REACT BOOTSTRAP
import { Container } from "react-bootstrap";

// IMPORT STYLESHEET

import "./HomePage.css";

import DownChevron from "./DownChevron-Sm.png";

export default function HomePage() {
  const userToken = useSelector(selectToken);
  const cities = useSelector(selectCities);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cities.length) {
      dispatch(fetchCities());
    }
  }, [dispatch, cities.length]);

  return (
    <div>
      <Container fluid className="city-container">
        <div className="cityMiniature">
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
        className="loadMoreButton"
        onClick={() => dispatch(fetchMoreCities())}
      >
        <img src={DownChevron} className="loadMoreImage" alt="loadmoreicon" />
      </button>

			<div className="postCityDiv">
				{userToken ? (
					<Link to="/PostCity">
						<button className="postCityButton">
							<h2 className="postCityButtonLink">
								Post a new City Vibe
							</h2>
						</button>
					</Link>
				) : (
					<Link to="/login">
						<button className="postCityButton">
							<h2 className="postCityButtonLink">
								Post a new City Vibe
							</h2>
						</button>
					</Link>
				)}
			</div>
		</div>
	);
}
