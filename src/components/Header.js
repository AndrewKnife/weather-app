import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="text-center">
        <h1 className="pt-4">Weather App</h1>
      </header>
    );
  }
}

export default Header
