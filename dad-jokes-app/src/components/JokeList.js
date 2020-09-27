import React from 'react';
import axios from 'axios';
import Joke from './Joke';
import Loader from './Loader';
import { v4 as uuidv4 } from 'uuid';
import './JokeList.css';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            jokes : JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            loading : false
        }
        this.getMore = this.getMore.bind(this);
    }

    componentDidMount(){
        if(this.state.jokes.length === 0)
            this.getJokes();
    }

    async getJokes(){
        try{
            let jokes = [];
            while(jokes.length < 10){
                let response = await axios.get("https://icanhazdadjoke.com/", {
                    headers: { Accept : "application/json"}
                });
                jokes.push({
                    text : response.data.joke, 
                    id : uuidv4(),
                    votes : 0,

                });
            }
            this.setState((st) =>({
                jokes : jokes,
                loading: false
            }),() =>{ window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)); })
        }catch(err){
            alert(err.message);
            this.setState({ loading: false})
        }
        
    }

    getVotes(id, delta){
        this.setState((state) => ({ // In setState we can pass a second argument as a callback function that will execute after setting the state and re-render
            jokes : state.jokes.map( j => j.id === id ? {...j, votes : j.votes + delta} : j )
        }),
        () => {window.localStorage.setItem("jokes",JSON.stringify(this.state.jokes));}
        )
    }

    getMore(){
        window.localStorage.clear();
        this.setState({
            loading: true
        })
        this.getJokes();
    }

    render(){
        const jokeList = this.state.jokes.map(data=> <Joke 
            joke={data.text} 
            votes={data.votes} 
            key={data.id} 
            upvote={() => this.getVotes(data.id, 1)} 
            downvote={() => this.getVotes(data.id, -1)} 
        />)

        return(
            <div>
                {
                    this.state.loading ? <Loader /> :
                    <div className="JokeList">
                        <div className="JokeList-sidebar">
                            <h1 className="JokeList-title"><span>Dad</span> Jokes</h1>
                            <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt="Laughing emoji"/>
                            <button type="button" className="JokeList-getmore" onClick={this.getMore}>Fetch Jokes</button>
                        </div>
                        <div className="JokeList-jokes">
                            {jokeList}
                        </div>
                    </div>
                }   
            </div>
        );
    }
}

export default List;