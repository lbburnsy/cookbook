import React from "react";
import { Button } from "react-bootstrap";


function ShowMoreButton({more}) {
    return(
        <div>
            <div className="mb-2 text-center">
                <Button variant="primary" size="lg" href={more}>
                    More
                </Button>{' '}
            </div>
        </div>
    )
}

export default ShowMoreButton;