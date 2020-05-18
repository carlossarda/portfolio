import React, {Component} from 'react';
import Clock from "./Clock";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {links: []};
    }

    componentDidMount() {
        this.setState({
            links: this.state.links.push({
                    "id": 1,
                    "nome": "Home",
                    "endereco": "/"
                },
                {
                    "id": 2,
                    "nome": "React",
                    "endereco": "#"
                },
                {
                    "id": 3,
                    "nome": "Vue",
                    "endereco": "#"
                })
        });
    }

    render() {
        return (
            <ul className={"navegacao"}>
                <Link links={this.state.links}/>
                <Clock class={"clock"}/>
            </ul>
        );
    };
}

export class Link extends Component {
    constructor(props) {
        super(props);
        this.links = props.links;
    }

    render() {
        return (
            this.links.map((link, index) => {
                return <li key={link.id.toString()}><a href={link.endereco}>{link.nome}</a></li>;
            })
        );
    }
}