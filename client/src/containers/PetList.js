import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import PetItem from '../components/PetItem';

import { getPets } from '../actions';

export class PetList extends Component {
    componentDidMount() {
        this.props.getPets();
    }

    render() {
        const pets = this.props.pets.map((pet, i) => <PetItem key={i} pet={pet} />)
        return (
            <div>
                <h2>Current Dogs</h2>
                <ul className="collection">
                    {pets}
                </ul>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        pets: state.petsReducer.pets
    }
}

export default connect(mapStateToProps, { getPets })(PetList);

