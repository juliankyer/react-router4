import React, { Component } from 'react';
import './App.css';
import CreateItem from './createItem.js';
import { NavBar }from './navBar.js';
import { Home }from './home.js';
import { ListItem }from './listItem.js';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [{title: 'cool', body: 'yay', id: Date.now()}, {title: 'asld;kfj', body: 'yay', id: Date.now()+1}],
      thoughts: []
    };
  }

submitIdea(idea) {
  const { ideas } = this.state;
  ideas[ideas.length] = { ...idea, id: Date.now() }
  this.setState({ ideas: ideas});
}

submitThought(thought) {
  const { thoughts } = this.state;
  thoughts[thoughts.length] = { ...thought, id: Date.now() }
  this.setState({ thoughts: thoughts});
}

  render() {
    const { ideas, thoughts } = this.state;

    return (
      <Router>
        <div className='App'>
          <div className='App-header'>
            <div className='App-title'>Idea & Thought Box</div>
            <NavBar />
          </div>
          
          <Route exact path='/' component={Home}/>
          
          <Route path='/create-idea' render={ () => 
            <CreateItem submitForm={this.submitIdea.bind(this)}/>
            } />
            
          <Route path='/ideas' render={(props) => {
            return (
              <div className='list'>
                {ideas.map((idea) => <ListItem key={idea.id} {...idea}/>)}
              </div>
            )  
          }} />
          
        <Route path='/ideas/:ideaId' render={({match}) => {
            const idea = ideas.find((idea) => idea.id === parseInt(match.params.ideaId))
            if (idea) {
              return <ListItem {...idea}/>
            }
            return (
              <div className='list-item'>Fuck off</div>
            )
          }} />
          
        <Route path='/create-thought' render={ () => {
          return <CreateItem submitForm={this.submitThought.bind(this)} />
          }} />
          
        <Route path='/list-thoughts' render={() => {
            return (
              <div className='list'>
                {thoughts.map((thought) => <ListItem key={thought.id} {...thought}/>)}
              </div>
            )
          }}/>
          
        <Route path='/thoughts/:thoughtId' render={({match}) => {
              const thought = thoughts.find((thought) => thought.id === parseInt(match.params.thoughtId))
              if (thought) {
                return <ListItem {...thought}/>
              }
              return (
                <div className='list-item'>Fuck off</div>
              )
            }} />
          
        </div>
      </Router>
    );
  }
}

export default App;
