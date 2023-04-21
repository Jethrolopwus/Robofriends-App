import React, { Component } from 'react';
// import { robots } from './robots';
import SearchBox  from '../components/SearchBox';
import CardList from '../components/NewCard';
import Scroll from '../components/Scroll'; 

import './App.css'

class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: [],
    searchfield: '',
        }
    } 
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response =>Response.json())
        .then(users=> this.setState({robots: users}));
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render () {
        const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return !robots.length ?

     <h1>Loading</h1> :

        (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchchange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>  
        )
    }    
}
export default App;