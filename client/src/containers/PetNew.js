import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPet } from '../actions';

export class PetNew extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            breed: '',
            section_number: ''
        }
    }

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPet(this.state)
        this.props.history.push('/pets');
        
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Create Dog!</h2>
                <div className="input-field">
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                    <label htmlFor="name">Dog Name</label>
                </div>
                <div className="input-field">
                    <input type="text" name="breed" id="breed" value={this.state.breed} onChange={this.handleChange}  />
                    <label htmlFor="name">Breed</label>
                </div>
                <div className="input-field">
                    <input type="text" name="section_number" id="section_number" value={this.state.section_number} onChange={this.handleChange} />
                    <label htmlFor="name">Section #</label>
                </div>
                
                <input type="submit" value="Create Dog" className="btn indigo ligthen-2" />
            </form>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        addPet: pet => dispatch(addPet(pet))
    }
}

export default connect(null, mapDispatchToProps)(PetNew);