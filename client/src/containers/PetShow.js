import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getPet} from '../actions';

export class PetShow extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getPet(id);
    }

  render() {
    // const { name, breed, section_number } = this.state.pet;
    return (
      <div>
        <h3>{ this.props.currentPet.name }</h3>
        <p>Age: { this.props.currentPet.breed }</p>
        <p>Species: { this.props.currentPet.section_number }</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        currentPet: state.petsReducer.currentPet
    }
}

export default connect(mapStateToProps, {getPet})(PetShow);