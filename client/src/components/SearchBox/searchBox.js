import React from "react";
import Form from 'react-bootstrap/Form';

import './searchBox.css'

function SearchBox(){
    return(
        <div className="searchbox">

            <Form>
            <Form.Control type="text" placeholder="Normal text" />
            <Form.Text className="text-muted">
            Search
            </Form.Text>
            </Form>

        </div>
    )
}

export default SearchBox;