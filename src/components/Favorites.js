import React from "react";
import FavoritesList from "./FavoritesList";

class Favorites extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h2>Favorites</h2>
        <FavoritesList/>
      </div>
    );
  }
}

export default Favorites
