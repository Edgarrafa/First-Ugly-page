import React from "react"

import "../index.css"
import Image from "./Image"
import Votes from "./Votes"
import Comments from "./Comments"

class Body extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    
    render() {
        return(
            <div class="center">
                <Image />
                <Votes />
                <Comments />
            </div>
        )
    }
}

export default Body