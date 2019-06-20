import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from "../actions";
// import actions

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    console.log(this.props.fetching);
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  };
};

export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
