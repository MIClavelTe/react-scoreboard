import React, {Component} from 'react';

class AddPlayerForm extends Component {
    state = {
        value: ""
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render () {
        return (
            <form>
                <input type="text" placeholder="Enter a player's name" onChange={this.handleChange} value={this.state.value}/>
                <input type="submit" value="Add Player"/>
            </form>
        )
    }
}

export default AddPlayerForm;