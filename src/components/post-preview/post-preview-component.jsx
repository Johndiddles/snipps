import React, {Component} from 'react';
import Reactions from '../reactions/reactions.component'

import './post-preview-styles.scss'


class Preview extends Component {
    constructor() {
        super();

        this.state = {
            snipps: [],
            searchField: ''
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => this.setState({snipps: posts}));
    }

    render () {

        const {snipps, searchField} = this.state;
        const snippets = snipps.slice(0, 10);

        return (
            <>
                
                <div className="posts">
                    {snippets.map(posts => (
                        <div key={posts.id} className="post-preview-layout">
                            <div className="avatar">
                                <img src={`https://robohash.org/${posts.id}?set=set2`} alt="user's avatar"/>
                            </div>
                            <div className="post-preview">
                                <h3>{posts.title.substring(0, 20)}</h3>
                                <div >{posts.body.substring(0, 100) + "..."}</div>
                            </div>

                            <Reactions />
                                
                        </div>
                    ))}
                    
                </div>
            </>
        )
    }
    
}

export default Preview;