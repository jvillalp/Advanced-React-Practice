import React from "react";
import axios from "axios";
import "./App.css";

import Nav from "./components/Nav";
import PlayerCard from "./components/PlayerCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/footballers")
      .then(res => {
        console.log("footballers", res.data);
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log("this is an error", err));
  }
  render() {
    return (
      <div className="container">
        <Nav />
        {this.state.players.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    );
  }
}
export default App;
