import React, { Component } from "react";
import { demo } from "../Components/demo_80";
import SearchBox from "../Components/SearchBox_80";
import CardList from "../Components/CardList_80";


class App extends Component {
  constructor() {
    super();
    this.state = {
      demo: demo,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredDemos = this.state.demo.filter((demo) => {
      return demo.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>ClassDemo</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList demo={filteredDemos} />;
      </div>
    );
  }
}

export default App;
