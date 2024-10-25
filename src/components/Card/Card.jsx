import { useState, useEffect } from "react";

import "./Card.scss";
import LocationMarker from "../../assets/icon/LocationIcon.png";

export default function Card(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const coverImage = windowWidth > 430 ? props.coverImg : props.fullImg;

  return (
    <div className="card">
      <div
        className="card__inner"
        style={{
          backgroundImage: `url(${coverImage})`,
        }}
      >
        {windowWidth > 430 && (
          <img
            src={coverImage}
            className="card__inner_photo"
            alt={props.title}
          />
        )}
      </div>

      <div className="card__content">
        <div className="card__location">
          <img
            src={LocationMarker}
            className="card__location_icon"
            alt="Location Marker"
          />
          <span className="card__location_country">{props.location}</span>
          <a
            href={props.googleMapsUrl}
            className="card__location_link"
            target="_blank"
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="card__content_title">{props.title}</h1>
        <span className="card__content_date">{`${props.startDate} - ${props.endDate}`}</span>
        <p className="card__content_description">{props.description}</p>
      </div>
    </div>
  );
}
