import React from 'react';
import './Joke.css';

class Joke extends React.Component {
    static defaultProps = {
        colors : ["#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#F44336"],
        emojis : [
            <i className="em em-rolling_on_the_floor_laughing" aria-label="ROLLING ON THE FLOOR LAUGHING"></i>,
            <i className="em em-laughing" aria-label="SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES"></i>,
            <i className="em em-smiley" aria-label="SMILING FACE WITH OPEN MOUTH"></i>,
            <i className="em em-slightly_smiling_face" aria-label="SLIGHTLY SMILING FACE"></i>,
            <i className="em em-neutral_face" aria-label="NEUTRAL FACE"></i>,
            <i className="em em-confused" aria-label="CONFUSED FACE"></i>,
            <i className="em em-angry" aria-label="ANGRY FACE"></i>
        ]
    }

    getView(){
        if(this.props.votes >= 15)
            return 0;
        else if(this.props.votes >= 12)
            return 1;
        else if(this.props.votes >= 9)
            return 2;
        else if(this.props.votes >= 6)
            return 3;
        else if(this.props.votes >= 3)
            return 4;
        else if(this.props.votes >= 0)
            return 5;
        else 
            return 6;
    }

    render(){
        return(
            <div className="Joke">
                <div className="Joke-buttons">
                    <i className="fas fa-arrow-up" onClick={this.props.upvote}></i>
                    <span className="Joke-votes" style={{borderColor : this.props.colors[this.getView()]}}>{this.props.votes}</span>
                    <i className="fas fa-arrow-down" onClick={this.props.downvote}></i>
                </div>
                <h3 className="Joke-text">{this.props.joke}</h3>
                <div className="Joke-smiley">
                    {this.props.emojis[this.getView()]}
                </div>
            </div>
        );
    }
}

export default Joke;