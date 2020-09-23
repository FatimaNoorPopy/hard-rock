import React from 'react';
import { Card, Button} from 'react-bootstrap';

const RoomSelect = (props) => {
    console.log(props)
    const { title, description, imgUrl, bed, capacity, bedType, price } = props.bed;
    return (
        <div>
                 <Card.Img variant="top" src={imgUrl} />
                       <Card.Body>
                        <Card.Title>{title} </Card.Title>
                        <Card.Text className="text-primary">
                            {description}
                            <p>{bed} cofortable bed
                              {capacity} Person Capacity {bedType} BedType
                             </p>
                            <p >{price}Taka Every Night</p>
                        </Card.Text>
                        <Button variant="warning">Book Now</Button>
                    </Card.Body>
        </div>
    );
};

export default RoomSelect;