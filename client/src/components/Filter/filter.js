import React from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import './filter.css'


function Filter(props) {
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
  </Card.Body>
</Card>
</div>
)
}

export default Filter

