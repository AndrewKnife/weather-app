import React from "react";
import InputDropDown from "./basic/InputDropDown";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-12 text-center">
                <InputDropDown/>
            </div>
        );
    }
}

export default SearchBar
