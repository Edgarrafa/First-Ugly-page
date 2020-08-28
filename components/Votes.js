import React from "react"

import "../index.css"


class Votes extends React.Component {
    constructor() {
        super()
        this.state = {
                count1: 0,
                count2: 0
        }
        this.handleUpvote = this.handleUpvote.bind(this)
        this.handleDownvote = this.handleDownvote.bind(this)
    }

    handleUpvote() {
        this.setState(prevState => {
            return {
                count1: prevState.count1 + 1
            }
        })
    }

    handleDownvote() {
        this.setState(prevState => {
            return {
                count2: prevState.count2 + 1
            }
        })
    }

    render() {
        return(
            <div id="voting">
                <p>{this.state.count1}</p>
                <button onClick={this.handleUpvote}>Upvote</button>
                <p>{this.state.count2}</p>
                <button onClick={this.handleDownvote}>Downvote</button>
            </div>
        )
    }
}

export default Votes