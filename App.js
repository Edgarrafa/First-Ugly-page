import React from "react"


import "./index.css"
import Header from "./components/Header"
import Body from "./components/Body"

class App extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    
    render() {
        return(
            <div>
                <Header />
                <br />
                <Body />
                <hr />
                <Body />
            </div>
        )
    }
}

export default App