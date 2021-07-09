import React from "react";
import { Button } from "react-bootstrap";
import {  Switch, Route, useHistory } from "react-router-dom";

function ShowMoreButton({more, title}) {
    const history = useHistory();
    return(
        <div>
            <div className="mb-2 text-center">
                <Button variant="primary" size="lg" onClick={(e) => history.push('/recipes')}>
                    Show More { title }
                </Button>{' '}
            </div>
        </div>
    )
}

export default ShowMoreButton;