import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-12 text-center">
                <input type="search"/>
            </div>
        );
    }
}

export default SearchBar
