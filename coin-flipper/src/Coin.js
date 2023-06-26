import { Component } from "react";
import "./Coin.css"

class Coin extends Component {
    render() {
        const imgSrc = this.props.side ?
            "https://upload.wikimedia.org/wikipedia/commons/c/cb/1_hryvnia_coin_of_Ukraine%2C_2018_%28averse%29.jpg" :
            "https://upload.wikimedia.org/wikipedia/commons/2/20/1_hryvnia_coin_of_Ukraine%2C_2018_%28reverse%29.jpg";
        
            return(
            <div className="coin_container">
                <img className={`coin-img ${this.props.isFlipping ? "flip-coin" : ""}`} src={imgSrc} alt="coin"/>
            </div>
        );
    }
}

export default Coin;