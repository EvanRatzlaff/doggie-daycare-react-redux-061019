import React from 'react';
import Card from './Card';
import CardContent from './CardContent';
import CardTitle from './CardTitle';
import { Link } from 'react-router-dom';

const PetItem = ({ pet }) => {
    return (
        <Card>
            <CardContent>
                <h3>Name: {pet.name}</h3>
                <CardTitle><Link to={`/pets/${pet.id}`}>View Dog</Link></CardTitle>

            </CardContent>
        </Card>
        // <li className='collection-item'>
        //     Name: { pet.name }<br/>
        //     Breed: { pet.breed } <br/>
        //     Section #: { pet.section_number } <br/>
        //     <Link to={`/pets/${pet.id}`}>View Dog</Link>
        
        // </li>
    );
}

export default PetItem;