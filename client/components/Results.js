import React, { Component } from 'react'

export default class Results extends Component {
    render() {
        return (
            <div className = {this.props.className + ' resultForm '}>
                <form>
                    <div classname='phrase'>
                        As {this.props.article ? 'a' : 'an'} {this.props.word1}, <br/>
                    </div>
                    <div classname='unique'>
                        I want to <span>{this.props.word2}</span> so that <span>my {this.props.word3}</span> can be <span>{this.props.word4}</span>.
                    </div>
                    <button className='share' onClick={this.props.share}>Share this phrase</button>
                    <a href='#' className='align-right' onClick={this.props.doParentReset}>Generate a new phrase</a>
                </form>
            </div>
        )
    }
}