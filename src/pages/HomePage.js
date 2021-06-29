import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { selectToken } from "../store/user/selectors";
import { fetchCities } from "../store/cities/actions";
import { selectCities } from "../store/cities/selectors";
import CityMiniature from "../components/CityMiniature";
import { useSelector } from "react-redux";

// const cityVibes = fetchCities

export default function HomePage() {
  const userToken = useSelector(selectToken);
  const cities = useSelector(selectCities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>Vibecheck</h1>
      </div>

      <div>
        {cities.map((city) => (
          <CityMiniature key={city.id} name={city.name} url={city.imgUrl} />
        ))}
      </div>
      <div>
        {userToken && (
          <Link to="/PostCity">
            <Button variant="light">
              <h2> Post a new City Vibe!</h2>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
