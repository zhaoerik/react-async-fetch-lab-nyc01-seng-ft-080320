// create your App component here

import React from 'react';

class App extends React.Component {

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
    }
}

export default App;