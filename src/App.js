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

  handleStateChange = event => {

    const {name, value} = event.target;

    this.setState({
      [name]: value
    })
  }
  
  // every time an image is clicked, the value of "count" and "topScore" in the state object incrememnt up by one. 
  // gameOn = id => {

  //   // finds the ID of the image that was clicked and then stored in a variable
  //   const choice = this.state.Bros.findIndex(thumbnail => thumbnail.id === id);












  //   // SETS THE TOP SCORE TO MATCH THE HIGHEST SCORE OF THE CURRENT SESSION. 
  //   if (this.state.count > this.state.topScore) {
  //     this.setState({ topScore: this.state.count });
  //   }





  //   // LOSER
  //   //=====================================================================================================
  //   // if the "clicked" property of the ID is tru then the game is over and everything will be set back to 0
  //   if(this.state.Bros[choice].clicked){

  //     console.log(choice)
      
  //     this.setState({
  //     count: 0,
  //     message: "Already been clicked! Try again!"
  //   })
  //   }
  //   // Bros: shuffle(this.state.pokemon.map(bros => { 
  //   //   bros.clicked = false; 
  //   //   return bros 
  //   // })), 
    
  //   console.log('click recorded')

  // };

  gameOn = id => {
    
    const choice = this.state.Bros.findIndex(bro => bro.id === id);

    
    if (this.state.Bros[choice].clicked) {
      
      this.setState({
        message: "Already Picked! Try Again!",
        pokemon: shuffle(this.state.Bros.map(bro => { bro.clicked = false; return bro })),
        score: 0
      });

      
      if (this.state.count > this.state.topScore) {
        this.setState({ topScore: this.state.count });
      }
    }
    else {
      
      const tempState = this.state.Bros.map(bro => {
        if (bro.id === id) {
          bro.clicked = true;
        }
        return bro
      })

      // increment score by 1
      this.setState({
        message: "Winning!",
        count: this.state.count + 1,
        Bros: shuffle(tempState)
      });
    }
    // this.setState({ pokemon: shuffle(this.state.pokemon) });
  }

  componentDidMount() {
    this.setState({ Bros: shuffle(this.state.Bros) });

  }

  // render method to display the return to the DOM. 
  render() {
    return <div>

      {/* this is where we can pass the state of count to the navbar where the actual values will be displayed */}
      <Navbar 
      status={this.state.message}
      count={this.state.count}
      topScore={this.state.topScore}
      gameOn={this.gameOn}
      />
      <Jumbotron />
      <div className="container mx-auto mb-5 p-3">
        <div className="row mx-auto">
    
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
