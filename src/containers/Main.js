import React, { Component } from 'react'
import { ListPokemon } from 'actions/listAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Divider from 'material-ui/lib/divider';


class Main extends Component {
  constructor(props, context) {
     super(props, context)
     this.state = {
       pokemon: this.props.pokemons[0] || {name: 'Bulunamadı'}
     }
   }

  componentWillMount(){
    this.props.ListPokemon();
    this.searchItem = this.searchItem.bind(this);
  }

  searchItem(e){

    var nameArr = this.props.pokemons.map(function(item){
      return item.name
    })

    //var a = nameArr.filter(function(name){return name.match(/bul/);});
    var newObj = (this.props.pokemons.find(x=> x.name === e.target.value));
    if(newObj){
      this.setState({pokemon: newObj})
    }else{
      this.setState({pokemon: {name: 'Bulunamadı'}})
    }
  }

  render() {
    return (
      <div>
        <TextField hintText="Hint Text" ref="searchfield" onChange={this.searchItem} />
<br/>
      <div>Arama Sonucu Bulunan :</div>
        <br/>
        <b>{this.state.pokemon.name}</b>
          <br/>
          <br/>
        <br/>
        <Divider inset={false}/>
        <br/>
        <div cl>Tümü :</div>
        <section>
         {
           this.props.pokemons.map((item, i) => {
             return(
               <div>
                <Link to={"detail/"+(i+1)} key={i}>{item.name}</Link>
               </div>
             )
           })
        }
        </section>
      </div>
    )
  }
}

export default connect(
  (state) => ({pokemons: state.pokemons.all}),
  (dispatch) => bindActionCreators({ ListPokemon }, dispatch)
)(Main);
