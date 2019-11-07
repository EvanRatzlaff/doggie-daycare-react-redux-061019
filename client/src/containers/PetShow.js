import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getPet} from '../actions';

export class PetShow extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getPet(id);
    }

  render() {
    return (
      <div>
        <h3>{ this.props.pet.name }</h3>
        <p>Breed: { this.props.pet.breed }</p>
        <p>Section #: { this.props.pet.section_number }</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        pet: state.petsReducer.pet
    }
}

export default connect(mapStateToProps, {getPet})(PetShow);