import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Jumbotron from './components/layouts/Jumbotron';
import Footer from './components/layouts/Footer';
import Thumbnail from './components/Thumbnail';
import Bros from './smashbros.json'

class App extends Component {

  state = {
    Bros,
    count: 0,
    topScore: 0
  }

  handleStateChange = event => {

    const {name, value} = event.target;

    this.setState({
      [name]: value
    })
  }
 
  handleIncrement = () => {
    this.setState({
      count: this.state.count +1,
      topScore: this.state.topScore +1
    })

  };

  randomize = Bros => {
    Bros.sort(() => Math.random() - 0.5);
  }

  render() {
    return <div>
      <Navbar 
      count={this.state.count}
      topScore={this.state.topScore}
      />
      <Jumbotron />
      <div className="container mx-auto mb-5 p-3">
        <div className="row mx-auto">
      {this.state.Bros.map(bro => (
          <Thumbnail
            count={this.state.count}
            topScore={this.state.topScore}
            onClick={this.randomize}
            id={bro.id}
            key={bro.id}
            name={bro.name}
            image={bro.image}
            clicked={bro.clicked}
          />
        ))}
         </div>
     </div>
      <Footer />
    </div>
  }
}
export default App;
