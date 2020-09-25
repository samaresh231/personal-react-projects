import React from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css'

class Deck extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data : {},
            drawn : []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount(){
        let response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/");
        this.setState({
            data : response.data,
        })
    }

    async handleClick(){
        try{
            let response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.data.deck_id}/draw/`);
            let cardRes = response.data.cards[0];
            this.setState((state) =>({
                data : response.data,
                drawn : [...state.drawn, {id: cardRes.code, image: cardRes.image, name: `${cardRes.value} of ${cardRes.suit}` }] 
            }))
            console.log(this.state.drawn);
            if(this.state.data.remaining === 0){
                setTimeout(() => {
                    alert("We are out of cards");
                    this.setState({
                        data : {}
                    })
                }, 500);
            }
        }
        catch(error){
            alert(error.message);
        }
    }

    render(){
        const deck = this.state.drawn.map(c => <Card image={c.image} name={c.name} key={c.id} /> )
        return(
            <div>
                <h1 className="Deck-title">Card Dealer</h1>
                <h2 className="Deck-title subtitle">A little demo made with React</h2>
                {Object.keys(this.state.data).length !== 0 ? <button type="button" onClick={this.handleClick}>GIMME A CARD</button> : ""}
                <div className="Deck-cardarea">
                    {this.state.drawn.length !== 0 ? deck : ""} 
                </div>
            </div>
        );
    }
}

export default Deck;