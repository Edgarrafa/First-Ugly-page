import React from "react"

class Header extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    
    render() {
        return(
            <div class="header">
                <h1>DrawCat</h1>
                <h4>The page were your cat drawing unleashes!</h4>
            </div>
        )
    }
}

export default Header