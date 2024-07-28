import React from "react";
import { Col } from "react-bootstrap";
//import { Link } from 'react-router-dom'
const CardMovie = ({ mov,SP }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
     
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500${!SP ? mov.known_for[0].poster_path : mov.poster_path}`}  className="card__image" alt="hggu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {!SP?mov.known_for[0].title
                :mov.title}</p>
              <p>تاريخ الاصدار:{!SP?mov.known_for[0].release_date
                :mov.release_date}</p>
              <p>عدد المقيمين: {!SP?mov.known_for[0].vote_count
                :mov.vote_count}</p>
              <p>التقييم:{!SP?mov.known_for[0].vote_average
                :mov.vote_average} </p>
            </div>
          </div>
        </div>
     
    </Col >
  );
};

export default CardMovie;
