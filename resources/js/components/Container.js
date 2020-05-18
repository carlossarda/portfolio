import React, {Component} from 'react';
import axios from 'axios';
import GithubCard,{Avatar} from "./GithubCard";

export default class Container extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: []
        };
    }

    componentDidMount() {
        axios.get('/api/github/user/carlossarda')
            .then(response => {
                this.setState({
                    user : response['data']
                })
            })
            .catch(error => {
                console.log(error);
            })

    }

    render() {
        return (
            <div className={'container'}>
                <div className={"titulo"}>
                    <Avatar avatar={this.state.user.avatar_url}/>
                    <h2>Bem vindo ao portfólio de {this.state.user.name}</h2>
                </div>
                <GithubCard user={this.state.user}/>
            </div>
        );
    }
}