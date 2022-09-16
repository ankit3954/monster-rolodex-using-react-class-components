import { Component } from "react";
import "./card-list.css";
import Card from "./card";
class CardList extends Component{
    render(){

        const {monster}  = this.props;
        return(
            <div className="card-list">
                {
                    monster.map((elem) => {
                        return(
                            <Card monsters={elem} />
                        );
                    })
                }

            </div>
        );
    }
}

export default CardList;