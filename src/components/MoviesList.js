import React, { useEffect } from "react";
import { Row, Card, Col } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../redux/actions/actionMovie";
//import PaginationComponent from './Pagination'

const MoviesList = ({  getPage, pageCount,isSearchParam ,word}) => {
  const movies=useSelector(s=>s.movies)
const disp=useDispatch();
useEffect(()=>{
  disp(getAll())
},[])
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (movies.map((mov) => {
        return (<CardMovie key={mov.id} mov={mov}  />)
      })) : <h2 className="text-center p-5">لا يوجد افلام...</h2>}

      
      <PaginationComponent getPage={getPage} pageCount={pageCount} word={word}  />
    </Row>
  );
};

export default MoviesList;
