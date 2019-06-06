import React, {Component} from 'react';

import Header from './Header'
import Player from './Player'

class App extends React.Component {
  state = {
    players: [
      {
        name: "Puppies",
        score: 0,
        id: 1
      },
      {
        name: "Kittens",
        score: 0,
        id: 2
      },
      {
        name: "Pandas",
        score: 0,
        id: 3
      },
      {
        name: "Koalas",
        score: 0,
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
  
        {/* Players list */}
        {this.state.players.map( player =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    );
  }
}

export default App;
