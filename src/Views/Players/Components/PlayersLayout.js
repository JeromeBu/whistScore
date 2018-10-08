import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Form from "../../../Components/Form/Components";
import { Wrapper, Title } from "./styled";

const addPlayerForm = [
  {
    id: "firstName",
    name: "firstName",
    label: "First Name",
    autoComplete: "fname",
    xs: 12,
    sm: 4,
    required: true,
  },
  // {
  //   id: "lastName",
  //   name: "lastName",
  //   label: "Last Name",
  //   autoComplete: "lname",
  //   xs: 12,
  //   sm: 4,
  //   required: true,
  // },
];

const PlayersLayout = ({ players, addPlayer, removePlayer }) => (
  <Wrapper>
    <Title>This is the setting players view</Title>
    <React.Fragment>
      {players.map(player => (
        <Chip
          key={player.number}
          avatar={<Avatar>{player.number}</Avatar>}
          label={`${player.firstName} ${player.lastName}`}
          onDelete={() => removePlayer(player.number)}
          color="primary"
        />
      ))}
    </React.Fragment>
    <Form inputs={addPlayerForm} submitFunc={addPlayer} />
  </Wrapper>
);

PlayersLayout.defaultProps = {
  players: [],
};

PlayersLayout.propTypes = {
  addPlayer: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
  ),
};

export default PlayersLayout;
