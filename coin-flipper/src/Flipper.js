import { Component } from "react";
import Coin from "./Coin";

class Flipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            side: -1
        }
        this.flip = this.flip.bind(this);
    }

    flip() {
        this.setState({side: Math.round(Math.random())});
    }

    render() {

        console.log(this.state.side);
        return(
            <div className="flipper_container">
                {this.state.side === -1 ? "" : <Coin side={this.state.side}/>}
                <button onClick={this.flip} className="flip-button">Flip</button>
            </div>
        );
    }
}

export default Flipper;