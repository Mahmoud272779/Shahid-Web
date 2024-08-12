import React, { useEffect, useState } from "react";
import { Row, Card, Col } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../redux/actions/actionMovie";
//import PaginationComponent from './Pagination'

const MoviesList = ({  getPage, pageCount,isSearchParam ,word}) => {
  
  const dataMovies=useSelector(s=>s.movies)
  const SP=useSelector(s=>s.SP)
  const sw=useSelector(s=>s.searchWord)
const disp=useDispatch();
console.log(SP)
useEffect(()=>{
  
  if(!SP){
  disp(getAll(sw))
  setMovies(dataMovies)
  }
},[])
const [movies,setMovies]=useState([])
useEffect(()=>{
  setMovies(dataMovies)
},[dataMovies])
console.log(dataMovies)
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (movies.map((mov) => {
        return (<CardMovie key={mov.id} mov={mov}  />)
      })) : <h2 className="text-center p-5">لا يوجد افلام...</h2>}

      
      <PaginationComponent />
    </Row>
  );
};

export default MoviesList;
