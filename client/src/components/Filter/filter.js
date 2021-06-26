import React from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './filter.css'


function Filter() {
    return (
        <div>
            <br/>
    <Card >
    <Card.Body>
      <Form className="filterForm">
      <Button className= "filterButton" variant="secondary" size="sm">
      Filter Recipe
    </Button>
    <br/>
    <br/>
  <Form.Group >
    <Form.Control type="text" placeholder="Main Ingredient:" />
   </Form.Group>
  <br/>
  <Form.Group>
    <Form.Control type="text" placeholder="Cuisine Type:" />
    </Form.Group>
  <br/>
  <Form.Group>
  <Form.Control type="text" placeholder="Meal Type:" />
    </Form.Group>
    </Form>
    <Button className= "filterButton1" variant="secondary" size="sm">
      Clear
    </Button>
  </Card.Body>
</Card>
</div>
)
}

export default Filter

