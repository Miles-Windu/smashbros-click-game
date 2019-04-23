import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Jumbotron from './components/layouts/Jumbotron';
import Footer from './components/layouts/Footer';
import Thumbnail from './components/Thumbnail';
import Bros from './smashbros.json'
import shuffle from "./components/Shuffle"

class App extends Component {
  // set the counters to reflect the the highest score and current score
  state = {
    Bros,
    count: 0,
    topScore: 0,
    message: "Click an image to begin!"
  }

  // makes sure that the components are mounted so state can be established. 
  componentDidMount() {
    this.setState({ Bros: shuffle(this.state.Bros) });
  }
  
  // logic for the game
  gameOn = id => {
    
    // saves the index and id of the clicked image into an array for easy reference.
    const choice = this.state.Bros.findIndex(bro => bro.id === id);

    
    // verifies if the index chosen has been clicked already...
    if (this.state.Bros[choice].clicked) {
      
      // if it has, then set the state of "message" to let them know that it has already been picked. 
      this.setState({
        message: "Already Picked! Try Again!",

        // shuffles the array in the DOM
        Bros: shuffle(this.state.Bros.map(bro => { bro.clicked = false; return bro })),

        // resets the score back to 0
        count: 0
      });

      // as the count increments by 1, the topScore will reflect the score as long as score is greater than the topScore... 
      if (this.state.count > this.state.topScore) {
      this.setState({ topScore: this.state.count });
    }
    }else {
      
      // maps through the array and changes the "clicked" property of the returned id to be true. 
      const tempState = this.state.Bros.map(bro => {
        if (bro.id === id) {
          bro.clicked = true;
        }
        return bro
      })

      this.setState({

        // as long as they don't repeat an image, the message will display "Winning!"
        message: "Winning!",

        // increments count by 1
        count: this.state.count + 1,

        // shuffles the array keeping the "clicked" property of the id's that are true... 
        Bros: shuffle(tempState)
      });
    }

    
  }
    


  // render method to display the return to the DOM. 
  render() {
    return <div>

      {/* this is where we can pass the state of count to the navbar where the actual values will be displayed */}
      <Navbar 
      status={this.state.message}
      count={this.state.count}
      topScore={this.state.topScore}
      />
      <Jumbotron />
      <div className="container mt-0 mb-5 p-0">
        <div className="row justify-content-center my-3">
    
        {/* Loops through the Bros array created in smashbros.json and makes a thumbnail for each member in the array */}
        {/* props are passed with the functions above */}
      {this.state.Bros.map(bro => (
          <Thumbnail
            gameOn={this.gameOn}
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
