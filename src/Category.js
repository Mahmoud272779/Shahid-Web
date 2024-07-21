import React from 'react'
import {Container, Nav, Navbar, Row,Form,Button, Col} from 'react-bootstrap'
import { Roll } from 'react-reveal'
const Category = ({func ,allCats}) => {
  return (
   
    <Row>
     <Roll>
      <Col  className='d-flex justify-content-center m-4'>


{

allCats.length>0 ?(allCats.map((c)=>{
  return( <button onClick={()=>func(c)} className='btn mx-2' style={{border: '1px solid #b125'}}>{c}</button>)
})):<h1>لا يوجد وجبات</h1>

}

      </Col>
      </Roll>
    </Row>
  )
}

export default Category
