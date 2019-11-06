import React from 'react';
import { Link } from 'react-router-dom';

const PetItem = ({ pet }) => {
    return (
        <li className='collection-item'>
            Dog Name: { pet.name }<br/>
            Breed: { pet.breed } <br/>
            Section #: { pet.section_number } <br/>
            <Link to={`/api/pets/${pet.id}`}>View Dog</Link>
        
        </li>
    );
}

export default PetItem;