import { Component } from "react";

class Card extends Component{
    render(){

        console.log(this.props);
    
        const {name, email, id} = this.props.monsters;
        return(
            <div className="card-container" key={id}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monsters ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        );
    }
}

export default Card;