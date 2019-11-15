import React from "react";
import styled from "styled-components";
// import { Card, CardText, CardTitle, CardBody, } from "reactstrap";

const Card = styled.div`
  background-color: #97ce4c;
  width: 100%;
  height: 150px;
  border-radius: 15px;
  // padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px 0;
  display:flex;
  flex-direction:column;
  justify-content:center;
  color: #02afc5;
  
`;
const Title = styled.div`
  font-size: 25px;
  border-bottom: 1px solid lightgrey;
  font-weight: 500;
`;

const CardContent = styled.div`
  display: flex;
  text-align: left;
`;

const CardImage = styled.img`
    width: 100px;
    height: 100px;
    padding: 5px;
`;


const CharacterCard = props => {
  return ( 

      <Card>
            <Title>{props.name}</Title>
      <CardContent>
            <CardImage src={props.image} />
            <div>
              <div>Status:{props.status}</div>
              <div>Species:{props.species}</div>
              <div>Type:{props.type}</div>
              </div>
      </CardContent>
      </Card>

   
  
  )
}

export default CharacterCard;
