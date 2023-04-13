import React, { Component } from 'react';
// import { robots } from './robots';
import SearchBox  from './SearchBox';
import CardList from './NewCard';

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
        fetch('https://jsonplaceholder.typicode.com/users').then(Response =>{
            return Response.json();
        }).then(users=>{  
            this.setState({robots: users});
        })
        

    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render () {
    
    const filteredRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())

    })

        return (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchchange = {this.onSearchChange}/>
                <CardList robots = {filteredRobots}/>
            </div>
            
        );
    }
   
}

export default App;