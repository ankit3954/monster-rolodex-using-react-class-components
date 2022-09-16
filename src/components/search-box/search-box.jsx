import { Component } from "react";
import "./search-box.css"
class SearchBox extends Component{
    render(){
        const {onSearchHandler, className, placeHolder} = this.props;
        return(
            <div>
                 <input 
                    className={`search-box ${className}`} 
                    placeholder={placeHolder} 
                    type="search" 
                    onChange={onSearchHandler}
                />
            </div>
        );
    }
}

export default SearchBox;