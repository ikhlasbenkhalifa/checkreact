import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Prouct from '../product';
import Name from './Name';
import Description from './Description';
import Price from './Price';
import Photo from './Photo';
import Card from 'react-bootstrap/Card'

export default function Cards() {
  return (
    <div>
      {
Prouct.map(
    (produit)=>(
        
<Card key={produit.id}>
<Card.Img src={produit.image}/>
  <Card.Body>
  <Card.Title>Name: {produit.name}</Card.Title>
    <Card.Title>Description: {produit.description}</Card.Title>
    <Card.Title>Price: $ {produit.price}</Card.Title>
    


  </Card.Body>

</Card>
    )
)
      }
    </div>
  )
}
