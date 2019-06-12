import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component {
    static propTypes = {
        addPlayer: PropTypes.func
    }

    playerInput = React.createRef()

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPlayer(this.playerInput.current.value)
        event.currentTarget.reset()
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    ref={this.playerInput}
                    placeholder="Enter a player's name" 
                />
                <input type="submit" value="Add Player"/>
            </form>
        )
    }
}

export default AddPlayerForm;