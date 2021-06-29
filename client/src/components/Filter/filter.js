import React from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './filter.css'


function Filter(props) {
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
    <Form.Control name="ingredients" type="text" placeholder="Main Ingredient:" onChange={props.onChange}/>
   </Form.Group>
  <br/>
  <Form.Group>
    <Form.Control name="cuisine" type="text" placeholder="Cuisine Type:" onChange={props.onChange}/>
    </Form.Group>
  <br/>
  <Form.Group>
  <Form.Control name="category" type="text" placeholder="Meal Type:" onChange={props.onChange}/>
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

