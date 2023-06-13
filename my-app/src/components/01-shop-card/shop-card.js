import React from "react";
import "./shop-card.scss";
import shopping from "./shopping.json";
import { Card, Col, Row } from "react-bootstrap";
import {AiFillStar,AiOutlineStar}  from "react-icons/ai"

const ShopCard = () => {
  return (
    <Row className="m-2 gap-5 justify-content-center">
      {shopping.map((shop) => (
        <Col className="col" key={shop.id} xs={6} md={4} lg={3} xl={2}>
          <Card className="h-100" style={{ minWidth: "250px", }}>
            <Card.Img style={{objectFit:"cover",height:"250px"}} variant="top" src={require(`./shop-card/${shop.image}`)} />
            <Card.Body>
                {
                    [...Array(5)].map((item,index)=>
              <span key={index}>
                   { index<shop.rate ? <AiFillStar style={{color:"#919142"}}/>:<AiOutlineStar style={{color:"#919142"}}/>
 } </span> )
                }
              <Card.Title className="mt-1">{shop.title}</Card.Title>
              <Card.Text  style={{backgroundColor:"pink",borderRadius:"5px"}}>
            {shop.discount?<span>
                 <span style={{textDecoration:"line-through"}}>{shop.price}</span>
                 <span style={{padding:"7px"}}>${(shop.price*((100-shop.discount)/100)).toFixed(2)}</span>
            </span>  :
            <span>${shop.price}</span>

            }
              </Card.Text>
              
              
                {
                    (shop.discount||shop.discount==="0") && <span className="discount">-{shop.discount}%</span>
                }
            
        
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ShopCard;

