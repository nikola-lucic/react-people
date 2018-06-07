import React from "react";

export const SearchBar = (props) => {
    const {handleSearchBar, SearchBarInputValue} = props
    return (
        <div className="row black-text">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix black-text">search</i>
                        <input id="icon_telephone" type="tel" className="validate" onChange ={handleSearchBar} value={SearchBarInputValue}/>
                    </div>
                </div>
            </form>
        </div>
    )
}