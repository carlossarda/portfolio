import React,{Component} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhp,faJs,faHtml5,faCss3,faDocker} from "@fortawesome/free-brands-svg-icons";

export default class GithubCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: []
        };
    }

    componentDidMount() {
        axios.get('/api/github/repos/' + this.props.user.login)
            .then(response => {
                this.setState({
                    repos: response['data']
                })
            })
            .catch(error => {
                console.log(error);
            })

    }

    render() {

        return (
            <div className={'github-card'}>
                <div className={'repositorios'}>
                    <Repositorios repositorios={this.state.repos}/>
                </div>
            </div>
        );
    }
}

export class Avatar extends Component {
    render() {

        return (
            <img className={'github-avatar'} src={this.props.avatar}></img>
        );
    }
}

export class Repositorios extends Component {

    formatarData (data) {
        let config = {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        };
        let date = new Date(data);

        return date.toLocaleDateString('pt-BR',config);
    }

    iconeLinguagem(linguagem) {
        switch (linguagem) {
            case 'PHP': return faPhp;
            case 'JavaScript': return faJs;
            case 'Dockerfile': return faDocker;
            case 'CSS': return faCss3;
            default: return faHtml5;
        }
    }

    static openDetails(repositorio, evt){
        console.log(repositorio);
    }

    render() {

        return (
            this.props.repositorios.map(repositorio => {
                return <div key={repositorio.node_id} className={'repositorio'}
                            onClick={(e) => Repositorios.openDetails(repositorio,e)}>
                    <FontAwesomeIcon icon={this.iconeLinguagem(repositorio.language)}/>
                    <p>{repositorio.name}</p>
                </div>

            })
        );
    }
}