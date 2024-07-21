import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Fade, Roll, Zoom } from 'react-reveal'

const CardItem = ({itemsData}) => {
  return (
    <Row>
   
<Col sm='12' className='mb-3'>
<Roll>
<></>
       {   itemsData.length!=0 ?(itemsData.map((item) => {
            return (
              <Card className='d-flex flex-row m-3'>
            <Card.Img className='img-item' variant="top" src={item.imgUrl} />
            <Card.Body>
              <Card.Title className='justify-content-between d-flex'>
              <div className='item-title'>
              {item.title} 
              </div>
              <p className='item-price'>{item.price} </p>
              </Card.Title>
              <Card.Text>
              <div className='item-description'>
               {item.description}
              </div>
              </Card.Text>
            </Card.Body>
          </Card>
          )
       
          })):<h1>لا يوجد وجبات</h1>
       }
       </Roll>
          </Col>
         
  
    </Row>
  )
}

export default CardItem
