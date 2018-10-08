import React from "react";
import PlayersLayout from "../Components/PlayersLayout";

export default class PlayersContainer extends React.Component {
  state = { players: [] };

  addPlayer = ({ firstName, lastName }) => {
    this.setState(({ players }) => ({
      players: [...players, { number: players.length + 1, firstName, lastName }],
    }));
  };

  removePlayer = number => {
    this.setState(({ players }) => {
      const index = players.findIndex(element => element.number === number);
      players.splice(index + 1, 1);
      const newPlayers = players.map((player, i) => ({ ...player, number: i + 1 }));
      return { players: newPlayers };
    });
  };

  render() {
    const { players } = this.state;
    return (
      <PlayersLayout
        players={players}
        addPlayer={this.addPlayer}
        removePlayer={this.removePlayer}
      />
    );
  }
}
