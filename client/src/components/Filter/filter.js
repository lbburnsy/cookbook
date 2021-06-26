import React from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import './filter.css'


function Filter() {
    return (
        <div>
            <br/>
    <Card >
    <Card.Body>
      <Form className="filterForm">
      <Form.Text className="text-muted">
     Filter Recipe
    </Form.Text>
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
  </Card.Body>
</Card>
</div>
)
}

export default Filter

