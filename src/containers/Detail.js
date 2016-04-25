import React, { Component } from 'react'
import { GetPokemon } from 'actions/listAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/lib/raised-button';

class Detail extends Component {
  componentWillMount(){
    var id = this.props.params.id
    this.props.GetPokemon(id);
  }

  render() {
    return (
      <div>
        <section>
          <RaisedButton label={this.props.pokemon.name} />
        </section>
      </div>
    )
  }
}

export default connect(
  (state) => ({pokemon: state.pokemons.selected}),
  (dispatch) => bindActionCreators({ GetPokemon }, dispatch)
)(Detail);
