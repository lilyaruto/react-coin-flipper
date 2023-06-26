import { Component } from "react";
import Coin from "./Coin";
import "./Flipper.css"

class Flipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            side: -1,
            headsCount: 0,
            tailsCount: 0,
            flipsCount: 0
        }
        this.flip = this.flip.bind(this);
    }

    flip() {
        const newFlip = Math.round(Math.random());
        this.setState(st => {
            return ({
                side: newFlip,
                flipsCount: st.flipsCount + 1,
                headsCount: newFlip === 1 ? st.headsCount + 1 : st.headsCount,
                tailsCount: newFlip === 0 ? st.tailsCount + 1 : st.tailsCount}
            );
        });
    }

    render() {
        console.log(this.state.headsCount);
        return(
            <div className="flipper_container">
                <h1 className="flipper_title">Let's flip a coin!</h1>
                {this.state.side === -1 ? "" : <Coin side={this.state.side}/>}
                <button onClick={this.flip} className="flip-button">Flip</button>
                <span>Out of {this.state.flipsCount} flips, there have been {this.state.headsCount} heads and {this.state.tailsCount} tails.</span>
            </div>
        );
    }
}

export default Flipper;