import React, { Component } from 'react';

class App extends Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json') 
        .then(resp => resp.json())
        .then((data) => {
            console.log(data, () => console.log(data))
            this.setState({
                peopleInSpace: data.people   
            }, console.log(data.people))
        })
    }

    render() {
    
        return (
            <div>
                <h1>People In Space</h1>
                <h4>Take a moment and pay some respect to:</h4>
            {this.state.peopleInSpace.map((person, id) => <li key={id}>{person.name}</li>)}
            </div>
        )
    }


}


export default App