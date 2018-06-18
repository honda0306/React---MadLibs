import React, { Component } from 'react';

export default class MadLibs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word1: '',
            word2: '',
            word3: '',
            word4: '',
            showPhrase: false,
            showFields: true,
            open: false,
            main: 'open',
            article: true,
            placeholder: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetFields = this.resetFields.bind(this);
        this.share = this.share.bind(this);
        this.changeArticle = this.changeArticle.bind(this);
    }

    changeArticle() {
        this.setState({
            article: !this.state.article,
            placeholder: !this.state.placeholder
        })
    }    

    handleChange(value, event) {
        let change = {};
        change[value] = event.target.value;
        this.setState(change);
    }

    handleSubmit(event) {
        this.setState({
            showPhrase: true,
            showFields: false,
            open: !this.state.open,
            main: 'hide'
        })
        event.preventDefault();
    }

    resetFields() {
        this.setState({
            showPhrase: false,
            showFields: true,
            word1: '',
            word2: '',
            word3: '',
            word4: '',
            main: 'open',
            open: false
        })
    }

    share(event) {
        let userStory = 'As ' + (this.state.article?'a ' : 'an ') + this.state.word1 + ', I want to ' + this.state.word2 + ' so that my ' + this.state.word3 + ' can be ' + this.state.word4 + '.';

        event.preventDefault();

        window.open('https://twitter.com/intent/tween?text=' + userStory + ' &hashtags=reactprojects')
    }

    render() {
        const classes = this.state.open ? 'form' : 'form hide';

        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit} className={this.state.main + ' fields '}>
                        
                    </form>
                </div>
            </div>
        )
    }
}